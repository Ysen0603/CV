import io
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
import PyPDF2
import docx
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini API (replace with your actual API key)
genai.configure(api_key="")

class MatchResult(BaseModel):
    score: float
    details: str

def extract_text_from_pdf(file):
    pdf_reader = PyPDF2.PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

def extract_text_from_docx(file):
    doc = docx.Document(file)
    return " ".join([paragraph.text for paragraph in doc.paragraphs])

@app.post("/match", response_model=MatchResult)
async def match_cv_to_job(
    cv: UploadFile = File(...),
    job_description: str = Form(...)
):
    # Read the CV content
    cv_content = await cv.read()
    
    # Determine file type and extract text
    if cv.filename.lower().endswith('.pdf'):
        cv_text = extract_text_from_pdf(io.BytesIO(cv_content))
    elif cv.filename.lower().endswith('.docx'):
        cv_text = extract_text_from_docx(io.BytesIO(cv_content))
    else:
        # Attempt to decode as text, trying different encodings
        encodings = ['utf-8', 'latin-1', 'ascii']
        for encoding in encodings:
            try:
                cv_text = cv_content.decode(encoding)
                break
            except UnicodeDecodeError:
                continue
        else:
            raise HTTPException(status_code=400, detail="Unable to decode CV file. Please ensure it's a text, PDF, or DOCX file.")

    # Create the prompt for Gemini
    prompt = f"""
    Given the following CV and job description, provide a match score between 0 and 100,
    where 100 is a perfect match and 0 is no match at all. Also provide details about the match,

    CV:
    {cv_text}

    Job Description:
    {job_description}

    Respond in the following format:
    Score: score between 0 and 1
    Details: explanation of the match
    """

    # Generate response from Gemini
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)

    # Parse the response
    response_text = response.text
    score_line, details_line = response_text.split("\n", 1)
    score = float(score_line.split(":")[1].strip())
    details = details_line.split(":", 1)[1].strip()

    return MatchResult(score=score, details=details)

@app.get("/")
async def root():
    return {"message": "Welcome to the CV Matcher API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
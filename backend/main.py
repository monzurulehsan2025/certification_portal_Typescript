from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI(title="Nova AI Backend", version="1.0.0")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    query: str

class QueryResponse(BaseModel):
    answer: str
    sources: list[str]
    processing_time: float

@app.post("/api/ask", response_model=QueryResponse)
async def ask_ai(request: QueryRequest):
    start_time = time.time()
    
    # Simulate thinking/processing time
    time.sleep(1.5)
    
    query_lower = request.query.lower()
    
    if "ce" in query_lower or "requirement" in query_lower:
        answer = "For the 2025 cycle, professional certification requires **50 Continuing Education (CE) credits**. At least 20 credits must be from primary medical research participation or peer-reviewed publications. The deadline for submission is **December 31, 2025**."
        sources = ["Global Certification Handbook 2025", "CE Protocol v4.1"]
    elif "compliance" in query_lower:
        answer = "Current compliance standards emphasize transparency in industry-physician interactions. The latest **Sunshine Act** updates require detailed reporting for any transfer of value exceeding $15.50."
        sources = ["Regulatory Compliance Guide", "Sunshine Act Federal Register"]
    else:
        answer = f"Our RAG engine has analyzed your query: '{request.query}'. Based on the Nova Core documentation, we recommend following the evidence-based protocol established in our 2024 Clinical Outcomes report. Please verify specific module details in your certifications tab."
        sources = ["Nova Core Internal Docs", "Clinical Outcomes Report 2024"]

    end_time = time.time()
    
    return QueryResponse(
        answer=answer,
        sources=sources,
        processing_time=round(end_time - start_time, 2)
    )

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# Nova Professional | Full-Stack Certification Portal

This project is a technical mockup for a premium medical certification portal, featuring a Next.js frontend and a FastAPI (Python) backend with RAG-simulated AI capabilities.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 2. Running the Frontend
```bash
# From the root directory
npm install
npm run dev
```
The dashboard will be available at `http://localhost:3000`.

### 3. Running the Python Backend
```bash
# New terminal, from the root directory
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r backend/requirements.txt
python3 backend/main.py
```
The API serves at `http://localhost:8000`.

## 🧠 AI Integration (RAG Engine)
The **MedAI Assistant** on the dashboard communicates with the Python microservice. 
- The backend uses **FastAPI** to handle high-performance asynchronous requests.
- It simulates a **Retrieval-Augmented Generation (RAG)** pipeline by analyzing user queries and retrieving context-specific metadata (e.g., CE credit requirements, Sunshine Act compliance).

## 🛠️ Tech Stack
- **Frontend**: Next.js, TypeScript, CSS Modules (Premium Glassmorphism)
- **Backend**: Python, FastAPI, Pydantic, Uvicorn
- **Ecosystem**: AI Agent Monitoring, Vector retrieval simulation, and professional medical knowledge graph.

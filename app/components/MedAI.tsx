"use client";
import { useState } from 'react';

const MedAI = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle'); // idle, thinking, complete
  const [response, setResponse] = useState<{ answer: string; sources: string[] } | null>(null);

  const handleAsk = async () => {
    if (!query) return;
    setStatus('thinking');

    try {
      const res = await fetch('http://localhost:8000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse({ answer: data.answer, sources: data.sources });
        setStatus('complete');
      } else {
        throw new Error('Backend error');
      }
    } catch (error) {
      console.error('Failed to fetch from AI backend:', error);
      setStatus('idle');
      alert('AI Backend not reachable. Please ensure the Python service is running on port 8000.');
    }
  };

  return (
    <div className="med-ai-card">
      <div className="ai-header">
        <div className="ai-status">
          <div className="pulse-circle"></div>
          <span>MedAI Assistant Online</span>
        </div>
        <div className="rag-label">Powered by RAG Engine</div>
      </div>

      <div className="interaction-area">
        {status === 'complete' && response ? (
          <div className="ai-response animate-fade-in">
            <p className="response-text">
              {response.answer}
            </p>
            <div className="sources">
              <span>Sources:</span>
              {response.sources.map((source, idx) => (
                <div key={idx} className="source-tag">{source}</div>
              ))}
            </div>
            <button className="reset-btn" onClick={() => {
              setStatus('idle');
              setResponse(null);
            }}>Ask another question</button>
          </div>
        ) : (
          <div className="prompt-area">
            <h3>Ask MedAI anything about your certifications or medical guidelines</h3>
            <div className="input-group">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. What are the CE requirements for 2025?"
              />
              <button
                onClick={handleAsk}
                disabled={status === 'thinking'}
                className={status === 'thinking' ? 'loading' : ''}
              >
                {status === 'thinking' ? 'Analyzing...' : 'Ask AI'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .med-ai-card {
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(99, 102, 241, 0.1));
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--border-radius);
          padding: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .med-ai-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .ai-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary);
        }

        .pulse-circle {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(56, 189, 248, 0.4);
          animation: pulse 2s infinite;
        }

        .rag-label {
          font-size: 0.7rem;
          background: rgba(56, 189, 248, 0.1);
          padding: 4px 8px;
          border-radius: 6px;
          color: #bdbdbd;
          text-transform: uppercase;
        }

        .prompt-area h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .input-group {
          display: flex;
          gap: 0.75rem;
        }

        .input-group input {
          flex: 1;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--card-border);
          padding: 0.75rem 1rem;
          border-radius: 10px;
          color: white;
          outline: none;
        }

        .input-group button {
          background: var(--primary);
          color: var(--background);
          border: none;
          padding: 0 1.5rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .input-group button:hover {
          background: var(--accent);
          transform: translateY(-1px);
        }

        .ai-response {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .response-text {
          line-height: 1.6;
          color: #e2e8f0;
          margin-bottom: 1rem;
        }

        .sources {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .source-tag {
          padding: 4px 8px;
          background: var(--sidebar-bg);
          border: 1px solid var(--card-border);
          border-radius: 4px;
        }

        .reset-btn {
          margin-top: 1rem;
          background: transparent;
          border: 1px dashed var(--card-border);
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .reset-btn:hover {
          border-color: var(--primary);
          color: white;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(56, 189, 248, 0); }
          100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }
      `}</style>
    </div>
  );
};

export default MedAI;

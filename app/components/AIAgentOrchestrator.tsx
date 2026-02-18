"use client";
import { useState, useEffect } from 'react';

const AIAgentOrchestrator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [agents, setAgents] = useState([
    { id: 'compliance', name: 'Compliance Agent', status: 'ready', task: 'Monitoring Sunshine Act updates', load: 12 },
    { id: 'clinical', name: 'Clinical Data Agent', status: 'processing', task: 'Analyzing Pharmaco-vigilance data', load: 84 },
    { id: 'regulatory', name: 'Regulatory AI', status: 'idle', task: 'Waiting for query...', load: 0 },
  ]);

  const ragSteps = [
    { label: 'Query Normalization', status: 'complete', desc: 'Parsing medical terminology and intent' },
    { label: 'Vector Retrieval', status: 'processing', desc: 'Searching Global Private Knowledge Base (1.2M chunks)' },
    { label: 'Context Ranking', status: 'pending', desc: 'Filtering top 5 most relevant clinical papers' },
    { label: 'LLM Generation', status: 'pending', desc: 'Synthesizing response with GPT-4o / Claude 3.5' },
  ];

  // Simulated agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents(prev => prev.map(a =>
        a.id === 'clinical' ? { ...a, load: Math.floor(Math.random() * 20) + 70 } : a
      ));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orchestrator-container animate-fade-in">
      <div className="tech-header">
        <h2>AI Agent Ecosystem & RAG Pipeline</h2>
        <div className="system-metrics">
          <div className="metric">
            <span className="label">Context Window</span>
            <div className="gauge">
              <div className="gauge-fill" style={{ width: '42%' }}></div>
            </div>
            <span className="value">54k / 128k tokens</span>
          </div>
          <div className="metric">
            <span className="label">Latency</span>
            <span className="value success">1.2s</span>
          </div>
        </div>
      </div>

      <div className="tech-grid">
        {/* Agent Monitor */}
        <div className="tech-card agents-monitor">
          <div className="card-header">
            <h3>Active AI Agents</h3>
            <span className="count">3 Online</span>
          </div>
          <div className="agent-list">
            {agents.map(agent => (
              <div key={agent.id} className="agent-item">
                <div className="agent-meta">
                  <div className={`status-dot ${agent.status}`}></div>
                  <span className="agent-name">{agent.name}</span>
                </div>
                <div className="agent-task">{agent.task}</div>
                <div className="agent-load">
                  <div className="load-bar" style={{ width: `${agent.load}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RAG Visualization */}
        <div className="tech-card rag-visual">
          <div className="card-header">
            <h3>Live RAG Retrieval Pipeline</h3>
            <button className="simulate-btn" onClick={() => setActiveStep((activeStep + 1) % 4)}>
              Cycle Pipeline
            </button>
          </div>
          <div className="pipeline-steps">
            {ragSteps.map((step, i) => (
              <div key={i} className={`pipeline-step ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'done' : ''}`}>
                <div className="step-marker">
                  {i < activeStep ? '✓' : i + 1}
                </div>
                <div className="step-info">
                  <h4>{step.label}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < ragSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Context */}
        <div className="tech-card knowledge-graph">
          <div className="card-header">
            <h3>Medical Knowledge Context</h3>
          </div>
          <div className="graph-placeholder">
            <div className="node center">NOVA CORE</div>
            <div className="node p1">FDA Regs</div>
            <div className="node p2">EMA Data</div>
            <div className="node p3">Clinical Trials</div>
            <div className="node p4">Ethics</div>
            <svg className="edge-layer">
              <line x1="50%" y1="50%" x2="20%" y2="20%" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .orchestrator-container {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius);
          padding: 2rem;
          margin-top: 2.5rem;
          color: white;
        }

        .tech-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 1.5rem;
        }

        .system-metrics {
          display: flex;
          gap: 2rem;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .label {
          font-size: 0.7rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .gauge {
          width: 120px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .gauge-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 2px;
          box-shadow: 0 0 10px var(--primary);
        }

        .value {
          font-size: 0.875rem;
          font-weight: 700;
        }

        .value.success { color: var(--success); }

        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 1.5rem;
        }

        .tech-card {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 1.25rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .card-header h3 {
          font-size: 0.9rem;
          color: var(--primary);
        }

        .agent-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .agent-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .status-dot.ready { background: var(--success); }
        .status-dot.processing { background: var(--warning); animation: pulse 1s infinite; }
        .status-dot.idle { background: #64748b; }

        .agent-name { font-size: 0.8rem; font-weight: 600; }
        .agent-task { font-size: 0.7rem; color: #94a3b8; margin-bottom: 0.5rem; }

        .load-bar {
          height: 3px;
          background: var(--primary);
          transition: width 0.5s ease;
        }

        .pipeline-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .pipeline-step {
          display: flex;
          gap: 1rem;
          position: relative;
          opacity: 0.4;
          transition: all 0.3s;
        }

        .pipeline-step.active { opacity: 1; transform: translateX(5px); }
        .pipeline-step.done { opacity: 0.8; }

        .step-marker {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--sidebar-bg);
          border: 1px solid var(--card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          z-index: 2;
        }

        .active .step-marker {
          background: var(--primary);
          color: var(--background);
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary);
        }

        .done .step-marker {
          background: var(--success);
          color: white;
          border-color: var(--success);
        }

        .step-info h4 { font-size: 0.8rem; margin-bottom: 2px; }
        .step-info p { font-size: 0.65rem; color: #94a3b8; }

        .step-connector {
          position: absolute;
          left: 11px;
          top: 24px;
          width: 2px;
          height: 30px;
          background: var(--card-border);
        }

        .graph-placeholder {
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node {
          position: absolute;
          padding: 6px 12px;
          background: var(--sidebar-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          font-size: 0.6rem;
          font-weight: 700;
          z-index: 2;
        }

        .node.center { background: rgba(56, 189, 248, 0.2); border-color: var(--primary); font-size: 0.75rem; }
        .node.p1 { top: 10%; left: 10%; }
        .node.p2 { top: 10%; right: 10%; }
        .node.p3 { bottom: 10%; left: 10%; }
        .node.p4 { bottom: 10%; right: 10%; }

        .edge-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 1;
        }

        .simulate-btn {
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-size: 0.65rem;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AIAgentOrchestrator;

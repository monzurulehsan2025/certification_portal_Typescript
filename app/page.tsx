"use client";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MedAI from './components/MedAI';
import Stats from './components/Stats';
import Resources from './components/Resources';
import AIAgentOrchestrator from './components/AIAgentOrchestrator';

export default function Dashboard() {
  const certifications = [
    { name: 'Board Certified Medical Affairs Specialist (BCMAS)', status: 'In Progress', progress: 65, deadline: 'Mar 15, 2024' },
    { name: 'Prior Authorization Certified Specialist (PACS)', status: 'Completed', progress: 100, deadline: 'Completed' },
    { name: 'Medical Science Liaison (MSL) Excellence', status: 'Not Started', progress: 0, deadline: 'Apr 20, 2024' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header title="Patient Outcomes Dashboard" />

        <div className="content-inner">
          <MedAI />

          <Stats />

          <div className="dashboard-sections">
            <section className="certifications-section">
              <div className="section-header">
                <h2>My Certifications</h2>
                <button className="view-all">View All</button>
              </div>
              <div className="cert-list">
                {certifications.map((cert, i) => (
                  <div key={i} className="cert-item animate-fade-in" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                    <div className="cert-info">
                      <h3>{cert.name}</h3>
                      <span className="cert-deadline">Deadline: {cert.deadline}</span>
                    </div>
                    <div className="cert-status-area">
                      <span className={`status-badge ${cert.status.toLowerCase().replace(' ', '-')}`}>
                        {cert.status}
                      </span>
                      <div className="progress-ring-mini">
                        {cert.progress}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Resources />
            </section>

            <section className="learning-path">
              <div className="section-header">
                <h2>Next Steps</h2>
              </div>
              <div className="path-card">
                <div className="step active">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Complete Module 7: Compliance</h4>
                    <p>Understanding the latest Sunshine Act updates.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Attend Live Webinar</h4>
                    <p>RAG Implementations in Medical Affairs - Tomorrow 2PM.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <AIAgentOrchestrator />
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          margin-left: 280px;
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.05), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.05), transparent 40%);
        }

        .content-inner {
          padding: 0 2rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-sections {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: 1.25rem;
        }

        .view-all {
          background: transparent;
          border: none;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cert-item {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 1.25rem;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .cert-item:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--primary);
          transform: translateX(4px);
        }

        .cert-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: #f1f5f9;
        }

        .cert-deadline {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .cert-status-area {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .status-badge.in-progress {
          background: rgba(245, 158, 11, 0.1);
          color: var(--warning);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .status-badge.completed {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-badge.not-started {
          background: rgba(148, 163, 184, 0.1);
          color: #94a3b8;
          border: 1px solid rgba(148, 163, 184, 0.3);
        }

        .progress-ring-mini {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 3px solid var(--sidebar-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          background: radial-gradient(circle, transparent 70%, rgba(56, 189, 248, 0.1) 100%);
        }

        .path-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 1.5rem;
          border-radius: 12px;
        }

        .step {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 15px;
          top: 35px;
          width: 2px;
          height: 30px;
          background: var(--card-border);
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: var(--sidebar-bg);
          border: 1px solid var(--card-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #94a3b8;
          z-index: 1;
        }

        .step.active .step-number {
          background: var(--primary);
          color: var(--background);
          border-color: var(--primary);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }

        .step-content h4 {
          font-size: 0.9rem;
          color: #f1f5f9;
        }

        .step-content p {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        @media (max-width: 1024px) {
          .dashboard-sections {
            grid-template-columns: 1fr;
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

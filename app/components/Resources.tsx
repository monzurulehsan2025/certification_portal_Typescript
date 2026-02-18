const Resources = () => {
    const resources = [
        { title: '2025 Pharmaceutical Regulatory Update', type: 'PDF', size: '2.4 MB', date: '2 days ago' },
        { title: 'MSL Best Practices: Digital Engagement', type: 'Video', size: '15 min', date: '1 week ago' },
        { title: 'Ethics in Medical Affairs: A Global Guide', type: 'E-Book', size: '5.1 MB', date: '3 weeks ago' },
    ];

    return (
        <div className="resources-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="section-header">
                <h2>Resource Library</h2>
                <button className="view-all">Browse All</button>
            </div>
            <div className="resource-list">
                {resources.map((res, i) => (
                    <div key={i} className="resource-item">
                        <div className="resource-icon">
                            {res.type === 'PDF' && '📄'}
                            {res.type === 'Video' && '🎬'}
                            {res.type === 'E-Book' && '📚'}
                        </div>
                        <div className="resource-details">
                            <h4>{res.title}</h4>
                            <p>{res.type} • {res.size} • Added {res.date}</p>
                        </div>
                        <button className="download-btn">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .resources-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          margin-top: 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: 1.1rem;
        }

        .view-all {
          background: transparent;
          border: none;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .resource-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .resource-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s;
        }

        .resource-item:hover {
          border-color: rgba(56, 189, 248, 0.2);
          background: rgba(15, 23, 42, 0.6);
        }

        .resource-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sidebar-bg);
          border-radius: 8px;
        }

        .resource-details {
          flex: 1;
        }

        .resource-details h4 {
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .resource-details p {
          font-size: 0.7rem;
          color: #64748b;
        }

        .download-btn {
          background: transparent;
          border: 1px solid var(--card-border);
          color: #94a3b8;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .download-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }
      `}</style>
        </div>
    );
};

export default Resources;

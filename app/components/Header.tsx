const Header = ({ title }: { title: string }) => {
    return (
        <header className="header">
            <div className="title-section">
                <h1 className="page-title">{title}</h1>
            </div>

            <div className="search-section">
                <div className="search-bar">
                    <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search certifications, resources..." />
                </div>
            </div>

            <div className="action-section">
                <button className="icon-btn">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge">3</span>
                </button>
                <button className="premium-btn">
                    <span className="sparkle">✨</span>
                    Upgrade to Gold
                </button>
            </div>

            <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--card-border);
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.5rem;
          color: var(--foreground);
        }

        .search-section {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 0 2rem;
        }

        .search-bar {
          width: 100%;
          max-width: 500px;
          background: var(--sidebar-bg);
          border: 1px solid var(--card-border);
          padding: 0.6rem 1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .search-bar:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
        }

        .search-icon {
          width: 18px;
          height: 18px;
          color: #64748b;
        }

        .search-bar input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
          outline: none;
          font-size: 0.875rem;
        }

        .action-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .icon-btn:hover {
          background: var(--glass-bg);
          color: white;
        }

        .icon-btn svg {
          width: 24px;
          height: 24px;
        }

        .badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: var(--primary);
          color: var(--background);
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 5px;
          border-radius: 10px;
          border: 2px solid var(--background);
        }

        .premium-btn {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .premium-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
        }

        .sparkle {
          font-size: 1rem;
        }
      `}</style>
        </header>
    );
};

export default Header;

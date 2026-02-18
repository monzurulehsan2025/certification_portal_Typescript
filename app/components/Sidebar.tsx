import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', active: true },
    { name: 'Certifications', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { name: 'Continuing Ed', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { name: 'Medical Lab', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.638.319a4 4 0 01-1.833.435 4 4 0 01-1.833-.435l-.638-.319a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547m0 0l2.146 2.146a2 2 0 002.828 0l.97-.97m0 0a2 2 0 012.828 0l.97.97m0 0a2 2 0 012.828 0l.97-.97m0 0l2.146-2.146' },
    { name: 'Compliance', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo-box">
          <span className="logo-text">Nova</span>
        </div>
        <span className="logo-subtext">Professional Portal</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link key={item.name} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
            <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="user-section">
        <div className="user-avatar">JD</div>
        <div className="user-info">
          <span className="user-name">Dr. Jane Doe</span>
          <span className="user-role">Member since 2024</span>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--card-border);
          display: flex;
          flex-direction: column;
          padding: 2rem 1rem;
          position: fixed;
          left: 0;
          top: 0;
        }

        .logo-section {
          padding: 0 1rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .logo-box {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -1px;
          font-family: var(--font-heading);
        }

        .logo-subtext {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: -4px;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1rem;
          border-radius: 12px;
          color: #94a3b8;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .nav-item:hover {
          background: var(--glass-bg);
          color: var(--foreground);
        }

        .nav-item.active {
          background: linear-gradient(to right, rgba(56, 189, 248, 0.1), transparent);
          color: var(--primary);
          border-left: 3px solid var(--primary);
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .user-section {
          margin-top: auto;
          background: rgba(15, 23, 42, 0.5);
          padding: 1rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid var(--card-border);
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--background);
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 600;
        }

        .user-role {
          font-size: 0.75rem;
          color: #64748b;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;

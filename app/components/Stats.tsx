const Stats = () => {
    const stats = [
        { label: 'Completion Status', value: '85%', trend: '+12%', color: 'var(--primary)' },
        { label: 'CE Credits Earned', value: '42 / 50', trend: '8 remaining', color: 'var(--success)' },
        { label: 'Portal Rank', value: 'Top 5%', trend: 'Global', color: 'var(--warning)' },
        { label: 'Certificates', value: '12', trend: 'Lifetime', color: 'var(--secondary)' },
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, i) => (
                <div key={i} className="stat-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="stat-label">{stat.label}</span>
                    <div className="stat-main">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-trend" style={{ color: stat.color === 'var(--success)' ? 'var(--success)' : (stat.color === 'var(--primary)' ? 'var(--primary)' : '#94a3b8') }}>
                            {stat.trend}
                        </span>
                    </div>
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: stat.value.includes('%') ? stat.value : '70%', background: stat.color }}
                        ></div>
                    </div>
                </div>
            ))}

            <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-main {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin: 0.5rem 0 1rem;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }

        .stat-trend {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .progress-bar-bg {
          height: 6px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      `}</style>
        </div>
    );
};

export default Stats;

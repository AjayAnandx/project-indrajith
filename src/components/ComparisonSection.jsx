import React from 'react';
import './ComparisonSection.css';

const ComparisonSection = () => {
  const timelineEvents = [
    {
      id: 1,
      title: 'The First Fall',
      date: '12 Dec 2025',
      description: 'Indrajith hopes he will win movement',
      videoSrc: '/WhatsApp Video 2026-04-02 at 12.35.58 AM.mp4',
      milestones: [
        { time: '0:30', label: 'Match End' },
        { time: '1:15', label: 'Enada Edhu' },
        { time: '2:00', label: 'Soothadi Movement' },
      ]
    },
    {
      id: 2,
      title: 'WrestleMania Wipeout',
      date: 'end od 12 dec 2026',
      description: 'place after the hpoes',
      videoSrc: '/video 2.mp4',
      milestones: [
        { time: '0:20', label: 'Entry Theme' },
        { time: '1:10', label: 'Signature Move Fails' },
        { time: '2:00', label: 'Pinned in Center Ring' },
      ]
    },
    {
      id: 4,
      title: 'FC25 Nightmare',
      date: '29 Jan 2026',
      description: 'A new era of failing started here.',
      videoSrc: '/video3.mp4',
      milestones: [
        { time: '0:10', label: 'Hopeful Start' },
        { time: '1:00', label: 'Reality Check' },
        { time: '1:45', label: 'Full Collapse' },
      ]
    },
    {
      id: 5,
      title: 'The Legacy Continues',
      date: 'Future',
      description: 'The legacy of losses continues . It wont comes to the end',
      milestones: [
        { time: '∞', label: 'Unending Failures' },
      ]
    },
  ];

  return (
    <div className="redesigned-page">
      {/* SECTION 1: Where the Battle Begins */}
      <section className="battle-begins">
        <div className="section-container">
          <div className="section-header-modern">
            <h2 className="title-gradient">Where the Battle Begins</h2>
            <p className="subtitle-muted">Experience the transformation before and after the legendary clash.</p>
          </div>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-wrapper">
                <video autoPlay muted loop playsInline>
                  <source src="/WhatsApp Video 2026-04-02 at 12.35.58 AM.mp4" type="video/mp4" />
                </video>
                <div className="badge">Before Battle</div>
                <h3 className="card-label">Initial Concept</h3>
              </div>
            </div>

            <div className="video-card card-accent">
              <div className="video-wrapper">
                <video autoPlay muted loop playsInline>
                  <source src="/video 2.mp4" type="video/mp4" />
                </video>
                <div className="badge badge-accent">After Battle</div>
                <h3 className="card-label label-accent">Final Masterpiece</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Journey of Losses */}
      <section className="journey-losses">
        <div className="section-container">
          <div className="section-header-modern">
            <h2 className="title-gradient">The Journey of Losses</h2>
            <p className="subtitle-muted">A horizontal chronicle of failures and legendary moments.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-track">
              <div className="timeline-line"></div>
              {timelineEvents.map((event) => (
                <div key={event.id} className="timeline-outer-item">
                  <div className="item-date">{event.date}</div>
                  <div className="item-content-wrapper">
                    <div className="video-placeholder-container">
                      <div className="video-placeholder">
                        {event.videoSrc ? (
                          <video autoPlay muted loop playsInline className="timeline-video-preview">
                            <source src={event.videoSrc} type="video/mp4" />
                          </video>
                        ) : (
                          <div className="video-icon">▶</div>
                        )}
                      </div>
                      <div className="item-info">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                      </div>
                    </div>

                    {/* Vertical Micro-Timeline */}
                    <div className="micro-timeline">
                      <div className="micro-line"></div>
                      {event.milestones.map((ms, idx) => (
                        <div key={idx} className="micro-event">
                          <div className="micro-dot"></div>
                          <div className="micro-time">{ms.time}</div>
                          <div className="micro-label">{ms.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;

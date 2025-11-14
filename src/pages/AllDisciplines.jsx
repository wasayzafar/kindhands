import React from 'react'
import { Link } from 'react-router-dom'
import './AllDisciplines.css'

const disciplines = [
  {
    id: 'skilled-nursing',
    name: 'Skilled Nursing',
    abbreviation: 'SN',
    description: 'Professional nursing care provided by licensed nurses in your home.',
    icon: '🏥'
  },
  {
    id: 'registered-nursing',
    name: 'Registered Nursing',
    abbreviation: 'RN',
    description: 'Comprehensive nursing services delivered by registered nurses.',
    icon: '💉'
  },
  {
    id: 'physical-therapy',
    name: 'Physical Therapy',
    abbreviation: 'PT',
    description: 'Restore mobility and independence with our expert physical therapists.',
    icon: '🦵'
  },
  {
    id: 'occupational-therapy',
    name: 'Occupational Therapy',
    abbreviation: 'OT',
    description: 'Regain the skills needed for daily living and working activities.',
    icon: '💪'
  },
  {
    id: 'speech-therapy',
    name: 'Speech Therapy',
    abbreviation: 'ST',
    description: 'Improve communication and swallowing abilities with our specialists.',
    icon: '🗣️'
  },
  {
    id: 'home-health-aide',
    name: 'Home Health Aide',
    abbreviation: 'HHA',
    description: 'Assistance with activities of daily living and personal care.',
    icon: '🏡'
  },
  {
    id: 'medical-social-work',
    name: 'Medical Social Work',
    abbreviation: 'MSW',
    description: 'Support services to help patients and families cope with medical conditions.',
    icon: '👥'
  }
]

const AllDisciplines = () => {
  return (
    <main className="all-disciplines" id="main-content">
      <h2>All Disciplines</h2>
      <p>Learn more about our comprehensive range of home health care services.</p>
      
      <div className="disciplines-grid" role="list">
        {disciplines.map((discipline) => (
          <article key={discipline.id} className="discipline-card" role="listitem">
            <div className="discipline-icon" aria-hidden="true">
              {discipline.icon}
            </div>
            <h3>
              {discipline.name} <span className="abbreviation">({discipline.abbreviation})</span>
            </h3>
            <p>{discipline.description}</p>
            <Link 
              to={`/disciplines/${discipline.id}`} 
              className="learn-more-btn"
              aria-label={`Learn more about ${discipline.name}`}
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export default AllDisciplines
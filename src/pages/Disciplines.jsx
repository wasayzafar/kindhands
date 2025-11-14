import React from 'react'
import { Link } from 'react-router-dom'
import './Disciplines.css'

const Disciplines = () => {
  const services = [
    {
      title: 'Home Health Care',
      description: 'Skilled nursing, physical therapy, and rehabilitative services provided at home to help patients recover after illness, surgery, or hospitalization.',
      path: '/disciplines/home-health-care'
    },
    {
      title: 'Home Care – Private Duty',
      description: 'Personalized, non-medical assistance with daily activities to support independence and comfort at home—available to all ages and often privately paid.',
      path: '/disciplines/private-duty'
    },
    {
      title: 'Home Care – Home Maker / CCP',
      description: 'State-funded in-home services for seniors through Illinois\' Community Care Program, helping adults that are 60+ to remain safely in their homes.',
      path: '/disciplines/home-maker-ccp'
    },
    {
      title: 'Hospice & Palliative Care',
      description: 'Compassionate care focused on comfort, dignity, and symptom relief for those with serious or life-limiting illnesses—supporting both patients and families.',
      path: '/disciplines/hospice-palliative'
    }
  ]

  return (
    <main className="disciplines" id="main-content">
      <section className="hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive healthcare services delivered with compassion and expertise</p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={service.path} className="btn btn-primary">
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Disciplines
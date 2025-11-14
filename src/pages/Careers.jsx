import React from 'react'
import { Link } from 'react-router-dom'
import './PageTemplate.css'

const Careers = () => {
  return (
    <main className="page-template" id="main-content">
      <div className="page-header">
        <h1>Careers at Kind Hands</h1>
        <p className="page-subtitle">Join our team of compassionate healthcare professionals</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Why Work With Us</h2>
          <p>
            At Kind Hands, we believe that our employees are our greatest asset. We offer 
            competitive compensation, comprehensive benefits, and a supportive work environment 
            where you can make a real difference in people's lives.
          </p>
        </section>

        <section className="content-section">
          <h2>Benefits</h2>
          <ul>
            <li>Competitive salary and compensation</li>
            <li>Health, dental, and vision insurance</li>
            <li>401(k) retirement plan</li>
            <li>Paid time off and holidays</li>
            <li>Continuing education opportunities</li>
            <li>Flexible scheduling options</li>
            <li>Career advancement opportunities</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Current Openings</h2>
          <p>
            We are always looking for talented, compassionate professionals to join our team. 
            Current openings include:
          </p>
          <ul>
            <li>Registered Nurses (RN)</li>
            <li>Licensed Practical Nurses (LPN)</li>
            <li>Physical Therapists (PT)</li>
            <li>Occupational Therapists (OT)</li>
            <li>Speech Therapists (ST)</li>
            <li>Home Health Aides (HHA)</li>
          </ul>
          <p style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block', padding: 'var(--spacing-md) var(--spacing-xl)', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
              Apply Now
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}

export default Careers

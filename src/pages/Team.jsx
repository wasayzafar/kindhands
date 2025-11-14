import React from 'react'
import './PageTemplate.css'

const Team = () => {
  return (
    <main className="page-template" id="main-content">
      <div className="page-header">
        <h1>Our Team</h1>
        <p className="page-subtitle">Meet the professionals dedicated to your care</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Leadership Team</h2>
          <p>
            Our leadership team brings decades of combined experience in home health care, 
            nursing, and healthcare administration. They are committed to maintaining the 
            highest standards of care and service excellence.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Staff</h2>
          <p>
            Our clinical team consists of licensed nurses, therapists, and aides who are 
            carefully selected for their expertise, compassion, and dedication to patient care. 
            All team members undergo rigorous background checks and ongoing training.
          </p>
        </section>

        <section className="content-section">
          <h2>Why Choose Our Team</h2>
          <ul>
            <li>Licensed and certified professionals</li>
            <li>Ongoing education and training</li>
            <li>Compassionate and experienced caregivers</li>
            <li>24/7 support and availability</li>
            <li>Multilingual staff available</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Team

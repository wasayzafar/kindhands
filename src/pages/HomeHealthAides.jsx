import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const HomeHealthAides = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Home Health Aide Services</h1>
          <p className="hero-description">
            Compassionate personal care assistance to help you maintain independence and dignity in your own home with our certified home health aides.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Home Health Aide →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/hh.jpg" alt="Home health aide assisting patient with daily activities" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Home Health Aide Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Personal Care</h3>
              <p>Assistance with bathing, grooming, dressing, and maintaining personal hygiene with dignity and respect.</p>
            </div>
            <div className="service-card">
              <h3>Mobility Assistance</h3>
              <p>Help with walking, transferring, positioning, and using mobility equipment safely.</p>
            </div>
            <div className="service-card">
              <h3>Meal Preparation</h3>
              <p>Planning, preparing, and serving nutritious meals according to dietary requirements and preferences.</p>
            </div>
            <div className="service-card">
              <h3>Light Housekeeping</h3>
              <p>Maintaining a clean, safe living environment including laundry and basic household tasks.</p>
            </div>
            <div className="service-card">
              <h3>Medication Reminders</h3>
              <p>Gentle reminders to take medications as prescribed and assistance with medication organization.</p>
            </div>
            <div className="service-card">
              <h3>Companionship</h3>
              <p>Emotional support, conversation, and engagement in meaningful activities to reduce isolation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Health Aide Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Maintain Independence</h3>
              <p>Stay in your own home while receiving the support you need</p>
            </div>
            <div className="benefit-item">
              <h3>Certified Caregivers</h3>
              <p>Trained and certified aides with compassionate care experience</p>
            </div>
            <div className="benefit-item">
              <h3>Flexible Scheduling</h3>
              <p>Care plans tailored to your specific needs and schedule</p>
            </div>
            <div className="benefit-item">
              <h3>Peace of Mind</h3>
              <p>Family members can rest assured knowing their loved one is well cared for</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Compassionate Home Care?</h2>
          <p>Our certified home health aides are here to provide the personal care and support you deserve.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomeHealthAides
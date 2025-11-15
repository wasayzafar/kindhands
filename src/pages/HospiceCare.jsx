import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const HospiceCare = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Hospice Care Services</h1>
          <p className="hero-description">
            Compassionate end-of-life care focused on comfort, dignity, and quality of life for patients and support for their families during this important time.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Hospice Care →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/hs.jpg" alt="Hospice nurse providing compassionate end-of-life care" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Hospice Care Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Pain & Symptom Management</h3>
              <p>Expert management of pain, nausea, shortness of breath, and other symptoms to ensure comfort and dignity.</p>
            </div>
            <div className="service-card">
              <h3>Nursing Care</h3>
              <p>24/7 on-call nursing support with regular visits from registered nurses specialized in hospice care.</p>
            </div>
            <div className="service-card">
              <h3>Emotional & Spiritual Support</h3>
              <p>Counseling, chaplain services, and emotional support for patients and families during this journey.</p>
            </div>
            <div className="service-card">
              <h3>Medical Equipment & Supplies</h3>
              <p>All necessary medical equipment, medications, and supplies related to the hospice diagnosis provided.</p>
            </div>
            <div className="service-card">
              <h3>Respite Care</h3>
              <p>Short-term inpatient care to give family caregivers a break while ensuring continuous patient care.</p>
            </div>
            <div className="service-card">
              <h3>Bereavement Support</h3>
              <p>Grief counseling and support services for family members for up to 13 months after loss.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Hospice Care</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Comfort & Dignity</h3>
              <p>Focus on quality of life and comfort rather than curative treatments</p>
            </div>
            <div className="benefit-item">
              <h3>Family-Centered Care</h3>
              <p>Support for the entire family unit during this difficult time</p>
            </div>
            <div className="benefit-item">
              <h3>24/7 Support</h3>
              <p>Round-the-clock availability of hospice team members for emergencies</p>
            </div>
            <div className="benefit-item">
              <h3>Home Environment</h3>
              <p>Remain in familiar surroundings surrounded by loved ones</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Compassionate Care?</h2>
          <p>Our hospice team is here to provide comfort, dignity, and support during this important time.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HospiceCare
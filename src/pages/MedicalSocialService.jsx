import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const MedicalSocialService = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-baners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Medical Social Service</h1>
          <p className="hero-description">
            Professional social work services to address psychosocial factors affecting your health and recovery, connecting you with community resources and support.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Medical Social Service →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/mss.jpg" alt="Medical social worker providing counseling and support services" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Medical Social Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Psychosocial Assessment</h3>
              <p>Comprehensive evaluation of emotional, social, and environmental factors affecting your health and recovery.</p>
            </div>
            <div className="service-card">
              <h3>Counseling & Support</h3>
              <p>Individual and family counseling to address adjustment to illness, grief, and coping strategies.</p>
            </div>
            <div className="service-card">
              <h3>Resource Coordination</h3>
              <p>Connection to community resources, financial assistance programs, and support services.</p>
            </div>
            <div className="service-card">
              <h3>Discharge Planning</h3>
              <p>Assistance with transitions between care settings and planning for ongoing support needs.</p>
            </div>
            <div className="service-card">
              <h3>Crisis Intervention</h3>
              <p>Immediate support and intervention during emotional or social crises affecting health outcomes.</p>
            </div>
            <div className="service-card">
              <h3>Caregiver Support</h3>
              <p>Education and support for family caregivers to reduce stress and improve care quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Medical Social Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Holistic Care Approach</h3>
              <p>Address social and emotional factors that impact health and recovery</p>
            </div>
            <div className="benefit-item">
              <h3>Community Connections</h3>
              <p>Access to local resources and support networks you may not know about</p>
            </div>
            <div className="benefit-item">
              <h3>Family Support</h3>
              <p>Guidance and education for family members and caregivers</p>
            </div>
            <div className="benefit-item">
              <h3>Improved Outcomes</h3>
              <p>Better health outcomes through addressing psychosocial barriers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Comprehensive Support?</h2>
          <p>Our licensed medical social workers are here to help you navigate the challenges of illness and recovery.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default MedicalSocialService
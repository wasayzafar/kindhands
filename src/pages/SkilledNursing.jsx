import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const SkilledNursing = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Skilled Nursing Services</h1>
          <p className="hero-description">
            Receive professional nursing care in the comfort of your home with our licensed registered nurses providing comprehensive medical services.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Skilled Nursing →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/sn.jpg" alt="Registered nurse providing skilled care to patient at home" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Skilled Nursing Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Wound Care Management</h3>
              <p>Expert assessment, treatment, and monitoring of complex wounds, surgical sites, and pressure ulcers.</p>
            </div>
            <div className="service-card">
              <h3>Medication Management</h3>
              <p>Administration, monitoring, and education for complex medication regimens and IV therapies.</p>
            </div>
            <div className="service-card">
              <h3>Chronic Disease Management</h3>
              <p>Ongoing care and monitoring for diabetes, heart failure, COPD, and other chronic conditions.</p>
            </div>
            <div className="service-card">
              <h3>Post-Surgical Care</h3>
              <p>Comprehensive recovery support following hospital discharge or surgical procedures.</p>
            </div>
            <div className="service-card">
              <h3>Pain Management</h3>
              <p>Assessment and management of acute and chronic pain through various therapeutic approaches.</p>
            </div>
            <div className="service-card">
              <h3>Health Monitoring</h3>
              <p>Regular vital signs monitoring, lab coordination, and communication with physicians.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Skilled Nursing</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Professional Expertise</h3>
              <p>Licensed RNs with specialized training in home health care</p>
            </div>
            <div className="benefit-item">
              <h3>Reduced Readmissions</h3>
              <p>Continuous monitoring helps prevent hospital readmissions</p>
            </div>
            <div className="benefit-item">
              <h3>Coordinated Care</h3>
              <p>Direct communication with your physician and care team</p>
            </div>
            <div className="benefit-item">
              <h3>Cost-Effective</h3>
              <p>High-quality care at a fraction of hospital or facility costs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Professional Home Nursing?</h2>
          <p>Our skilled nurses are ready to provide the medical care you need at home.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SkilledNursing
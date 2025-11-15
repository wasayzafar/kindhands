import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const WoundCare = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Wound Care Services</h1>
          <p className="hero-description">
            Specialized wound healing and management services provided by certified wound care specialists to promote optimal healing and prevent complications.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Wound Care →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/w.jpg" alt="Wound care specialist treating patient wound" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Wound Care Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Chronic Wound Management</h3>
              <p>Expert care for diabetic ulcers, pressure sores, venous stasis ulcers, and other non-healing wounds.</p>
            </div>
            <div className="service-card">
              <h3>Post-Surgical Wound Care</h3>
              <p>Specialized care for surgical incisions, ensuring proper healing and monitoring for complications.</p>
            </div>
            <div className="service-card">
              <h3>Advanced Wound Therapies</h3>
              <p>Modern wound care treatments including negative pressure therapy, bioengineered tissues, and growth factors.</p>
            </div>
            <div className="service-card">
              <h3>Infection Prevention</h3>
              <p>Comprehensive infection control measures and antibiotic therapy management for infected wounds.</p>
            </div>
            <div className="service-card">
              <h3>Wound Assessment & Documentation</h3>
              <p>Detailed wound evaluation, measurement, photography, and progress tracking for optimal outcomes.</p>
            </div>
            <div className="service-card">
              <h3>Patient & Family Education</h3>
              <p>Teaching proper wound care techniques, signs of infection, and prevention strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Wound Care</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Specialized Expertise</h3>
              <p>Certified wound care specialists with advanced training and experience</p>
            </div>
            <div className="benefit-item">
              <h3>Faster Healing</h3>
              <p>Evidence-based treatments and consistent care promote optimal healing</p>
            </div>
            <div className="benefit-item">
              <h3>Infection Prevention</h3>
              <p>Sterile technique and proper wound care reduce infection risk</p>
            </div>
            <div className="benefit-item">
              <h3>Comfort & Convenience</h3>
              <p>Receive expert wound care in the comfort of your own home</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Expert Wound Care?</h2>
          <p>Our certified wound care specialists are here to help your wounds heal properly and safely.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default WoundCare
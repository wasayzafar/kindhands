import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const OstomyCare = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Ostomy Care Services</h1>
          <p className="hero-description">
            Specialized ostomy care and education to help you manage your ostomy with confidence and maintain your quality of life through expert support and guidance.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Ostomy Care →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/os.jpg" alt="Ostomy nurse providing specialized care and education" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Ostomy Care Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Ostomy Assessment & Care</h3>
              <p>Comprehensive evaluation of your ostomy site, stoma health, and surrounding skin condition.</p>
            </div>
            <div className="service-card">
              <h3>Appliance Management</h3>
              <p>Expert guidance on selecting, fitting, and changing ostomy appliances for optimal comfort and security.</p>
            </div>
            <div className="service-card">
              <h3>Skin Care & Protection</h3>
              <p>Specialized care to prevent and treat peristomal skin complications and irritation.</p>
            </div>
            <div className="service-card">
              <h3>Ostomy Education</h3>
              <p>Comprehensive education on ostomy self-care, lifestyle adjustments, and problem-solving techniques.</p>
            </div>
            <div className="service-card">
              <h3>Complication Management</h3>
              <p>Early identification and treatment of ostomy-related complications such as blockages or leakage.</p>
            </div>
            <div className="service-card">
              <h3>Emotional Support</h3>
              <p>Counseling and support to help you adjust to life with an ostomy and maintain confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Ostomy Care</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Specialized Expertise</h3>
              <p>Certified ostomy nurses with specialized training and experience</p>
            </div>
            <div className="benefit-item">
              <h3>Personalized Care</h3>
              <p>Individualized care plans tailored to your specific ostomy needs</p>
            </div>
            <div className="benefit-item">
              <h3>Prevent Complications</h3>
              <p>Early detection and prevention of ostomy-related problems</p>
            </div>
            <div className="benefit-item">
              <h3>Confidence Building</h3>
              <p>Support and education to help you live confidently with your ostomy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready for Expert Ostomy Care?</h2>
          <p>Our certified ostomy nurses are here to help you manage your ostomy with confidence and comfort.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default OstomyCare
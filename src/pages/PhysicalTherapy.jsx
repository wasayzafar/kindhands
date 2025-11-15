import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const PhysicalTherapy = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Physical Therapy Services</h1>
          <p className="hero-description">
            Restore movement, reduce pain, and improve your quality of life with our expert physical therapy services delivered in the comfort of your home.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Physical Therapy →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/pt.jpg" alt="therapist helping patient with exercises" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Physical Therapy Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Post-Surgical Rehabilitation</h3>
              <p>Comprehensive recovery programs following orthopedic surgeries, joint replacements, and other procedures.</p>
            </div>
            <div className="service-card">
              <h3>Pain Management</h3>
              <p>Evidence-based techniques to reduce chronic pain and improve mobility through targeted exercises and treatments.</p>
            </div>
            <div className="service-card">
              <h3>Balance & Fall Prevention</h3>
              <p>Specialized programs to improve balance, coordination, and reduce fall risk for safer independent living.</p>
            </div>
            <div className="service-card">
              <h3>Strength Training</h3>
              <p>Customized exercise programs to rebuild strength, endurance, and functional capacity.</p>
            </div>
            <div className="service-card">
              <h3>Mobility Restoration</h3>
              <p>Therapeutic interventions to restore range of motion and improve overall mobility and function.</p>
            </div>
            <div className="service-card">
              <h3>Neurological Rehabilitation</h3>
              <p>Specialized therapy for stroke recovery, Parkinson's disease, and other neurological conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Physical Therapy</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Personalized Care</h3>
              <p>One-on-one attention tailored to your specific needs and goals</p>
            </div>
            <div className="benefit-item">
              <h3>Comfort & Convenience</h3>
              <p>Receive therapy in your familiar home environment</p>
            </div>
            <div className="benefit-item">
              <h3>Faster Recovery</h3>
              <p>Consistent care leads to better outcomes and quicker healing</p>
            </div>
            <div className="benefit-item">
              <h3>Family Involvement</h3>
              <p>Family members can learn and participate in your care plan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Recovery?</h2>
          <p>Our licensed physical therapists are ready to help you regain your strength and mobility.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PhysicalTherapy
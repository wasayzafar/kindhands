import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const SpeechTherapy = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Speech Therapy Services</h1>
          <p className="hero-description">
            Improve communication, swallowing, and cognitive skills with our expert speech-language pathology services delivered in your home.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Speech Therapy →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/st.jpg" alt="Speech therapist working with patient on communication skills" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Speech Therapy Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Swallowing Disorders</h3>
              <p>Assessment and treatment of dysphagia to ensure safe eating and drinking with reduced aspiration risk.</p>
            </div>
            <div className="service-card">
              <h3>Speech & Articulation</h3>
              <p>Therapy to improve speech clarity, pronunciation, and overall verbal communication abilities.</p>
            </div>
            <div className="service-card">
              <h3>Language Rehabilitation</h3>
              <p>Treatment for aphasia and other language disorders to restore comprehension and expression skills.</p>
            </div>
            <div className="service-card">
              <h3>Voice Therapy</h3>
              <p>Interventions to improve voice quality, strength, and endurance for better vocal communication.</p>
            </div>
            <div className="service-card">
              <h3>Cognitive Communication</h3>
              <p>Therapy for memory, attention, and problem-solving skills that affect daily communication.</p>
            </div>
            <div className="service-card">
              <h3>Alternative Communication</h3>
              <p>Training in augmentative and alternative communication devices and strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Speech Therapy</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Natural Environment</h3>
              <p>Practice communication skills in your everyday setting for better carryover</p>
            </div>
            <div className="benefit-item">
              <h3>Family Involvement</h3>
              <p>Loved ones learn strategies to support your communication goals</p>
            </div>
            <div className="benefit-item">
              <h3>Functional Focus</h3>
              <p>Therapy targets real-life communication needs and situations</p>
            </div>
            <div className="benefit-item">
              <h3>Comfort & Privacy</h3>
              <p>Feel more relaxed and confident practicing in your own space</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Improve Your Communication?</h2>
          <p>Our licensed speech-language pathologists are here to help you communicate with confidence.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SpeechTherapy
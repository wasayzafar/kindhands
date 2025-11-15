import React from 'react' 
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const OccupationalTherapy = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Occupational Therapy Services</h1>
          <p className="hero-description">
            Regain independence in daily activities and improve your quality of life with our expert occupational therapy services delivered in your home.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Occupational Therapy →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/ot.jpg" alt="Occupational therapist helping patient with daily activities" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Occupational Therapy Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Activities of Daily Living</h3>
              <p>Training in essential daily tasks like bathing, dressing, grooming, and meal preparation for greater independence.</p>
            </div>
            <div className="service-card">
              <h3>Cognitive Rehabilitation</h3>
              <p>Therapeutic interventions to improve memory, attention, problem-solving, and executive function skills.</p>
            </div>
            <div className="service-card">
              <h3>Fine Motor Skills</h3>
              <p>Exercises and activities to improve hand strength, dexterity, and coordination for better functional use.</p>
            </div>
            <div className="service-card">
              <h3>Home Safety Assessment</h3>
              <p>Comprehensive evaluation of your home environment with recommendations for safety modifications.</p>
            </div>
            <div className="service-card">
              <h3>Adaptive Equipment Training</h3>
              <p>Education on using assistive devices and adaptive equipment to maximize independence and safety.</p>
            </div>
            <div className="service-card">
              <h3>Energy Conservation</h3>
              <p>Techniques and strategies to manage fatigue and conserve energy for important daily activities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Occupational Therapy</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Real Environment Training</h3>
              <p>Practice skills in your actual living environment for better outcomes</p>
            </div>
            <div className="benefit-item">
              <h3>Customized Solutions</h3>
              <p>Personalized interventions tailored to your specific home and lifestyle</p>
            </div>
            <div className="benefit-item">
              <h3>Family Education</h3>
              <p>Caregivers learn techniques to support your continued progress</p>
            </div>
            <div className="benefit-item">
              <h3>Improved Independence</h3>
              <p>Focus on meaningful activities that matter most to you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Regain Your Independence?</h2>
          <p>Our licensed occupational therapists are here to help you live life to the fullest.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default OccupationalTherapy
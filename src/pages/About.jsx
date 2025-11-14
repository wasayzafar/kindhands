import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <main className="about-page" id="main-content">
   

      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Kind Hands Home Health Care Agency was founded with a simple mission: to provide 
              compassionate, professional care that improves the quality of life for our patients 
              in the comfort of their own homes.
            </p>
            <p>
              Since our inception, we have been dedicated to delivering personalized care that 
              meets the unique needs of each individual we serve. Our team of licensed professionals 
              brings years of experience and a genuine passion for helping others.
            </p>
          </div>
          <div className="story-image">
            <img src="/nurse.jpg" alt="Kind Hands healthcare team" />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional home health care services that promote independence, dignity, 
            and well-being for all our patients while supporting their families through every 
            step of the care journey.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
             
              <h3>Compassion</h3>
              <p>We treat every patient with kindness, empathy, and genuine care</p>
            </div>
            <div className="value-card">
             
              <h3>Excellence</h3>
              <p>We maintain the highest standards of care and continuous improvement</p>
            </div>
            <div className="value-card">
              
              <h3>Integrity</h3>
              <p>We operate with honesty, transparency, and ethical practices</p>
            </div>
            <div className="value-card">
            
              <h3>Respect</h3>
              <p>We honor the dignity and individuality of every person we serve</p>
            </div>
            <div className="value-card">
              
              <h3>Innovation</h3>
              <p>We embrace new approaches and technologies to improve care</p>
            </div>
            <div className="value-card">
            
              <h3>Family-Centered</h3>
              <p>We support not just patients, but their entire family network</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Patients Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Healthcare Professionals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Experience Kind Hands Care?</h2>
          <p>Let us help you or your loved one receive the compassionate care they deserve</p>
          <Link to="/contact" className="cta-btn">Contact Us Today</Link>
        </div>
      </section>
    </main>
  )
}

export default About

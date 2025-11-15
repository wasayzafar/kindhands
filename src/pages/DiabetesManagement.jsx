import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const DiabetesManagement = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Diabetes Management Services</h1>
          <p className="hero-description">
            Comprehensive diabetes care and education to help you manage your condition effectively and prevent complications through expert guidance and support.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Diabetes Management →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/su.jpg" alt="Healthcare professional providing diabetes education and monitoring" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Diabetes Management Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Blood Sugar Monitoring</h3>
              <p>Regular glucose testing, monitoring trends, and adjusting care plans to maintain optimal blood sugar levels.</p>
            </div>
            <div className="service-card">
              <h3>Medication Management</h3>
              <p>Insulin administration, medication education, and coordination with your physician for optimal diabetes control.</p>
            </div>
            <div className="service-card">
              <h3>Diabetes Education</h3>
              <p>Comprehensive education about diabetes, self-care techniques, and lifestyle modifications for better management.</p>
            </div>
            <div className="service-card">
              <h3>Foot Care & Assessment</h3>
              <p>Regular foot examinations, wound prevention, and education to prevent diabetic foot complications.</p>
            </div>
            <div className="service-card">
              <h3>Nutritional Counseling</h3>
              <p>Meal planning, carbohydrate counting, and dietary guidance to help control blood sugar levels.</p>
            </div>
            <div className="service-card">
              <h3>Complication Prevention</h3>
              <p>Monitoring for early signs of diabetic complications and coordinating preventive care measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Diabetes Management</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Better Control</h3>
              <p>Consistent monitoring and education lead to improved blood sugar control</p>
            </div>
            <div className="benefit-item">
              <h3>Prevent Complications</h3>
              <p>Early detection and prevention of diabetic complications</p>
            </div>
            <div className="benefit-item">
              <h3>Personalized Care</h3>
              <p>Individualized care plans tailored to your specific diabetes needs</p>
            </div>
            <div className="benefit-item">
              <h3>Family Education</h3>
              <p>Teaching family members how to support your diabetes management</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take Control of Your Diabetes?</h2>
          <p>Our diabetes specialists are here to help you manage your condition and live a healthier life.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DiabetesManagement
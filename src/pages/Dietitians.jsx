import React from 'react'
import { Link } from 'react-router-dom'
import './PhysicalTherapy.css'

const Dietitians = () => {
  return (
    <main className="physical-therapy" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Dietitian Services</h1>
          <p className="hero-description">
            Expert nutritional counseling and meal planning services to support your health goals and manage medical conditions through proper nutrition.
          </p>
          <Link to="/send-referral" className="btn btn-primary">
            Request Dietitian Services →
          </Link>
        </div>
        <div className="hero-image">
          <img src="/d.jpg" alt="Registered dietitian providing nutritional counseling" />
        </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Dietitian Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Nutritional Assessment</h3>
              <p>Comprehensive evaluation of dietary habits, nutritional status, and health-related nutrition needs.</p>
            </div>
            <div className="service-card">
              <h3>Medical Nutrition Therapy</h3>
              <p>Specialized nutrition interventions for diabetes, heart disease, kidney disease, and other conditions.</p>
            </div>
            <div className="service-card">
              <h3>Meal Planning</h3>
              <p>Personalized meal plans that meet your dietary restrictions, preferences, and health goals.</p>
            </div>
            <div className="service-card">
              <h3>Weight Management</h3>
              <p>Evidence-based strategies for healthy weight loss or weight gain as medically indicated.</p>
            </div>
            <div className="service-card">
              <h3>Nutrition Education</h3>
              <p>Teaching about proper nutrition, food safety, and how diet affects your specific health conditions.</p>
            </div>
            <div className="service-card">
              <h3>Swallowing Diet Modification</h3>
              <p>Texture-modified diets and nutritional support for patients with swallowing difficulties.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Home Dietitian Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Personalized Nutrition</h3>
              <p>Customized dietary plans based on your specific health needs and preferences</p>
            </div>
            <div className="benefit-item">
              <h3>Kitchen Assessment</h3>
              <p>Evaluation of your home kitchen and food preparation capabilities</p>
            </div>
            <div className="benefit-item">
              <h3>Family Education</h3>
              <p>Teaching family members about nutrition and meal preparation techniques</p>
            </div>
            <div className="benefit-item">
              <h3>Better Health Outcomes</h3>
              <p>Improved management of chronic conditions through proper nutrition</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Improve Your Nutrition?</h2>
          <p>Our registered dietitians are here to help you achieve your health goals through proper nutrition.</p>
          <Link to="/send-referral" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Dietitians
import React from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'

const Programs = () => {
  return (
    <main className="programs-page" id="main-content">
    

      <section className="programs-overview">
        <div className="overview-container">
          <h2>Tailored Care for Every Need</h2>
          <p>
            At Kind Hands, we understand that every patient has unique healthcare needs. 
            Our specialized programs are designed to provide targeted, comprehensive care 
            that promotes healing, independence, and quality of life.
          </p>
        </div>
      </section>

      <section className="programs-grid-section">
        <div className="programs-container">
          <div className="programs-grid">
            <div className="program-card">
              
              <h3>Chronic Disease Management</h3>
              <p>
                Comprehensive support for patients with diabetes, heart disease, COPD, and other 
                chronic conditions through regular monitoring, education, and personalized care plans.
              </p>
              <ul>
                <li>Blood sugar monitoring</li>
                <li>Medication management</li>
                <li>Lifestyle education</li>
                <li>Regular health assessments</li>
              </ul>
            </div>

            <div className="program-card">
              
              <h3>Post-Surgical Care</h3>
              <p>
                Safe recovery at home with professional wound care, pain management, and 
                rehabilitation services to ensure optimal healing and prevent complications.
              </p>
              <ul>
                <li>Wound care and dressing changes</li>
                <li>Pain management</li>
                <li>Infection prevention</li>
                <li>Recovery monitoring</li>
              </ul>
            </div>

            <div className="program-card">
              
              <h3>Palliative Care</h3>
              <p>
                Comfort-focused care that improves quality of life for patients with serious 
                illnesses through symptom management and emotional support.
              </p>
              <ul>
                <li>Symptom relief</li>
                <li>Emotional support</li>
                <li>Family counseling</li>
                <li>Comfort measures</li>
              </ul>
            </div>

            <div className="program-card">
              
              <h3>Rehabilitation Services</h3>
              <p>
                Comprehensive therapy services including physical, occupational, and speech 
                therapy to help patients regain independence and function.
              </p>
              <ul>
                <li>Physical therapy</li>
                <li>Occupational therapy</li>
                <li>Speech therapy</li>
                <li>Mobility training</li>
              </ul>
            </div>

            <div className="program-card">
              
              <h3>Maternal & Child Health</h3>
              <p>
                Specialized care for new mothers and infants including postpartum support, 
                breastfeeding assistance, and pediatric home health services.
              </p>
              <ul>
                <li>Postpartum care</li>
                <li>Breastfeeding support</li>
                <li>Newborn care</li>
                <li>Pediatric services</li>
              </ul>
            </div>

            <div className="program-card">
              
              <h3>Memory Care</h3>
              <p>
                Specialized support for patients with Alzheimer's, dementia, and other 
                memory-related conditions with focus on safety and dignity.
              </p>
              <ul>
                <li>Cognitive assessments</li>
                <li>Safety monitoring</li>
                <li>Family education</li>
                <li>Behavioral support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="program-benefits">
        <div className="benefits-container">
          <h2>Program Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Personalized Care Plans</h3>
              <p>Each program is tailored to your specific health needs and goals</p>
            </div>
            <div className="benefit-item">
              <h3>Coordinated Care</h3>
              <p>We work closely with your healthcare team for seamless care</p>
            </div>
            <div className="benefit-item">
              <h3>Family Support</h3>
              <p>Education and resources for family members and caregivers</p>
            </div>
            <div className="benefit-item">
              <h3>24/7 Availability</h3>
              <p>Round-the-clock support when you need it most</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Find the Right Program for You</h2>
          <p>Let us help you choose the specialized care program that best meets your needs</p>
          <Link to="/contact" className="cta-btn">Get Started Today</Link>
        </div>
      </section>
    </main>
  )
}

export default Programs

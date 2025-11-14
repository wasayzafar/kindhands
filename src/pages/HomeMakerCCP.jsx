import React from 'react'
import { Link } from 'react-router-dom'
import './HomeMakerCCP.css'

const HomeMakerCCP = () => {
  return (
    <main className="homemaker-ccp" id="main-content">
      <section className="hero-banners" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading">Home Maker / CCP</h1>
            <h2>Community Care Program Services</h2>
            <p>
              State-funded in-home services for seniors through Illinois' Community Care Program, 
              helping adults that are 60+ to remain safely in their homes with dignity and independence.
            </p>
            <div className="but">
              <div className="cta-buttons">
                <Link to="/send-referral" className="btn btn-primary">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/private.jpg" 
              alt="Professional caregiver providing homemaker services to senior client" 
              className="hero-image-photo"
            />
          </div>
        </div>
      </section>

      <section className="why-choose" aria-labelledby="why-choose-heading">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2 id="why-choose-heading">Why Choose Our CCP Services?</h2>
            <p>
              Our Community Care Program services are designed to help seniors maintain their independence 
              at home while receiving the support they need. We work within state guidelines to provide 
              comprehensive homemaker and personal care services.
            </p>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <span>State-Funded Program</span>
            </div>
            <div className="benefit-item">
              <span>Qualified for Adults 60+</span>
            </div>
            <div className="benefit-item">
              <span>Comprehensive Assessment</span>
            </div>
            <div className="benefit-item">
              <span>Maintain Independence</span>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services" aria-labelledby="services-heading">
        <div className="core-services-content">
          <h2 id="services-heading">Our CCP Services</h2>
          <div className="services-grid">
            <article className="service-card">
              <h3>Homemaker Services</h3>
              <ul>
                <li>Light housekeeping and cleaning</li>
                <li>Laundry and linen services</li>
                <li>Meal planning and preparation</li>
                <li>Grocery shopping assistance</li>
                <li>Home organization</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Personal Care</h3>
              <ul>
                <li>Bathing and personal hygiene</li>
                <li>Dressing assistance</li>
                <li>Grooming and oral care</li>
                <li>Mobility assistance</li>
                <li>Medication reminders</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Chore Services</h3>
              <ul>
                <li>Heavy cleaning tasks</li>
                <li>Yard work and maintenance</li>
                <li>Home safety modifications</li>
                <li>Seasonal preparations</li>
                <li>Minor home repairs</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Adult Day Services</h3>
              <ul>
                <li>Social activities and programs</li>
                <li>Therapeutic activities</li>
                <li>Nutritious meals and snacks</li>
                <li>Health monitoring</li>
                <li>Transportation services</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Case Management</h3>
              <ul>
                <li>Care plan development</li>
                <li>Service coordination</li>
                <li>Resource connections</li>
                <li>Regular assessments</li>
                <li>Family communication</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Emergency Response</h3>
              <ul>
                <li>Personal emergency systems</li>
                <li>24/7 monitoring services</li>
                <li>Quick response protocols</li>
                <li>Family notifications</li>
                <li>Emergency contacts</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <div className="faq-containers">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Common questions about Community Care Program services</p>
          <div className="faq-list">
            {[
              {
                question: "Who qualifies for CCP services?",
                answer: "Adults aged 60+ who meet income and functional eligibility requirements and need assistance to remain safely at home qualify for Illinois Community Care Program services."
              },
              {
                question: "How do I apply for CCP services?",
                answer: "Contact your local Area Agency on Aging or call us directly. We'll help you through the application process and coordinate the required assessments."
              },
              {
                question: "What does CCP cost?",
                answer: "CCP is a state-funded program. Participants may have a small monthly contribution based on income, but services are primarily covered by the state program."
              },
              {
                question: "How many hours of service can I receive?",
                answer: "Service hours are determined by your assessment and care plan. The program aims to provide the minimum services needed to help you remain safely at home."
              },
              {
                question: "Can I choose my service provider?",
                answer: "Yes, you have the right to choose your service provider from approved CCP agencies. We're proud to be an approved provider in the program."
              },
              {
                question: "What if my needs change?",
                answer: "Your care plan is regularly reviewed and can be adjusted as your needs change. We work with case managers to ensure you receive appropriate services."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default HomeMakerCCP
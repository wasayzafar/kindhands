import React from 'react'
import { Link } from 'react-router-dom'
import './PrivateDuty.css'

const PrivateDuty = () => {
  return (
    <main className="private-duty" id="main-content">
      <section className="hero-banners" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading">Private Duty</h1>
            <h2>Personalized Non-Medical Home Care</h2>
            <p>
              Compassionate, one-on-one assistance with daily activities to help you or your loved ones 
              maintain independence and comfort at home. Available to all ages and often privately paid.
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
              alt="Compassionate caregiver assisting elderly client with daily activities" 
              className="hero-image-photo"
            />
          </div>
        </div>
      </section>

      <section className="why-choose" aria-labelledby="why-choose-heading">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2 id="why-choose-heading">Why Choose Our Private Duty Care?</h2>
            <p>
              Our private duty caregivers provide personalized, non-medical assistance tailored to your 
              unique needs and preferences. We focus on maintaining dignity, independence, and quality of life 
              while providing peace of mind for families.
            </p>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              
              <span>Comfort of Your Own Home</span>
            </div>
            <div className="benefit-item">
              
              <span>One-on-One Personalized Care</span>
            </div>
            <div className="benefit-item">
              
              <span>Flexible Scheduling Options</span>
            </div>
            <div className="benefit-item">
             
              <span>Compassionate Companionship</span>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services" aria-labelledby="services-heading">
        <div className="core-services-content">
          <h2 id="services-heading">Our Private Duty Services</h2>
          <div className="services-grid">
            <article className="service-card">
              
              <h3>Personal Care</h3>
              <ul>
                <li>Bathing and grooming assistance</li>
                <li>Dressing and undressing</li>
                <li>Toileting and incontinence care</li>
                <li>Mobility and transfer assistance</li>
                <li>Medication reminders</li>
              </ul>
            </article>

            <article className="service-card">
              
              <h3>Meal Services</h3>
              <ul>
                <li>Meal planning and preparation</li>
                <li>Grocery shopping assistance</li>
                <li>Feeding assistance when needed</li>
                <li>Special dietary requirements</li>
                <li>Kitchen cleanup</li>
              </ul>
            </article>

            <article className="service-card">
              
              <h3>Household Support</h3>
              <ul>
                <li>Light housekeeping</li>
                <li>Laundry and linen changes</li>
                <li>Organization and tidying</li>
                <li>Pet care assistance</li>
                <li>Mail and correspondence help</li>
              </ul>
            </article>

            <article className="service-card">
              
              <h3>Transportation</h3>
              <ul>
                <li>Medical appointments</li>
                <li>Grocery and pharmacy trips</li>
                <li>Social outings and activities</li>
                <li>Errands and shopping</li>
                <li>Family visits</li>
              </ul>
            </article>

            <article className="service-card">
              
              <h3>Companionship</h3>
              <ul>
                <li>Conversation and social interaction</li>
                <li>Activity engagement</li>
                <li>Reading and entertainment</li>
                <li>Technology assistance</li>
                <li>Emotional support</li>
              </ul>
            </article>

            <article className="service-card">
              
              <h3>Specialized Care</h3>
              <ul>
                <li>Overnight care services</li>
                <li>Respite care for families</li>
                <li>Post-hospital support</li>
                <li>Dementia and Alzheimer's care</li>
                <li>End-of-life companionship</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

   <section className="faq" aria-labelledby="faq-heading">
        <div className="faq-containers">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Common questions about our private duty care services</p>
          <div className="faq-list">
            {[
              {
                question: "What is private duty care?",
                answer: "Private duty care is personalized, non-medical assistance with daily activities provided in your home. It focuses on maintaining independence and comfort through one-on-one support."
              },
              {
                question: "How is private duty different from home health?",
                answer: "Private duty provides non-medical assistance like companionship, meal prep, and household tasks, while home health offers skilled medical services like nursing and therapy."
              },
              {
                question: "What are the costs for private duty care?",
                answer: "Private duty care is typically privately paid. Costs vary based on level of care needed, hours of service, and specific requirements. We provide transparent pricing estimates."
              },
              {
                question: "Can I choose my caregiver?",
                answer: "Yes, we work with you to match a caregiver who fits your personality, needs, and preferences. We ensure compatibility for the best care experience."
              },
              {
                question: "What hours are available?",
                answer: "We offer flexible scheduling including hourly visits, overnight care, live-in assistance, and respite care. Services can be arranged 24/7 based on your needs."
              },
              {
                question: "Are caregivers trained and insured?",
                answer: "All our caregivers are thoroughly screened, trained, bonded, and insured. They receive ongoing education to provide safe, quality care."
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

export default PrivateDuty
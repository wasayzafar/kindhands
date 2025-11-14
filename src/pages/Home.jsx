import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const services = [
    {
      title: 'Home Health Care',
      description: 'Skilled nursing, physical therapy, and rehabilitative services provided at home to help patients recover after illness, surgery, or hospitalization.',
      path: '/home-health-care'
    },
    {
      title: 'Home Care – Private Duty',
      description: 'Personalized, non-medical assistance with daily activities to support independence and comfort at home—available to all ages and often privately paid.',
      path: '/private-duty'
    },
    {
      title: 'Home Care – Home Maker / CCP',
      description: 'State-funded in-home services for seniors through Illinois\' Community Care Program, helping adults that are 60+ to remain safely in their homes.',
      path: '/home-maker-ccp'
    },
    {
      title: 'Hospice & Palliative Care',
      description: 'Compassionate care focused on comfort, dignity, and symptom relief for those with serious or life-limiting illnesses—supporting both patients and families.',
      path: '/hospice-palliative'
    }
  ]

  return (
    <main className="home" id="main-content">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-tagline">Caring for Your Loved Ones</p>
            <h1 id="hero-heading">
              Get Exceptional Medical Care Right To Your Doorstep.
            </h1>
            <p className="hero-description">
              The top medical service provider in your area, Kind Hands Home Health, brings 
              skilled clinicians to your home in an Accessible, Convenient, and Comfortable way.
            </p>
            <div className="cta-buttons">
              <Link to="/send-referral" className="btn btn-primary">
                Let's Be Healthy! →
              </Link>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
      
              src="/nurse.jpg" 
              alt="Professional healthcare nurse providing compassionate care" 
              className="hero-image-photo"
            />
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-heading">
        <div className="services-jj">
          <h2 id="services-head">Our Services</h2>
          <p className="services-subtitle">Comprehensive healthcare solutions delivered with compassion and expertise</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="service-card-link">
                <article className="service-card-home">
                  <h3 className='service-title'>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link">
                    Learn More →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <div className="faq-containers">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Get answers to common questions about our home health services</p>
          <div className="faq-list">
            {[
              {
                question: "What services does Kind Hands provide?",
                answer: "We offer comprehensive home health care including skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, and medical social work."
              },
              {
                question: "How do I get started with home health services?",
                answer: "Simply contact us or have your physician send a referral. We'll handle the insurance verification and coordinate with your healthcare team to begin services."
              },
              {
                question: "Does insurance cover home health services?",
                answer: "Most insurance plans including Medicare, Medicaid, and private insurance cover medically necessary home health services when ordered by a physician."
              },
              {
                question: "What areas do you serve?",
                answer: "We provide services throughout the greater metropolitan area. Contact us to confirm service availability in your specific location."
              },
              {
                question: "Are your staff licensed and certified?",
                answer: "Yes, all our healthcare professionals are fully licensed, certified, and undergo continuous training to provide the highest quality care."
              },
              {
                question: "What makes Kind Hands different?",
                answer: "We focus on personalized, compassionate care with 24/7 support, family-centered approach, and a commitment to helping patients maintain independence at home."
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

export default Home
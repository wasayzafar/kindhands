import React from 'react'
import './HomeHealthCare.css'

const HomeHealthCare = () => {
  return (
    <main className="home-health-care" id="main-content">
      <section className="hero-banners">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Home Health Care</h1>
            <h2>Exceptional care delivered in the comfort of your home</h2>
            <p>Skilled nursing, therapy, and compassionate support tailored to your needs.</p>
            <div className='but'>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Send Referal</a>
              </div>
               <div className="abt-buttons">
              <a href="/contact" className="btn btn-primary">About US</a>
              </div>
              </div>
          </div>
          
          <div className="hero-image">
            <img src="/hha.jpg" alt="Nurse providing care to elderly patient at home" />
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2>Why Choose Home Health?</h2>
            <p>Home health care is ideal for individuals recovering from illness, injury, surgery, or managing chronic conditions—all without leaving the home. Safe Life provides Medicare-certified, personalized care that helps reduce hospital readmissions and improve quality of life.</p>
          </div>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <span>100% Medicare-covered (if eligible)</span>
            </div>
            <div className="benefit-item">
              <span>Personalized care plans by licensed clinicians</span>
            </div>
            <div className="benefit-item">
              <span>Multidisciplinary team coordination</span>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services">
        <div className="core-services-content">
          <h2>Our Core Services</h2>
          
          <div className="services-grid">
            <div className="service-card">
            
              <h3>Skilled Nursing</h3>
              <ul>
                <li>Skilled Nursing at Wound care, injections, IV therapy</li>
                <li>Medication & chronic disease management</li>
                <li>Pain & symptom monitoring</li>
              </ul>
            </div>
            
            <div className="service-card">
          
              <h3>Physical Therapy</h3>
              <ul>
                <li>Fall prevention, strength & mobility</li>
                <li>Post-surgical rehab</li>
                <li>Gait & balance training</li>
              </ul>
            </div>
            
            <div className="service-card">
              
              <h3>Occupational Therapy</h3>
              <ul>
                <li>Activities of Daily Living (ADLs)</li>
                <li>Home safety evaluations</li>
                <li>Adaptive techniques & tools</li>
              </ul>
            </div>
            
            <div className="service-card">
             
              <h3>Speech Therapy</h3>
              <ul>
                <li>Speech & language restoration</li>
                <li>Swallowing assessments (dysphagia)</li>
                <li>Cognitive-communication strategies</li>
              </ul>
            </div>
            
            <div className="service-card">
              
              <h3>Medical Social Work</h3>
              <ul>
                <li>Emotional & psychosocial support</li>
                <li>Community resource navigation</li>
                <li>Long-term planning</li>
              </ul>
            </div>
            
            <div className="service-card">
             
              <h3>Home Health Aide Services</h3>
              <ul>
                <li>Bathing, grooming, dressing</li>
                <li>Mobility assistance</li>
                <li>Light homemaking tasks</li>
              </ul>
            </div>
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

export default HomeHealthCare
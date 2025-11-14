import React from 'react'
import { Link } from 'react-router-dom'
import './HospicePalliative.css'

const HospicePalliative = () => {
  return (
    <main className="hospice-palliative" id="main-content">
      <section className="hero-banners" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading">Hospice & Palliative Care</h1>
            <h2>Compassionate End-of-Life Care</h2>
            <p>
              Compassionate care focused on comfort, dignity, and symptom relief for those with serious 
              or life-limiting illnesses—supporting both patients and families during difficult times.
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
              alt="Compassionate hospice nurse providing comfort care to patient and family" 
              className="hero-image-photo"
            />
          </div>
        </div>
      </section>

      <section className="why-choose" aria-labelledby="why-choose-heading">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2 id="why-choose-heading">Why Choose Our Hospice Care?</h2>
            <p>
              Our hospice and palliative care team provides specialized comfort care that focuses on 
              quality of life, pain management, and emotional support. We honor each person's wishes 
              and provide dignity throughout their journey.
            </p>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <span>24/7 On-Call Support</span>
            </div>
            <div className="benefit-item">
              <span>Pain & Symptom Management</span>
            </div>
            <div className="benefit-item">
              <span>Family Support Services</span>
            </div>
            <div className="benefit-item">
              <span>Dignity & Comfort Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services" aria-labelledby="services-heading">
        <div className="core-services-content">
          <h2 id="services-heading">Our Hospice & Palliative Services</h2>
          <div className="services-grid">
            <article className="service-card">
              <h3>Medical Care</h3>
              <ul>
                <li>Physician oversight and visits</li>
                <li>Skilled nursing care</li>
                <li>Pain and symptom management</li>
                <li>Medication management</li>
                <li>Medical equipment and supplies</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Comfort Care</h3>
              <ul>
                <li>Personal care assistance</li>
                <li>Comfort positioning</li>
                <li>Nutritional support</li>
                <li>Hygiene and grooming</li>
                <li>Environmental comfort</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Emotional Support</h3>
              <ul>
                <li>Counseling services</li>
                <li>Spiritual care</li>
                <li>Grief and bereavement support</li>
                <li>Family counseling</li>
                <li>Support groups</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Respite Care</h3>
              <ul>
                <li>Short-term inpatient care</li>
                <li>Family caregiver relief</li>
                <li>Planned respite stays</li>
                <li>Emergency respite services</li>
                <li>Caregiver support</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Specialized Therapies</h3>
              <ul>
                <li>Physical therapy</li>
                <li>Occupational therapy</li>
                <li>Speech therapy</li>
                <li>Music and art therapy</li>
                <li>Massage therapy</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Bereavement Services</h3>
              <ul>
                <li>Grief counseling</li>
                <li>Memorial services</li>
                <li>Support groups</li>
                <li>Follow-up care</li>
                <li>Community resources</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <div className="faq-containers">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Common questions about hospice and palliative care services</p>
          <div className="faq-list">
            {[
              {
                question: "What is the difference between hospice and palliative care?",
                answer: "Palliative care focuses on comfort and quality of life alongside curative treatments. Hospice care is for patients with a life expectancy of 6 months or less, focusing entirely on comfort."
              },
              {
                question: "Who qualifies for hospice care?",
                answer: "Patients with a terminal diagnosis and life expectancy of 6 months or less (if the illness runs its normal course) qualify for hospice care with a physician's certification."
              },
              {
                question: "Does insurance cover hospice care?",
                answer: "Yes, Medicare, Medicaid, and most private insurance plans cover hospice care. We handle all insurance verification and billing processes for families."
              },
              {
                question: "Can hospice care be provided at home?",
                answer: "Yes, most hospice care is provided in the patient's home. We also provide care in assisted living facilities, nursing homes, and our inpatient facilities when needed."
              },
              {
                question: "What support is available for families?",
                answer: "We provide comprehensive family support including counseling, respite care, bereavement services, and 24/7 on-call support for questions and emergencies."
              },
              {
                question: "Can patients still see their own doctors?",
                answer: "Patients work with our hospice medical team, but we coordinate with their existing physicians. The focus shifts from curative to comfort care under hospice services."
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

export default HospicePalliative
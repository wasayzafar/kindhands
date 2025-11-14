import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <main className="contact-page" id="main-content">

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our services? Need to schedule a consultation? Our compassionate team is available around the clock to assist you.</p>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <a href="tel:+15551234567">(555) 123-4567</a>
                <p>24/7 Emergency Support</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <a href="mailto:info@kindhands.com">info@kindhands.com</a>
                <p>We respond within 2 hours</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Address</h3>
                <p>123 Care Street<br />Healthville, HV 12345</p>
                <p>Serving the greater metro area</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form className="form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" />
                <select required>
                  <option value="">Select Service</option>
                  <option value="home-health">Home Health Care</option>
                  <option value="private-duty">Private Duty Care</option>
                  <option value="homemaker">Home Maker / CCP</option>
                  <option value="hospice">Hospice & Palliative Care</option>
                </select>
              </div>
              <textarea placeholder="How can we help you?" rows="5" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="office-hours">
        <div className="hours-container">
          <h2>Office Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <h3>Regular Hours</h3>
              <p>Monday - Friday<br />8:00 AM - 6:00 PM</p>
            </div>
            <div className="hours-card emergency">
              <h3>Emergency Support</h3>
              <p>24/7 Available<br />Call anytime</p>
            </div>
            <div className="hours-card">
              <h3>Weekend</h3>
              <p>Saturday - Sunday<br />On-call support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let us help you or your loved one receive the care they deserve</p>
          <Link to="/send-referral" className="cta-btn">Send a Referral</Link>
        </div>
      </section>
    </main>
  )
}

export default Contact

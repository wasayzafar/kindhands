import React from 'react'
import { Link } from 'react-router-dom'
import './Insurances.css'

const Insurances = () => {
  return (
    <main className="insurances-page" id="main-content">
    

      <section className="insurance-plans">
        <div className="insurance-container">
          <h2>Accepted Insurance Plans</h2>
          <p className="section-subtitle">
            Kind Hands Home Health Care Agency works with most major insurance providers to 
            ensure you receive the care you need without financial barriers.
          </p>
          
          <div className="insurance-grid">
            <div className="insurance-card">
              
              <h3>Medicare</h3>
              <p>Medicare Parts A & B coverage for qualified home health services</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>Medicaid</h3>
              <p>State Medicaid programs for eligible individuals and families</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>Blue Cross Blue Shield</h3>
              <p>Comprehensive coverage through BCBS network plans</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>Aetna</h3>
              <p>Aetna health insurance plans and managed care options</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>United Healthcare</h3>
              <p>UnitedHealth Group insurance and Medicare Advantage plans</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>Cigna</h3>
              <p>Cigna health insurance and supplemental coverage plans</p>
            </div>
            
            <div className="insurance-card">
              
              <h3>Humana</h3>
              <p>Humana Medicare and commercial insurance plans</p>
            </div>
            
            <div className="insurance-card">
             
              <h3>Kaiser Permanente</h3>
              <p>Kaiser health maintenance organization (HMO) plans</p>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-options">
        <div className="payment-container">
          <h2>Additional Payment Options</h2>
          <div className="payment-grid">
            <div className="payment-card">
              <h3>Private Pay</h3>
              <p>Direct payment for services with flexible payment plans available</p>
            </div>
            
            <div className="payment-card">
              <h3>Long-Term Care Insurance</h3>
              <p>Coverage through long-term care insurance policies</p>
            </div>
            
            <div className="payment-card">
              <h3>Veterans Benefits</h3>
              <p>VA benefits and programs for eligible veterans and families</p>
            </div>
            
            <div className="payment-card">
              <h3>Workers' Compensation</h3>
              <p>Coverage for work-related injuries and rehabilitation needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="verification-process">
        <div className="verification-container">
          <div className="verification-content">
            <h2>Insurance Verification Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Initial Contact</h3>
                <p>We collect your insurance information during your first call</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Benefits Verification</h3>
                <p>Our billing team verifies coverage and benefits with your provider</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Coverage Explanation</h3>
                <p>We explain your coverage details and any out-of-pocket costs</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h3>Service Authorization</h3>
                <p>We obtain necessary authorizations before services begin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-billing">
        <div className="billing-container">
          <h2>Questions About Insurance or Billing?</h2>
          <p>Our dedicated billing team is here to help you understand your coverage and options</p>
          <div className="billing-contact">
            <div className="contact-item">
              <strong>Phone:</strong> <a href="tel:+15551234567">(555) 123-4567</a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong> <a href="mailto:billing@kindhands.com">billing@kindhands.com</a>
            </div>
          </div>
          <Link to="/contact" className="contact-btn">Contact Our Billing Team</Link>
        </div>
      </section>
    </main>
  )
}

export default Insurances

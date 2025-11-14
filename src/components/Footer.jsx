import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kind Hands</h3>
            <p>
              Providing compassionate home health care services to improve the 
              quality of life for our patients.
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+15551234567" style={{ color: 'inherit', textDecoration: 'underline' }}>
                (555) 123-4567
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@kindhands.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                info@kindhands.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> 123 Care Street, Healthville, HV 12345
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Kind Hands Home Health Care Agency. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
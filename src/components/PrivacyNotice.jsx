import React, { useEffect, useRef, useState } from 'react'
import './PrivacyNotice.css'

const PrivacyNotice = ({ isOpen, onAccept, onDecline }) => {
  const [consentChecked, setConsentChecked] = useState(false)
  const modalRef = useRef(null)
  const firstFocusableRef = useRef(null)

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0]
        focusableElements[0].focus()
      }

      const handleTabKey = (e) => {
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }

        if (e.key === 'Escape') {
          onDecline()
        }
      }

      document.addEventListener('keydown', handleTabKey)
      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen, onDecline])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleAccept = () => {
    if (consentChecked) {
      onAccept()
    }
  }

  return (
    <div 
      className="privacy-notice-overlay" 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-content"
    >
      <div className="privacy-notice-modal" ref={modalRef}>
        <div className="privacy-notice-header">
          <h2 id="privacy-notice-title">HIPAA Privacy Notice</h2>
          <button
            className="privacy-notice-close"
            onClick={onDecline}
            aria-label="Close privacy notice"
          >
            ×
          </button>
        </div>

        <div className="privacy-notice-content" id="privacy-notice-content">
          <h3>Notice of Privacy Practices</h3>
          <p>
            This notice describes how medical information about you may be used and disclosed 
            and how you can get access to this information. Please review it carefully.
          </p>

          <h4>How We Use and Disclose Your Health Information</h4>
          <p>
            Kind Hands Home Health Care Agency is committed to protecting your health information. 
            We collect the following information to provide quality care:
          </p>
          <ul>
            <li>Patient name, date of birth, and contact information</li>
            <li>Medical history and current health conditions</li>
            <li>Referring physician information</li>
            <li>Treatment and care plan details</li>
          </ul>

          <h4>Your Rights Under HIPAA</h4>
          <ul>
            <li>Right to access and review your health information</li>
            <li>Right to request corrections to your health information</li>
            <li>Right to receive a copy of this privacy notice</li>
            <li>Right to request restrictions on certain uses and disclosures</li>
            <li>Right to file a complaint if you believe your privacy rights have been violated</li>
          </ul>

          <h4>Data Security</h4>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal health information from unauthorized access, use, or disclosure. All data 
            is transmitted securely using encryption.
          </p>

          <h4>Contact Information</h4>
          <p>
            For questions about our privacy practices or to exercise your rights, contact our 
            Privacy Officer at:
          </p>
          <p>
            <strong>Email:</strong> privacy@kindhands.com<br />
            <strong>Phone:</strong> (555) 123-4567
          </p>

          <div className="privacy-notice-consent">
            <label className="consent-checkbox">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                aria-required="true"
              />
              <span>
                I acknowledge that I have read and understand this Privacy Notice. 
                I consent to the collection, use, and disclosure of my health information 
                as described above.
              </span>
            </label>
          </div>
        </div>

        <div className="privacy-notice-actions">
          <button
            onClick={onDecline}
            className="btn-decline"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="btn-accept"
            disabled={!consentChecked}
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyNotice

import React, { useState, useEffect } from 'react'
import ValidatedInput from '../components/ValidatedInput'
import PrivacyNotice from '../components/PrivacyNotice'
import SessionTimer from '../components/SessionTimer'
import { sanitizeFormData } from '../utils/sanitization'
import './SendReferral.css'

const SendReferral = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientDob: '',
    patientPhone: '',
    patientEmail: '',
    patientAddress: '',
    referringPhysician: '',
    physicianPhone: '',
    physicianEmail: '',
    discipline: '',
    notes: ''
  })

  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Clear form data on component unmount for security
  useEffect(() => {
    return () => {
      setFormData({
        patientName: '',
        patientDob: '',
        patientPhone: '',
        patientEmail: '',
        patientAddress: '',
        referringPhysician: '',
        physicianPhone: '',
        physicianEmail: '',
        discipline: '',
        notes: ''
      })
    }
  }, [])

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSessionTimeout = () => {
    // Clear form data
    setFormData({
      patientName: '',
      patientDob: '',
      patientPhone: '',
      patientEmail: '',
      patientAddress: '',
      referringPhysician: '',
      physicianPhone: '',
      physicianEmail: '',
      discipline: '',
      notes: ''
    })
    alert('Your session has expired for security. Please start over.')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Show privacy notice before submission
    setShowPrivacyNotice(true)
  }

  const handlePrivacyAccept = async () => {
    setShowPrivacyNotice(false)
    setConsentGiven(true)
    setSubmitting(true)

    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData(formData)
      
      // Add consent timestamp
      const submissionData = {
        ...sanitizedData,
        consentGiven: true,
        consentTimestamp: new Date().toISOString()
      }

      // In production, send to secure backend API
      // await fetch('/api/referrals', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Success - DO NOT log PHI
      setSubmitSuccess(true)
      
      // Clear form
      setFormData({
        patientName: '',
        patientDob: '',
        patientPhone: '',
        patientEmail: '',
        patientAddress: '',
        referringPhysician: '',
        physicianPhone: '',
        physicianEmail: '',
        discipline: '',
        notes: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
      
    } catch (error) {
      // Log error without PHI
      console.error('Referral submission failed:', error.message)
      alert('An error occurred while submitting the referral. Please try again or contact us at (555) 123-4567.')
    } finally {
      setSubmitting(false)
    }
  }

  const handlePrivacyDecline = () => {
    setShowPrivacyNotice(false)
  }

  return (
    <main className="send-referral" id="main-content">
      {/* Session Timer */}
      <SessionTimer
        timeoutMinutes={parseInt(import.meta.env.VITE_SESSION_TIMEOUT) || 15}
        warningMinutes={parseInt(import.meta.env.VITE_SESSION_WARNING) || 2}
        onTimeout={handleSessionTimeout}
      />

      {/* Privacy Notice Modal */}
      <PrivacyNotice
        isOpen={showPrivacyNotice}
        onAccept={handlePrivacyAccept}
        onDecline={handlePrivacyDecline}
      />

    

      <section className="form-content">
        <div className="form-container">

      {submitSuccess && (
        <div className="success-message" role="alert" aria-live="polite">
          <strong>Success!</strong> Referral submitted successfully. We will contact you shortly.
        </div>
      )}
      
      <form onSubmit={handleFormSubmit} className="referral-form" noValidate>
        <section className="form-section" aria-labelledby="patient-info-heading">
          <h3 id="patient-info-heading">Patient Information</h3>
          <div className="form-row">
            <ValidatedInput
              type="text"
              name="patientName"
              label="Full Name"
              value={formData.patientName}
              onChange={(value) => handleChange('patientName', value)}
              required
              autoComplete="name"
            />
            <ValidatedInput
              type="date"
              name="patientDob"
              label="Date of Birth"
              value={formData.patientDob}
              onChange={(value) => handleChange('patientDob', value)}
              required
              autoComplete="bday"
            />
          </div>
          
          <div className="form-row">
            <ValidatedInput
              type="tel"
              name="patientPhone"
              label="Phone Number"
              value={formData.patientPhone}
              onChange={(value) => handleChange('patientPhone', value)}
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
            />
            <ValidatedInput
              type="email"
              name="patientEmail"
              label="Email"
              value={formData.patientEmail}
              onChange={(value) => handleChange('patientEmail', value)}
              autoComplete="email"
              placeholder="patient@example.com"
            />
          </div>
          
          <ValidatedInput
            type="textarea"
            name="patientAddress"
            label="Address"
            value={formData.patientAddress}
            onChange={(value) => handleChange('patientAddress', value)}
            required
            autoComplete="street-address"
            placeholder="123 Main Street, City, State ZIP"
          />
        </section>
        
        <section className="form-section" aria-labelledby="physician-info-heading">
          <h3 id="physician-info-heading">Referring Physician Information</h3>
          <div className="form-row">
            <ValidatedInput
              type="text"
              name="referringPhysician"
              label="Physician Name"
              value={formData.referringPhysician}
              onChange={(value) => handleChange('referringPhysician', value)}
              required
              placeholder="Dr. John Smith"
            />
            <div className="form-group">
              <label htmlFor="discipline">
                Requested Discipline <span className="required-indicator">*</span>
              </label>
              <select
                id="discipline"
                name="discipline"
                value={formData.discipline}
                onChange={handleSelectChange}
                required
                aria-required="true"
              >
                <option value="">Select a discipline</option>
                <option value="skilled-nursing">Skilled Nursing (SN)</option>
                <option value="registered-nursing">Registered Nursing (RN)</option>
                <option value="physical-therapy">Physical Therapy (PT)</option>
                <option value="occupational-therapy">Occupational Therapy (OT)</option>
                <option value="speech-therapy">Speech Therapy (ST)</option>
                <option value="home-health-aide">Home Health Aide (HHA)</option>
                <option value="medical-social-work">Medical Social Work (MSW)</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <ValidatedInput
              type="tel"
              name="physicianPhone"
              label="Phone Number"
              value={formData.physicianPhone}
              onChange={(value) => handleChange('physicianPhone', value)}
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
            />
            <ValidatedInput
              type="email"
              name="physicianEmail"
              label="Email"
              value={formData.physicianEmail}
              onChange={(value) => handleChange('physicianEmail', value)}
              autoComplete="email"
              placeholder="doctor@clinic.com"
            />
          </div>
        </section>
        
        <section className="form-section" aria-labelledby="additional-info-heading">
          <h3 id="additional-info-heading">Additional Information</h3>
          <ValidatedInput
            type="textarea"
            name="notes"
            label="Notes"
            value={formData.notes}
            onChange={(value) => handleChange('notes', value)}
            placeholder="Please provide any additional information or special requests..."
            rows={4}
          />
        </section>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Referral'}
          </button>
        </div>
      </form>
        </div>
      </section>
    </main>
  )
}

export default SendReferral
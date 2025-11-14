import React, { useState } from 'react'
import './ValidatedInput.css'

const ValidatedInput = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  onBlur,
  required = false,
  pattern,
  errorMessage,
  placeholder,
  autoComplete,
  ...props
}) => {
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false)

  const handleBlur = (e) => {
    setTouched(true)
    validateInput(e.target.value)
    if (onBlur) onBlur(e)
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    onChange(newValue)
    
    if (touched) {
      validateInput(newValue)
    }
  }

  const validateInput = (inputValue) => {
    // Required validation
    if (required && !inputValue.trim()) {
      setError(`${label} is required`)
      return false
    }

    // Pattern validation
    if (pattern && inputValue && !new RegExp(pattern).test(inputValue)) {
      setError(errorMessage || `Invalid ${label.toLowerCase()} format`)
      return false
    }

    // Email validation
    if (type === 'email' && inputValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(inputValue)) {
        setError('Please enter a valid email address')
        return false
      }
    }

    // Phone validation
    if (type === 'tel' && inputValue) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      if (!phoneRegex.test(inputValue)) {
        setError('Please enter a valid phone number')
        return false
      }
    }

    // Date validation (must be in the past for DOB)
    if (type === 'date' && inputValue && name.toLowerCase().includes('dob')) {
      const date = new Date(inputValue)
      const now = new Date()
      if (date >= now) {
        setError('Date of birth must be in the past')
        return false
      }
    }

    setError('')
    return true
  }

  const hasError = touched && error

  return (
    <div className={`validated-input ${hasError ? 'validated-input--error' : ''}`}>
      <label htmlFor={name} className="validated-input__label">
        {label} {required && <span className="required-indicator" aria-label="required">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className="validated-input__textarea"
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className="validated-input__field"
          {...props}
        />
      )}
      
      {hasError && (
        <span 
          id={`${name}-error`}
          className="validated-input__error"
          role="alert"
          aria-live="polite"
        >
          {error}
        </span>
      )}
    </div>
  )
}

export default ValidatedInput

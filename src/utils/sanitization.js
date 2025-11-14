import DOMPurify from 'dompurify'

/**
 * Sanitizes a single string input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true
  })
}

/**
 * Recursively sanitizes all string values in form data object
 * @param {Object} data - Form data object to sanitize
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (data) => {
  if (!data || typeof data !== 'object') return data

  const sanitized = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeFormData(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

/**
 * Strips PHI (Protected Health Information) from error messages
 * @param {string} errorMessage - Error message that may contain PHI
 * @returns {string} - Sanitized error message without PHI
 */
export const stripPHIFromError = (errorMessage) => {
  if (!errorMessage) return 'An error occurred'
  
  // Remove common PHI patterns
  let sanitized = errorMessage
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[SSN]') // SSN
    .replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, '[PHONE]') // Phone numbers
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL]') // Email
    .replace(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g, '[DATE]') // Dates
    .replace(/\b\d{5}(-\d{4})?\b/g, '[ZIP]') // ZIP codes
  
  return sanitized
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates US phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return phoneRegex.test(phone)
}

/**
 * Validates date is in the past
 * @param {string} dateString - Date string to validate
 * @returns {boolean} - True if date is in the past
 */
export const validateDateInPast = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  return date < now && !isNaN(date.getTime())
}

/**
 * Formats phone number to standard format
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

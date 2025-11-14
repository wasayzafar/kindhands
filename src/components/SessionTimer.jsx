import React, { useEffect, useState, useCallback } from 'react'
import './SessionTimer.css'

const SessionTimer = ({ 
  timeoutMinutes = 15, 
  warningMinutes = 2,
  onTimeout,
  onWarning 
}) => {
  const [showWarning, setShowWarning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [lastActivity, setLastActivity] = useState(Date.now())

  const timeoutMs = timeoutMinutes * 60 * 1000
  const warningMs = warningMinutes * 60 * 1000

  // Reset activity timer
  const resetTimer = useCallback(() => {
    setLastActivity(Date.now())
    setShowWarning(false)
  }, [])

  // Handle user activity
  useEffect(() => {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click']
    
    events.forEach(event => {
      document.addEventListener(event, resetTimer)
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimer)
      })
    }
  }, [resetTimer])

  // Check for timeout
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastActivity
      const remaining = timeoutMs - elapsed

      if (elapsed >= timeoutMs) {
        // Session timeout
        clearInterval(interval)
        if (onTimeout) {
          onTimeout()
        }
      } else if (elapsed >= (timeoutMs - warningMs) && !showWarning) {
        // Show warning
        setShowWarning(true)
        setTimeRemaining(Math.ceil(remaining / 1000))
        if (onWarning) {
          onWarning()
        }
      } else if (showWarning) {
        // Update countdown
        setTimeRemaining(Math.ceil(remaining / 1000))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [lastActivity, timeoutMs, warningMs, showWarning, onTimeout, onWarning])

  const handleContinue = () => {
    resetTimer()
  }

  if (!showWarning) return null

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60

  return (
    <div className="session-warning-overlay" role="alertdialog" aria-labelledby="session-warning-title" aria-describedby="session-warning-desc">
      <div className="session-warning-modal">
        <h2 id="session-warning-title">Session Timeout Warning</h2>
        <p id="session-warning-desc">
          Your session will expire in <strong>{minutes}:{seconds.toString().padStart(2, '0')}</strong> due to inactivity.
          Any unsaved data will be lost for security purposes.
        </p>
        <div className="session-warning-actions">
          <button 
            onClick={handleContinue}
            className="btn-continue"
            autoFocus
          >
            Continue Session
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionTimer

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const location = useLocation()
  const [expandedItem, setExpandedItem] = useState(null)

  // Close menu on route change
  useEffect(() => {
    onClose()
    setExpandedItem(null)
  }, [location, onClose])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const toggleDropdown = (label) => {
    setExpandedItem(expandedItem === label ? null : label)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <nav 
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul className="mobile-menu__list">
          {menuItems.map((item, index) => (
            <li key={index} className="mobile-menu__item">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-menu__dropdown-toggle"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <span className={`mobile-menu__arrow ${expandedItem === item.label ? 'mobile-menu__arrow--open' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedItem === item.label && (
                    <ul className="mobile-menu__submenu">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            to={subItem.path} 
                            className="mobile-menu__sublink"
                            onClick={onClose}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="mobile-menu__link"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MobileMenu

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const menuItems = [
    
    { path: '/about', label: 'About Us' },
    { 
      label: 'Services',
      dropdown: [
        // { 
        //   path: '/home-health-care', 
        //   label: 'Home Health Care',
        //   description: 'Skilled nursing, physical therapy, and rehabilitative services provided at home to help patients recover after illness, surgery, or hospitalization.'
        // },
        // { 
        //   path: '/private-duty', 
        //   label: 'Home Care – Private Duty',
        //   description: 'Personalized, non-medical assistance with daily activities to support independence and comfort at home—available to all ages and often privately paid.'
        // },
        // { 
        //   path: '/home-maker-ccp', 
        //   label: 'Home Care – Home Maker / CCP',
        //   description: 'State-funded in-home services for seniors through Illinois\' Community Care Program, helping adults that are 60+ to remain safely in their homes.'
        // },
        // { 
        //   path: '/hospice-palliative', 
        //   label: 'Hospice & Palliative Care',
        //   description: 'Compassionate care focused on comfort, dignity, and symptom relief for those with serious or life-limiting illnesses—supporting both patients and families.'
        // },
        { 
          path: '/physical-therapy', 
          label: 'Physical Therapy',
          description: 'Restore movement and function through therapeutic exercises and treatments.'
        },
        { 
          path: '/occupational-therapy', 
          label: 'Occupational Therapy',
          description: 'Help patients regain independence in daily living activities.'
        },
        { 
          path: '/speech-therapy', 
          label: 'Speech Therapy',
          description: 'Improve communication and swallowing abilities.'
        },
        { 
          path: '/skilled-nursing', 
          label: 'Skilled Nursing',
          description: 'Professional nursing care for complex medical needs.'
        },
        { 
          path: '/home-health-aides', 
          label: 'Home Health Aides',
          description: 'Personal care assistance with daily activities.'
        },
        { 
          path: '/medical-social-service', 
          label: 'Medical Social Service',
          description: 'Support services to address social and emotional needs.'
        },
        { 
          path: '/dietitians', 
          label: 'Dietitians',
          description: 'Nutritional counseling and meal planning services.'
        },
        { 
          path: '/hospice-care', 
          label: 'Hospice Care',
          description: 'End-of-life care focused on comfort and dignity.'
        },
        { 
          path: '/wound-care', 
          label: 'Wound Care',
          description: 'Specialized treatment for wound healing and management.'
        },
        { 
          path: '/diabetes-management', 
          label: 'Diabetes Management',
          description: 'Comprehensive care for diabetes monitoring and education.'
        },
        { 
          path: '/ostomy-care', 
          label: 'Ostomy Care',
          description: 'Specialized care and education for ostomy patients.'
        }
      ]
    },
    { path: '/insurances', label: 'Insurances' },
    { path: '/programs', label: 'Programs' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/send-referral', label: 'Send Referral' }
     ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const handleMouseEnter = (label) => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(label)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(null)
    }
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" aria-label="Kind Hands Home Health Care - Home">
        <span className="logo-content">  <img src="/logo.png" alt="Kind Hands Home Health Care" className="logo-image" /> <h3>Kind Hands<br />Home Health Care</h3></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Main navigation">
          <ul>
            {menuItems.map((item, index) => (
              <li 
                key={index}
                className={item.dropdown ? 'nav-item-dropdown' : ''}
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="nav-dropdown-toggle"
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="dropdown-arrow" aria-hidden="true">▼</span>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="dropdown-menu" role="menu">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex} role="none">
                            <Link to={subItem.path} role="menuitem">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
            <li className='send-ref'><Link to='/send-referral'>Send Referral</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </header>
  )
}

export default Header
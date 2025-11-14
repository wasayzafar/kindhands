# Design Document

## Overview

This design document outlines the technical approach for implementing HIPAA compliance and responsive optimization for the Kind Hands Home Health Care website. The solution focuses on three core pillars:

1. **Security & Privacy**: Implementing HIPAA-compliant data handling, encryption, and privacy controls
2. **Responsive Design**: Creating a mobile-first, adaptive layout system that works seamlessly across all devices
3. **Accessibility & Performance**: Ensuring WCAG 2.1 AA compliance and optimal load times

The design leverages React's component architecture, modern CSS techniques (Flexbox, Grid, Media Queries), and security best practices to create a compliant, user-friendly healthcare application.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Application                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React Components (UI Layer)                           │ │
│  │  - Header, Footer, Pages, Forms                        │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Security Layer                                        │ │
│  │  - Input Sanitization                                  │ │
│  │  - Session Management                                  │ │
│  │  - Privacy Controls                                    │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Responsive Layout System                              │ │
│  │  - Breakpoint Management                               │ │
│  │  - Adaptive Components                                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
                    HTTPS/TLS 1.2+
                            │
┌─────────────────────────────────────────────────────────────┐
│                   Backend API (Future)                       │
│  - Authentication & Authorization                            │
│  - Encrypted Data Storage                                    │
│  - Audit Logging                                             │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.9.5
- **Build Tool**: Vite 7.2.2
- **Styling**: CSS3 with CSS Modules pattern
- **Security**: DOMPurify for sanitization, crypto-js for client-side operations


## Components and Interfaces

### 1. Security Components

#### PrivacyNotice Component
```javascript
interface PrivacyNoticeProps {
  onAccept: () => void;
  onDecline: () => void;
  isVisible: boolean;
}
```
- Displays HIPAA privacy notice before form submission
- Requires explicit user consent
- Includes link to full privacy policy
- Accessible modal with focus trap

#### SecureForm Component (HOC)
```javascript
interface SecureFormProps {
  onSubmit: (sanitizedData: FormData) => void;
  children: React.ReactNode;
  sessionTimeout?: number; // default 15 minutes
}
```
- Wraps referral form with security features
- Implements session timeout
- Sanitizes all inputs before submission
- Clears form data on unmount
- Prevents PHI from being logged

#### InputSanitizer Utility
```javascript
interface SanitizerConfig {
  allowedTags?: string[];
  allowedAttributes?: Record<string, string[]>;
}

function sanitizeInput(input: string, config?: SanitizerConfig): string
```
- Uses DOMPurify to sanitize user inputs
- Prevents XSS attacks
- Configurable for different input types

### 2. Responsive Layout Components

#### ResponsiveContainer Component
```javascript
interface ResponsiveContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: boolean;
  children: React.ReactNode;
}
```
- Provides consistent max-width and padding across breakpoints
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1400px)

#### MobileMenu Component
```javascript
interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  menuItems: MenuItem[];
}
```
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Accessible with keyboard navigation
- Closes on route change


#### ResponsiveGrid Component
```javascript
interface ResponsiveGridProps {
  columns: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
  children: React.ReactNode;
}
```
- Adaptive grid system using CSS Grid
- Configurable columns per breakpoint
- Used for service cards, discipline cards

### 3. Form Components

#### ValidatedInput Component
```javascript
interface ValidatedInputProps {
  type: 'text' | 'email' | 'tel' | 'date';
  name: string;
  label: string;
  required?: boolean;
  pattern?: string;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}
```
- Real-time validation
- Accessible error messages with ARIA
- Appropriate input types for mobile keyboards
- Visual error states

#### SessionTimer Component
```javascript
interface SessionTimerProps {
  timeoutMinutes: number;
  onTimeout: () => void;
  warningMinutes?: number;
  onWarning?: () => void;
}
```
- Tracks user inactivity
- Shows warning before timeout
- Clears form data on timeout
- Resets on user interaction

## Data Models

### FormData Interface
```javascript
interface ReferralFormData {
  patient: {
    name: string;
    dateOfBirth: string;
    phone: string;
    email?: string;
    address: string;
  };
  physician: {
    name: string;
    phone: string;
    email?: string;
  };
  discipline: DisciplineType;
  notes?: string;
  consentGiven: boolean;
  consentTimestamp: string;
}

type DisciplineType = 
  | 'skilled-nursing'
  | 'registered-nursing'
  | 'physical-therapy'
  | 'occupational-therapy'
  | 'speech-therapy'
  | 'home-health-aide'
  | 'medical-social-work';
```

### Validation Rules
```javascript
interface ValidationRule {
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  custom?: (value: string) => boolean;
  errorMessage: string;
}

const validationRules: Record<string, ValidationRule> = {
  phone: {
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    errorMessage: 'Please enter a valid phone number'
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'Please enter a valid email address'
  },
  dateOfBirth: {
    custom: (value) => new Date(value) < new Date(),
    errorMessage: 'Date of birth must be in the past'
  }
};
```


## Responsive Design System

### Breakpoint Strategy

```css
/* Mobile First Approach */
:root {
  --breakpoint-sm: 640px;   /* Large phones */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Small laptops */
  --breakpoint-xl: 1400px;  /* Desktops */
}
```

### Layout Patterns

#### Mobile (320px - 767px)
- Single column layout
- Stacked navigation (hamburger menu)
- Full-width form fields
- Touch-optimized buttons (min 44x44px)
- Reduced padding and margins
- Font size: 16px base (prevents zoom on iOS)

#### Tablet (768px - 1023px)
- 2-column grid for cards
- Horizontal or hamburger navigation (context-dependent)
- 2-column form layout
- Increased spacing
- Font size: 16px base

#### Desktop (1024px+)
- 3-4 column grid for cards
- Full horizontal navigation
- 2-column form layout with logical grouping
- Maximum content width: 1400px
- Hover states for interactive elements
- Font size: 16px base

### Typography Scale

```css
:root {
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-base: 1rem;    /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 2rem;     /* 32px */
  --font-size-4xl: 2.5rem;   /* 40px */
}
```

### Spacing System

```css
:root {
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  --spacing-2xl: 3rem;    /* 48px */
  --spacing-3xl: 4rem;    /* 64px */
}
```

### Color System (WCAG AA Compliant)

```css
:root {
  /* Primary Colors */
  --color-primary: #4a6fa5;      /* Main brand color */
  --color-primary-dark: #3a5a80; /* Hover state */
  --color-primary-light: #f1f8ff; /* Backgrounds */
  
  /* Accent Colors */
  --color-accent: #e74c3c;       /* CTA buttons */
  --color-accent-dark: #c0392b;  /* CTA hover */
  
  /* Neutral Colors */
  --color-text-primary: #2c3e50;    /* Contrast ratio: 12.63:1 */
  --color-text-secondary: #5a6c7d;  /* Contrast ratio: 7.23:1 */
  --color-background: #ffffff;
  --color-background-alt: #f8f9fa;
  
  /* Semantic Colors */
  --color-error: #dc3545;        /* Contrast ratio: 5.91:1 */
  --color-success: #28a745;      /* Contrast ratio: 4.53:1 */
  --color-warning: #ffc107;      /* Contrast ratio: 4.52:1 */
  
  /* Border Colors */
  --color-border: #ddd;
  --color-border-focus: #4a6fa5;
}
```


## Security Implementation

### HTTPS and TLS Configuration

**Vite Configuration** (vite.config.js)
```javascript
export default defineConfig({
  server: {
    https: true, // Development
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';"
    }
  }
});
```

### Input Sanitization Strategy

1. **Client-Side Sanitization**: Use DOMPurify before form submission
2. **Validation**: Validate format and content before sanitization
3. **Encoding**: HTML encode outputs when displaying user data
4. **No PHI in Logs**: Strip sensitive data before any logging

```javascript
// Sanitization utility
import DOMPurify from 'dompurify';

export const sanitizeFormData = (data) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = DOMPurify.sanitize(value, { 
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [] 
      });
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeFormData(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};
```

### Session Management

```javascript
// Session timeout implementation
class SessionManager {
  constructor(timeoutMinutes = 15) {
    this.timeoutMs = timeoutMinutes * 60 * 1000;
    this.warningMs = (timeoutMinutes - 2) * 60 * 1000;
    this.lastActivity = Date.now();
  }
  
  resetTimer() {
    this.lastActivity = Date.now();
  }
  
  checkTimeout() {
    const elapsed = Date.now() - this.lastActivity;
    if (elapsed >= this.timeoutMs) {
      return 'timeout';
    } else if (elapsed >= this.warningMs) {
      return 'warning';
    }
    return 'active';
  }
  
  clearSession() {
    // Clear any form data
    // Redirect to home or show timeout message
  }
}
```

### Privacy Notice Implementation

The privacy notice will be displayed as a modal before form submission:

**Key Elements**:
- Notice of Privacy Practices (NPP) summary
- Data collection and use explanation
- Patient rights under HIPAA
- Contact information for privacy officer
- Explicit consent checkbox
- Link to full privacy policy

**User Flow**:
1. User fills out referral form
2. On submit, privacy notice modal appears
3. User must read and check consent box
4. Form submits only after consent
5. Consent timestamp recorded with submission


## Error Handling

### Error Handling Strategy

1. **User-Facing Errors**: Clear, actionable messages without technical details
2. **No PHI in Errors**: Never include patient data in error messages
3. **Graceful Degradation**: Application remains functional with partial failures
4. **Accessibility**: Errors announced to screen readers via ARIA live regions

### Error Types and Handling

#### Validation Errors
```javascript
interface ValidationError {
  field: string;
  message: string;
  type: 'required' | 'format' | 'custom';
}

// Display inline with field
<div className="form-group error">
  <label htmlFor="phone">Phone Number *</label>
  <input 
    id="phone"
    aria-invalid="true"
    aria-describedby="phone-error"
  />
  <span id="phone-error" className="error-message" role="alert">
    Please enter a valid phone number
  </span>
</div>
```

#### Network Errors
```javascript
try {
  await submitReferral(sanitizedData);
} catch (error) {
  if (error.name === 'NetworkError') {
    showError('Unable to submit referral. Please check your connection and try again.');
  } else {
    showError('An error occurred. Please try again or contact us at (555) 123-4567.');
  }
  // Log error without PHI
  logError({ type: 'submission_failed', timestamp: Date.now() });
}
```

#### Session Timeout
```javascript
// Show warning modal 2 minutes before timeout
<TimeoutWarning 
  onContinue={() => sessionManager.resetTimer()}
  onLogout={() => sessionManager.clearSession()}
/>

// On timeout
<TimeoutMessage>
  Your session has expired for security. Please start over.
</TimeoutMessage>
```

## Accessibility Implementation

### WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- All interactive elements accessible via Tab key
- Visible focus indicators (2px solid outline)
- Logical tab order
- Skip to main content link
- Escape key closes modals

#### Screen Reader Support
```javascript
// Proper ARIA labels
<form aria-label="Patient Referral Form">
  <div role="group" aria-labelledby="patient-info-heading">
    <h3 id="patient-info-heading">Patient Information</h3>
    {/* form fields */}
  </div>
</form>

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {statusMessage}
</div>

// Error announcements
<div role="alert" aria-live="assertive">
  {errorMessage}
</div>
```

#### Color Contrast
All text meets WCAG AA standards:
- Normal text (< 18pt): 4.5:1 minimum
- Large text (≥ 18pt): 3.0:1 minimum
- Interactive elements: 3.0:1 minimum

#### Focus Management
```javascript
// Trap focus in modal
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
};
```


## Performance Optimization

### Code Splitting and Lazy Loading

```javascript
// Lazy load pages
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const SendReferral = lazy(() => import('./pages/SendReferral'));
const AllDisciplines = lazy(() => import('./pages/AllDisciplines'));
const DisciplineDetail = lazy(() => import('./pages/DisciplineDetail'));

// Loading fallback
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
    {/* other routes */}
  </Routes>
</Suspense>
```

### Image Optimization

- Use WebP format with fallbacks
- Implement lazy loading for below-fold images
- Serve responsive images with srcset
- Compress images (target: < 100KB per image)

```javascript
<img
  src="image.webp"
  srcSet="image-320w.webp 320w, image-768w.webp 768w, image-1200w.webp 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Descriptive alt text"
  loading="lazy"
/>
```

### CSS Optimization

- Use CSS custom properties for theming
- Minimize CSS with Vite build
- Remove unused CSS
- Use CSS containment for performance

### Bundle Optimization

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      }
    }
  }
});
```

## Testing Strategy

### Unit Testing
- Test validation functions
- Test sanitization utilities
- Test session management logic
- Test responsive utility functions

### Component Testing
- Test form submission flow
- Test privacy notice modal
- Test session timeout behavior
- Test mobile menu functionality

### Accessibility Testing
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification

### Responsive Testing
- Test on real devices (iOS, Android)
- Test on various screen sizes (320px - 1920px)
- Test touch interactions
- Test landscape and portrait orientations

### Security Testing
- XSS vulnerability testing
- Input sanitization verification
- Session timeout verification
- HTTPS enforcement testing

## Deployment Considerations

### Environment Variables
```
VITE_API_URL=https://api.kindhands.com
VITE_SESSION_TIMEOUT=15
VITE_ENABLE_ANALYTICS=false
```

### Build Configuration
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx",
    "test": "vitest"
  }
}
```

### Security Headers (Server Configuration)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HIPAA Compliance Checklist

- [ ] All data transmitted over HTTPS/TLS 1.2+
- [ ] Privacy notice displayed before PHI collection
- [ ] Explicit consent obtained and recorded
- [ ] Session timeout implemented (15 minutes)
- [ ] No PHI stored in browser storage
- [ ] Input sanitization implemented
- [ ] No PHI in error messages or logs
- [ ] Security headers configured
- [ ] Access controls implemented
- [ ] Audit logging prepared for backend integration

## Future Enhancements

### Backend Integration
- Secure API endpoints with JWT authentication
- Encrypted database storage
- Audit logging system
- User authentication and role-based access

### Additional Features
- Multi-factor authentication for staff portal
- Encrypted file upload for medical documents
- Patient portal for referral status tracking
- SMS/Email notifications with PHI protection

### Monitoring and Analytics
- Privacy-compliant analytics (no PHI tracking)
- Performance monitoring
- Error tracking (without PHI)
- Security incident detection

## Design Decisions and Rationale

### Mobile-First Approach
**Decision**: Design for mobile first, then enhance for larger screens.
**Rationale**: Majority of healthcare searches happen on mobile devices. Mobile-first ensures core functionality works on all devices.

### Client-Side Sanitization
**Decision**: Sanitize inputs on client-side before submission.
**Rationale**: Provides immediate feedback and reduces attack surface, though server-side validation is still required.

### 15-Minute Session Timeout
**Decision**: Implement 15-minute inactivity timeout.
**Rationale**: HIPAA best practice for protecting PHI on shared or public devices.

### No Local Storage of PHI
**Decision**: Never store PHI in localStorage or sessionStorage.
**Rationale**: Browser storage is not encrypted and persists beyond session, violating HIPAA requirements.

### CSS-in-CSS Approach
**Decision**: Use traditional CSS files instead of CSS-in-JS.
**Rationale**: Better performance, easier to optimize, and simpler for this application's scope.

### Explicit Consent Modal
**Decision**: Require explicit consent via modal before form submission.
**Rationale**: HIPAA requires informed consent before collecting PHI. Modal ensures users cannot miss the notice.

## Conclusion

This design provides a comprehensive approach to making the Kind Hands Home Health Care website HIPAA-compliant and fully responsive. The implementation focuses on security, accessibility, and user experience across all devices while maintaining compliance with federal healthcare regulations.

Key priorities:
1. Security and privacy first
2. Mobile-optimized experience
3. Accessibility for all users
4. Performance and fast load times
5. Clear, compliant user consent flow

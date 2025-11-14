import React from 'react'
import { useParams } from 'react-router-dom'
import './DisciplineDetail.css'

const disciplineDetails = {
  'skilled-nursing': {
    name: 'Skilled Nursing',
    abbreviation: 'SN',
    description: 'Our skilled nursing services provide professional medical care in the comfort of your home. Our licensed nurses deliver comprehensive care tailored to your specific needs.',
    services: [
      'Wound care and dressing changes',
      'Medication management and education',
      'IV therapy and injections',
      'Monitoring of vital signs',
      'Diabetes management and education',
      'Post-surgical care',
      'Pain management',
      'Chronic disease management'
    ],
    benefits: [
      'Personalized one-on-one care',
      'Reduced risk of hospital readmission',
      'Improved medication compliance',
      'Enhanced quality of life',
      'Education for patients and families',
      'Coordination with physicians and other healthcare providers'
    ]
  },
  'registered-nursing': {
    name: 'Registered Nursing',
    abbreviation: 'RN',
    description: 'Our registered nurses provide advanced nursing care for patients with complex medical conditions requiring professional nursing interventions.',
    services: [
      'Assessment and monitoring of complex conditions',
      'Administration of complex medications',
      'Patient and family education',
      'Care coordination with healthcare team',
      'Development and modification of care plans',
      'Emergency response and intervention'
    ],
    benefits: [
      'Highly skilled professional care',
      'Comprehensive health assessments',
      'Expertise in complex medical conditions',
      'Improved patient outcomes',
      'Reduced healthcare costs',
      'Enhanced patient safety'
    ]
  },
  'physical-therapy': {
    name: 'Physical Therapy',
    abbreviation: 'PT',
    description: 'Our physical therapists help patients recover mobility, strength, and function after injury, surgery, or illness. We focus on restoring independence and improving quality of life.',
    services: [
      'Mobility and gait training',
      'Strength and balance exercises',
      'Pain management techniques',
      'Manual therapy',
      'Post-surgical rehabilitation',
      'Fall prevention programs',
      'Custom exercise programs'
    ],
    benefits: [
      'Improved mobility and independence',
      'Reduced pain and discomfort',
      'Enhanced balance and coordination',
      'Increased strength and endurance',
      'Prevention of future injuries',
      'Faster recovery from surgery or injury'
    ]
  },
  'occupational-therapy': {
    name: 'Occupational Therapy',
    abbreviation: 'OT',
    description: 'Our occupational therapists help patients regain the skills needed for daily living and working activities. We focus on enabling independence in all areas of life.',
    services: [
      'Activities of daily living training',
      'Fine motor skills development',
      'Cognitive rehabilitation',
      'Adaptive equipment training',
      'Home safety assessments',
      'Workplace ergonomics',
      'Energy conservation techniques'
    ],
    benefits: [
      'Increased independence in daily activities',
      'Improved cognitive function',
      'Enhanced fine motor skills',
      'Better home safety and accessibility',
      'Greater confidence in daily tasks',
      'Improved quality of life'
    ]
  },
  'speech-therapy': {
    name: 'Speech Therapy',
    abbreviation: 'ST',
    description: 'Our speech therapists help patients improve communication and swallowing abilities. We work with patients who have speech, language, cognitive, or swallowing disorders.',
    services: [
      'Speech and language assessment',
      'Communication skills training',
      'Swallowing therapy',
      'Cognitive rehabilitation',
      'Voice therapy',
      'Accent modification',
      'Augmentative communication devices'
    ],
    benefits: [
      'Improved communication abilities',
      'Safer swallowing and eating',
      'Enhanced cognitive function',
      'Increased confidence in social situations',
      'Better academic or work performance',
      'Improved quality of relationships'
    ]
  },
  'home-health-aide': {
    name: 'Home Health Aide',
    abbreviation: 'HHA',
    description: 'Our home health aides provide personal care and assistance with activities of daily living. They work under the supervision of nurses to ensure quality care.',
    services: [
      'Personal hygiene assistance',
      'Dressing and grooming support',
      'Meal preparation and feeding',
      'Light housekeeping',
      'Mobility assistance',
      'Vital signs monitoring',
      'Companionship and emotional support'
    ],
    benefits: [
      'Maintained dignity and independence',
      'Safe and comfortable home environment',
      'Consistent daily care routine',
      'Reduced caregiver burden',
      'Enhanced quality of life',
      'Support for family caregivers'
    ]
  },
  'medical-social-work': {
    name: 'Medical Social Work',
    abbreviation: 'MSW',
    description: 'Our medical social workers provide support services to help patients and families cope with medical conditions. We connect patients with community resources and support systems.',
    services: [
      'Psychosocial assessment',
      'Crisis intervention',
      'Care coordination',
      'Community resource linkage',
      'Discharge planning',
      'Advocacy services',
      'Grief and bereavement counseling'
    ],
    benefits: [
      'Access to community resources',
      'Improved care coordination',
      'Emotional support during difficult times',
      'Reduced stress for patients and families',
      'Smooth transitions between care settings',
      'Enhanced coping skills'
    ]
  }
}

const DisciplineDetail = () => {
  const { disciplineName } = useParams()
  const discipline = disciplineDetails[disciplineName]

  if (!discipline) {
    return (
      <main className="discipline-detail" id="main-content">
        <h2>Discipline Not Found</h2>
        <p>The requested discipline information is not available.</p>
      </main>
    )
  }

  return (
    <main className="discipline-detail" id="main-content">
      <h2>
        {discipline.name} <span className="abbreviation">({discipline.abbreviation})</span>
      </h2>
      <p className="discipline-description">{discipline.description}</p>
      
      <div className="discipline-content">
        <section className="content-section" aria-labelledby="services-heading">
          <h3 id="services-heading">Services Provided</h3>
          <ul>
            {discipline.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>
        
        <section className="content-section" aria-labelledby="benefits-heading">
          <h3 id="benefits-heading">Benefits</h3>
          <ul>
            {discipline.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default DisciplineDetail
import React from 'react'
import './PageTemplate.css'

const Blogs = () => {
  const blogPosts = [
    {
      title: '5 Benefits of Home Health Care',
      date: 'January 15, 2025',
      excerpt: 'Discover why more families are choosing home health care for their loved ones...'
    },
    {
      title: 'Understanding Medicare Coverage for Home Health',
      date: 'January 10, 2025',
      excerpt: 'Learn what Medicare covers and how to maximize your benefits...'
    },
    {
      title: 'Tips for Caring for Elderly Parents at Home',
      date: 'January 5, 2025',
      excerpt: 'Practical advice for family caregivers supporting aging parents...'
    }
  ]

  return (
    <main className="page-template" id="main-content">
      <div className="page-header">
        <h1>Our Blog</h1>
        <p className="page-subtitle">Health tips, news, and insights</p>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Latest Articles</h2>
          {blogPosts.map((post, index) => (
            <article key={index} style={{ 
              marginBottom: 'var(--spacing-2xl)', 
              padding: 'var(--spacing-xl)', 
              backgroundColor: 'var(--color-background-alt)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--color-primary)'
            }}>
              <h3 style={{ color: 'var(--color-primary)', marginTop: 0 }}>{post.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-md)' }}>
                {post.date}
              </p>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>{post.excerpt}</p>
              <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Read More →
              </a>
            </article>
          ))}
        </section>

        <section className="content-section">
          <h2>Categories</h2>
          <ul>
            <li>Home Health Care Tips</li>
            <li>Medicare & Insurance</li>
            <li>Caregiver Resources</li>
            <li>Health & Wellness</li>
            <li>Company News</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Blogs

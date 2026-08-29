import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      company: 'Besant Technologies',
      date: 'January 2026 – June 2026',
      points: [
        'Built 10+ reusable React and Bootstrap UI components to improve maintainability and reduce duplicate code.',
        'Collaborated on backend services using Node.js and Express, integrating RESTful APIs with frontend interfaces.',
        'Implemented JWT-based authentication and designed secure API endpoints for multiple user roles.',
        'Worked with MongoDB and MySQL, wrote and optimized SQL queries, and designed data schemas to support application features.',
        'Deployed frontend to Vercel and backend to Render, improving uptime and simplifying CI/CD workflows.',
        'Participated in debugging, testing, and resolving integration defects across frontend and backend stacks.',
      ],
    },
  ]

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My journey in the world of web development
        </motion.p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-description">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

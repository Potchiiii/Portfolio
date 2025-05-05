import { useState } from 'react';

function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);
  
  const experiences = [
    {
      id: 1,
      title: 'CEO/Founder',
      company: 'Orion Tech Solutions',
      location: 'Zamboanga City, Philippines',
      type: 'Full-time',
      duration: 'February 2025 - Present',
      description: 'Founded and led a team of developers and hardware integration specialist to build web applications for clients.',
      responsibilities: [
        'Led a team of developers to build web applications for clients',
        'Managed project timelines and client communications',
        'Oversaw the development process from concept to deployment',
        'Ensured high-quality code and adherence to best practices',
      ],
      technologies: ['C++','Arduino', 'JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'PHP', 'MySQL']
    },
    {
      id: 2,
      title: 'Programmer',
      company: 'Western Mindanao State University',
      location: 'Zamboanga City, Philippines',
      type: 'School Project',
      duration: '2023 - 2024',
      description: 'Worked on a project named "Scholarship Information Management System" for the university. Developed a web application to manage scholarship applications, track student progress, and generate reports. Collaborated with a co-developer to implement features and ensure system security.',
      responsibilities: [
       'Designed and developed a user-friendly interface for scholarship applications',
        'Implemented features for tracking student progress and generating reports',
        'Collaborated with a co-developer to ensure system security and performance',
        'Conducted testing and debugging to identify and fix issues',
        'Provided technical support to users and resolved their queries'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Perecho-Abualas Accounting Office',
      location: 'Remote',
      type: 'School Project',
      duration: '2023-2024',
      description: 'Developed a task management system for the accounting  firm. Designed and developed a user-friendly interface for tracking tasks, deadlines, and project progress. Implemented features such as task assignment, progress tracking, and notifications.',
      responsibilities: [
      'Designed and developed a user-friendly interface for task management',
      'Implemented features such as task assignment, progress tracking, and notifications',
      'Collaborated with the team to ensure the system met the client requirements',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  const toggleExperience = (id) => {
    if (activeExperience === id) {
      setActiveExperience(null);
    } else {
      setActiveExperience(id);
    }
  };

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1><i className="fas fa-briefcase"></i> Experience</h1>
        <p>My professional journey in the tech industry</p>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`experience-item ${activeExperience === exp.id ? 'active' : ''}`}
            onClick={() => toggleExperience(exp.id)}
          >
            <div className="experience-marker">
              <div className="experience-icon">
                {exp.id === 1 && <i className="fas fa-laptop-code"></i>}
                {exp.id === 2 && <i className="fas fa-university"></i>}
                {exp.id === 3 && <i className="fas fa-code"></i>}
              </div>
            </div>
            
            <div className="experience-content">
              <div className="experience-header-content">
                <div className="experience-title-container">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <div className="experience-company">
                  <i className="fas fa-building"></i> {exp.company}
                </div>
                <div className="experience-details">
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                  </span>
                  <span className="experience-duration">
                    <i className="fas fa-calendar-alt"></i> {exp.duration}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <button className="experience-toggle">
                  {activeExperience === exp.id ? (
                    <><i className="fas fa-chevron-up"></i> Show Less</>
                  ) : (
                    <><i className="fas fa-chevron-down"></i> Show More</>
                  )}
                </button>
              </div>
              
              {activeExperience === exp.id && (
                <div className="experience-details-expanded">
                  <div className="experience-responsibilities">
                    <h4><i className="fas fa-tasks"></i> Key Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="experience-technologies">
                    <h4><i className="fas fa-tools"></i> Technologies Used</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

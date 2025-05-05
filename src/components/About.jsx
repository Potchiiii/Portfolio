import { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = [
    { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
    { name: 'React', level: 85, icon: 'fab fa-react' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    { name: 'Responsive Design', level: 90, icon: 'fas fa-mobile-alt' },
    { name: 'RESTful APIs', level: 80, icon: 'fas fa-server' },
    { name: 'Database Management', level: 85, icon: 'fas fa-database' },
    { name: 'PHP', level: 90, icon: 'fab fa-php' },
    { name: 'Python', level: 30, icon: 'fab fa-python' },
    { name: 'C++', level: 30, icon: 'fab fa-cuttlefish' },
  ];
  
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Western Mindanao State University',
      year: '2021 - 2025',
      description: 'Focused on software development, algorithms, and data structures.'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Code Academy',
      year: '2022',
      description: 'Intensive 12-week program covering full-stack web development.'
    },
    {
      degree: 'Senior High School',
      institution: 'Mindanao State University - Tawi-Tawi College of Technology and Oceanography',
      year: '2019 - 2021',
      description: 'STEM strand.'
    },
    {
      degree: 'Junior High School',
      institution: 'Bongao Advent Academy',
      year: '2015 - 2019',
      description: 'General Education.'
    },
    {
      degree: 'Elementary',
      institution: 'Bongao Adventist Elementary School',
      year: '2009 - 2015',
      description: 'General Education.'
    }
  ];
  
  const interests = [
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
    { name: 'web development', icon: 'fas fa-laptop-code' },
    { name: 'Enterprise Software', icon: 'fas fa-building' },
    { name: 'software development', icon: 'fas fa-cogs' },
    { name: 'System Design', icon: 'fas fa-network-wired' },
    { name: 'Softwware Engineering', icon: 'fas fa-tools' },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1><i className="fas fa-user-circle"></i> About Me</h1>
        <div className="about-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src="/images/brown jacket.jfif" alt="Profile" />
        </div>
        
        <div className="about-bio">
          <h2>Hello, I'm a Software Developer</h2>
          <p>
            I'm a passionate software developer with a strong focus on web technologies.
            I have experience building responsive and user-friendly applications using modern
            frameworks and libraries.
          </p>
          <p>
            My journey in software development began during my university years, where I discovered
            my passion for creating digital solutions. Since then, I've been continuously learning
            and improving my skills to stay up-to-date with the latest technologies.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies or enjoying outdoor activities.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <i className="fas fa-code"></i>
              <div className="stat-info">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat">
              <i className="fas fa-clock"></i>
              <div className="stat-info">
                <h3>2+</h3> 
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat">
              <i className="fas fa-users"></i>
              <div className="stat-info">
                <h3>5+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-tabs">
        <button 
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} 
          onClick={() => setActiveTab('skills')}
        >
          <i className="fas fa-laptop-code"></i> Skills
        </button>
        <button 
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} 
          onClick={() => setActiveTab('education')}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </button>
        <button 
          className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`} 
          onClick={() => setActiveTab('interests')}
        >
          <i className="fas fa-heart"></i> Interests
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'skills' && (
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="skill-progress">
                    <div className="skill-progress-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className="education-container">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-year">
                  <i className="fas fa-calendar-alt"></i> {edu.year}
                </div>
                <div className="education-info">
                  <h3>{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'interests' && (
          <div className="interests-container">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <i className={interest.icon}></i>
                <p>{interest.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;

import { useState, useEffect } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'SMARTGATE System (Prototype)',
      description: 'A smart gate system for schools that logs student attendance using QR code technology',
      longDescription: 'The SMARTGATE System is a web application designed to enhance school security and attendance tracking. It allows students to check in and out of school using QR codes, which are scanned at the gate. The system logs attendance data in real-time and notifies parents of the student activity and provides an admin dashboard for monitoring. Built with HTML, Javascrip, and Tailwind CSS for the frontend and PHP for the backend, it uses MySQL for data storage and email verification for secure authentication.',
      image: 'images/Smartgate.png',
      github: 'https://github.com/Potchiiii/SMARTGATE',
      category: 'full-stack',
      technologies: ['HTML', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
      features: [
        'QR code scanning for attendance',
        'Real-time attendance logging',
        'Parent SMS notifications',
        'Secure authentication with email verification',
        'Admin dashboard'
      ]
    },
    {
      id: 2,
      title: 'Cafe Point of Sale System',
      description: 'A point of sale system for cafes that allows order management, payment processing, and inventory tracking. Built with PHP and uses MYSQL for data storage.',
      longDescription: 'The Cafe Point of Sale System is a web application designed to streamline cafe operations. It allows staff to manage orders, process payments, and track inventory. Built with PHP and uses MYSQL for data storage, it provides a user-friendly interface for staff to efficiently manage cafe operations.',
      image: 'images/POS.png',
      github: 'https://github.com/Potchiiii/CafePos',
      category: 'full-stack',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS3', 'Javascript', 'Bootstrap'],
      features: [
        'Order management',
        'Payment processing',
        'Inventory tracking',
        'User-friendly interface',
        'Data storage with MYSQL'
      ]
    },
    {
      id: 3,
      title: 'To-do List App',
      description: 'A simple to-do list application that allows users to add, edit, and delete tasks. Built with React and uses local storage for data persistence.',
      longDescription: 'This To-Do List application helps users manage their tasks efficiently. Users can create tasks with titles, descriptions, due dates, and priority levels. Tasks can be categorized and filtered for better organization. The application uses React for the frontend and local storage for data persistence, allowing users to access their tasks even after closing the browser.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      github: 'https://github.com/Potchiiii/todolist',
      category: 'full-stack',
      technologies: ['React', 'CSS3', 'JavaScript', 'Local Storage'],
      features: [
       'Add, edit, and delete tasks',
        'Local storage for data persistence',
        'Responsive design'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and CSS. Features include a clean design, project showcase, and contact form.',
      longDescription: 'This portfolio website showcases my skills, projects, and experience as a web developer. It features a clean, modern design with smooth animations and transitions. The website is fully responsive and works well on all devices. Built with React and CSS, it includes sections for about me, projects, experience, blog, and contact information.',
      image: 'images/PORTFOLIO.png',
      github: 'https://github.com/Potchiiii/Portfolio',
      category: 'full-stack',
      technologies: ['React', 'CSS3', 'JavaScript'],
      features: [
        'Responsive design',
        'Project showcase',
        'Interactive UI elements',
        'Contact form',
        'Blog section',
        'Experience timeline'
      ]
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProjects(projects);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1><i className="fas fa-project-diagram"></i> Projects</h1>
        <p>Here are some of the projects I've worked on:</p>
      </div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-container">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openProject(project)}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <i className="fas fa-eye"></i>
                    <p>View Details</p>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={closeProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject} aria-label="Close project">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="project-modal-header">
              <h2>{selectedProject.title}</h2>
            </div>
            
            <div className="project-modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className="project-modal-body">
              <div className="project-modal-description">
                <h3><i className="fas fa-info-circle"></i> Project Overview</h3>
                <p>{selectedProject.longDescription}</p>
              </div>
              
              <div className="project-modal-features">
                <h3><i className="fas fa-star"></i> Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-modal-technologies">
                <h3><i className="fas fa-tools"></i> Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="project-modal-footer">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn primary-btn"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

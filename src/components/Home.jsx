import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a software developer";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Daud Nur Hassan</h1>
          <div className="typing-container">
            <p className="typing-text">
              {typedText}
              <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            </p>
          </div>
          <p>
            I specialize in creating responsive and user-friendly web applications
            with modern technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn">
              <i className="fas fa-project-diagram"></i> View Projects
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              <i className="fas fa-envelope"></i> Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img src="images/CEO.jpg" alt="Coding" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

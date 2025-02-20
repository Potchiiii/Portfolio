import './hero.css';
import Photo from './Profile.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello, I am <span className="highlight">Daud Hassan</span>
          </h1>
          <p>Web Developer</p>
        </div>
        <div className="hero-photo">
          <img src={Photo} alt="Portrait of Daud Hassan" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

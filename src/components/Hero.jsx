import './hero.css'
import Photo from './Profile.jpg'

function Hero() {

    return (
        <div className="container">
            <div className="name">
                <h1>Hello, I am <span>Daud Hassan</span></h1>
                <span>Web Developer</span>
            </div>
            <div className="photo">
                <img src={Photo} alt="Daud's photo" height={500} />
            </div>
        </div>
    )

}

export default Hero
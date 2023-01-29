import React from "react";
import backgroundWave from '../imgs/background-wave .png'
import github1 from '../imgs/github.png';
import github2 from '../imgs/GitHub-Mark-32px.png';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.png';
import twitter from '../imgs/twitter.png';
import linkedIn from '../imgs/linkedIn.png';
import './contact.css';

const Contact = () => {
    return(
        <div>
            <div className='mainContact'>
                <div className="socials">
                    <a href="https://github.com/gdp7zt/Shopping-Cart" target="_blank">
                        <img src={github1} alt="Github Logo" className='socialImage'></img>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-pleimann-51494a209/" target="_blank">
                        <img src={linkedIn} alt="Facebook Logo" className='socialImage'></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <img src={facebook} alt="Facebook Logo" className='socialImage'></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <img src={instagram} alt="Instagram Logo" className='socialImage'></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <img src={twitter} alt="Twitter Logo" className='socialImage'></img>
                    </a>
                </div>
                <div className='address'>Fake Address, Los Angeles, CA</div>     
            </div>
            <footer className='footer'>
                <img src={backgroundWave}></img>
                <h4>Copyright 2022 gdp7zt
                    <a href="https://github.com/gdp7zt/Shopping-Cart" target="_blank">
                        <img src={github2} alt="Github Logo" className='gitHubImage'></img>
                    </a>
                </h4>
            </footer>
        </div>
    )
}

export default Contact;
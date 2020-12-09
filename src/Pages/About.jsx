import React from 'react'
import Fade from 'react-reveal/Fade';
import aboutimg from './svg/about.jpg'
import Zoom from 'react-reveal/Zoom';
import './static/About.scss'
export default function about(){

    return(
        <>
        <Fade duration={5000}>
        
        <section className='about-content-box'>
<div className='about-content-navbar'>
    <span className='about-content-navbar-textone'><h3>About</h3></span>
</div>
<Zoom right opposite cascade duration={1000}>
   
          <div className='about-content-body'>
            <h2>Hello, my name is HariCharan.</h2>
            <img src={aboutimg} alt=''/>
           
<h4>I am a full-stack developer and UI/UX javascript specialist.
Check out my articles, React and React Native UI components at the code laboratory.
Feel free to take a look at my latest projects on the web portfolio page.</h4>
          </div>
      
         
      
        </Zoom>
        </section>
        </Fade>
        </>
    );
}
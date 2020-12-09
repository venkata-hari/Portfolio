import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './static/Skills.scss'
export default function opensource(){
const Experience=()=>{
let x=document.getElementsByClassName('opensource-content-Experience-box')
let y=document.getElementsByClassName('opensource-content-skill-box')
let z=document.getElementsByClassName('opensource-content-navbar-texttwo')
let j=document.getElementsByClassName('opensource-content-navbar-textone')
x[0].style.display='block'
y[0].style.display='none'
z[0].style.borderBottom='2px solid rgb(18, 162, 219)'
j[0].style.border='none'
}
const skill=()=>{
    let x=document.getElementsByClassName('opensource-content-Experience-box')
    let y=document.getElementsByClassName('opensource-content-skill-box')
    let z=document.getElementsByClassName('opensource-content-navbar-texttwo')
let j=document.getElementsByClassName('opensource-content-navbar-textone')
    x[0].style.display='none'
    y[0].style.display='flex'
    y[0].style.flexWrap='wrap'
    j[0].style.borderBottom='2px solid rgb(18, 162, 219)'
z[0].style.border='none'
    }

    return(
        <>
        <Fade duration={5000}>
        
        <section className='opensource-content-box'>
<div className='opensource-content-navbar'>
   
    <span className='opensource-content-navbar-textone' onClick={skill}><h3>Skills</h3></span>
    <span className='opensource-content-navbar-texttwo' onClick={Experience}><h3>Experience</h3></span>
</div><Zoom left>
<div className='opensource-content-skill-box'>
<div><p>HTML5/CSS3/</p><div className='tube'></div></div>
<div><p>Node.js/Express.js</p><div className='tube4'></div></div>
<div><p>HTML5/SCSS</p><div className='tube1'></div></div>
<div><p>ReactJs</p><div className='tube5'></div></div>
<div><p>Javascript</p><div className='tube3'></div></div>
<div><p>ReactNative</p><div className='tube6'></div></div>
<div><p>mongodb/SQL</p><div className='tube7'></div></div>
<div><p>Firebase/Github</p><div className='tube8'></div></div>
<div><p>PythonDjango</p><div className='tube9'></div></div>
</div>
</Zoom>
<Zoom left>
<div className='opensource-content-Experience-box' style={{display:'none'}}>
    <h3>Work Experience</h3>
   <h4>Web Developer</h4>
 <h4>&#9654; Veiview Solutions Hyderabad(jan 2019–Mar 2019)</h4>
 <h4>Process Associate</h4>
 <h4>&#9654; Genpact Hyderabad(Sep2018–dec2018)</h4>
 <h3>Key Qualifications & Responsibilities</h3>
 <h4>Developed full-stack web applications which processed, analyzed, and rendered data visually.
 Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.
 Managed time-sensitive updates, including content changes and database upgrades.
 Planned, wrote, and debugged web applications and software with complete accuracy.</h4>
</div>
</Zoom>
        </section>
        </Fade>
        </>
    );
}
import React from 'react'
import windows10 from './svg/windows10.PNG'
import ecommerce from './svg/ecommerce.PNG'
import fullstack1 from './svg/fullstack1.png'
import greendiwali from './svg/greendiwali.PNG'
import magiclink from './svg/magiclink.PNG'
import myport from './svg/myport.PNG'
import res from './svg/res.png'
import blogger from './svg/blogger.svg'
import rotatefan from './svg/rotatefan.PNG'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './static/Projects.scss'
export default function projects(){
const service=()=>{
let x=document.getElementsByClassName('projects-content-box-body2')
let y=document.getElementsByClassName('projects-content-box-body')
let z=document.getElementsByClassName('projects-content-navbar-texttwo')
let j=document.getElementsByClassName('projects-content-navbar-textone')
x[0].style.display='flex'
z[0].style.borderBottom='2px solid rgb(18, 162, 219)'
j[0].style.border='none'
y[0].style.display='none'
}
const project=()=>{
    let x=document.getElementsByClassName('projects-content-box-body2')
    let y=document.getElementsByClassName('projects-content-box-body')
    let z=document.getElementsByClassName('projects-content-navbar-texttwo')
    let j=document.getElementsByClassName('projects-content-navbar-textone')
    x[0].style.display='none'
    z[0].style.border='none'
    j[0].style.borderBottom='2px solid rgb(18, 162, 219)'
    y[0].style.display='flex'
    }
    return(
        <>
        <Fade duration={5000}>
        
        <section className='projects-content-box'>
<div className='projects-content-navbar'>
    <span className='projects-content-navbar-textone' onClick={project} ><h3>Projects</h3></span>
    <span className='projects-content-navbar-texttwo' onClick={service}><h3>Services</h3></span>
</div>
<Zoom right>
<div className='projects-content-box-body'>
<div><a href='https://github.com/iharicharan/Portfolio' targer='github'><h3>MyPortfolio</h3></a><img src={myport} alt=''/>
<a href='https://haricharanportfolio.web.app' targer='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<div><a href='https://github.com/iharicharan/GreenDiwali' target='github'><h3>GreenDiwali</h3></a><img src={greendiwali} alt=''/>
<a href='https://diwali-wishes1.web.app/' targer='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<div><a href='https://github.com/iharicharan/windows10clone' target='github'><h3>windows10clone</h3></a><img src={windows10} alt=''/>
<a href='https://windows10-clone-a71eb.web.app/' targer='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<div><a href='https://github.com/iharicharan/Ecommerce' target='github'><h3>Ecommerce</h3></a><img src={ecommerce} alt=''/>
<a href='https://iharicharan.web.app/' target='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<div><a href='https://github.com/iharicharan/MagicLink' targer='github'><h3>MagicLink</h3></a><img src={magiclink} alt=''/>
<a href='https://dussehrawishes1.web.app/' targer='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<div><a href='https://github.com/iharicharan/React-Rotate-Fan' targer='github'><h3>React-Rotate-Fan</h3></a><img src={rotatefan} alt=''/>
<a href='https://table-fan1.web.app/' targer='github'><p><i className="fa fa-eye" aria-hidden="true"></i><span>Live Preview</span></p></a></div>
<button><a href='https://github.com/iharicharan' targer='github'>More Projects</a></button>
</div>
</Zoom>
<Zoom right>
<div className='projects-content-box-body2' style={{display:'none'}}>
<div>
<i className="fa fa-desktop" aria-hidden="true"></i>
<h4>WEB DEVELOPMENT</h4>
<h5>Whether you’re a large corporate or 
    small business, I can help you to 
    create a beautiful, functional website to 
    grow your business and build your brand.</h5>
</div>
<div>
    <img src={fullstack1} alt=''/>
    <h4>FULL STACK DEVELOPMENT</h4>
<h5>No matter complexity of the solution you need,
     I develop the project that aligns 
     with your objectives & expectations. 
     Working with trending technologies in 
     the industry.</h5>
</div>
<div>
    <img src={res} alt=''/>
    <h4>RESPONSIVE DESIGN</h4>
<h5>We design professional, polished 
    websites that convey size, competence and 
    expertise. Websites are platform independent.
    </h5>
</div>
<div>
<i className="fa fa-mobile-phone"></i>
    <h4>MOBILE APP DEVELOPMENT</h4>
    <h5>Moving your Business to the 
        mobile applications is one of 
        the most effective ways to drive growth, 
        productivity, and future-proof your business.</h5>
</div>
<div>
    <img src={blogger} className='blogger' alt=''/>

    <h4>BLOGGER</h4>
    <h5>I put my knowledge and 
        experiences into action. Create content, 
        participate in meaningful conversations, 
        and learn new perspectives.</h5>
</div>
<div>
<i className="fa fa-bar-chart" aria-hidden="true"></i>
    <h4>FREELANCING</h4>
    <h5>On demand service is the new trend of 
        self employment. I started as learner but 
        now worked as passionate 
        web developer and create web solutions</h5>
</div>
</div>
</Zoom>
        </section>
        </Fade>
        </>
    );
}
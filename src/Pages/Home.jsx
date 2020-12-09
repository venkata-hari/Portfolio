import React from 'react'
import './static/Home.scss'
import reactnative from './svg/reactnative.svg'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import fullstack from './svg/fullstack.svg'
import{FacebookShareButton,EmailShareButton,WhatsappShareButton,TwitterShareButton,EmailIcon,FacebookIcon,WhatsappIcon,TwitterIcon} from 'react-share'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Flip from 'react-reveal/Flip';
import cloud from './svg/cloud.svg'
export default function Home(){
 const homepageone=()=>{
    let x=document.getElementsByClassName('home-pageone')[0]
    x.style.display='block'
    let y=document.getElementsByClassName('home-pagetwo')[0]
    y.style.display='none'
    let z=document.getElementById('home-textone')
    z.style.borderBottom='2px solid rgb(38,156,202)'
    let j=document.getElementById('home-texttwo')
    j.style.borderBottom='none'
  }
  const homepagetwo=()=>{
    let x=document.getElementsByClassName('home-pagetwo')[0]
    x.style.display='block'
    let y=document.getElementsByClassName('home-pageone')[0]
    y.style.display='none'
    let z=document.getElementById('home-texttwo')
    z.style.borderBottom='2px solid rgb(38,156,202)'
    let j=document.getElementById('home-textone')
    j.style.borderBottom='none'
  }

function homefollow(){
  let x=document.getElementsByClassName('followbuttons')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
function homefollow1(){
  let x=document.getElementsByClassName('followbuttons1')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
function homefollow2(){
  let x=document.getElementsByClassName('followbuttons2')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
function homeshare(){
  let x=document.getElementsByClassName('sharebuttons')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
function homeshare1(){
  let x=document.getElementsByClassName('sharebuttons1')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
function homeshare2(){
  let x=document.getElementsByClassName('sharebuttons2')[0]
  if(x.style.display==='none'){
    x.style.display='flex'
  }
  else{
    x.style.display='none'
  }
}
    return(
        <>
      
        <Fade duration={5000}>
<section className='border-home'>
<section className='border-home-home'>
    <div id='home-textone' onClick={homepageone}><h3>What I Do?</h3></div>
    <div id='home-texttwo' onClick={homepagetwo}><h3>Education</h3></div>
</section>
<div className='home-pageone'>
<section id='home-upperpage'>
    <h2>Full Stack Development</h2>
    <article>
       <Fade right opposite cascade>
        <div>
        <h4>&#9654;  Database Technology (MongoDB)</h4>
        <h4>&#9654;  Web Development Stacks (MERN)</h4>
        <h4>&#9654;  HTML5,CSS3,SCSS,SASS,Bootstrap</h4>
        <h4>&#9654;  JavaScript , JS Frameworks (React-Redux,ReactNative)</h4>
        </div>
        </Fade>
        <Flip left cascade>
        <div><img src={fullstack} alt='fullstack' /></div>
        </Flip>
    </article>
 </section> 
<section id='home-buttons'>
    <button onClick={homefollow}>Follow</button>
    <button onClick={homeshare}>Share</button>
</section>
   <section className='followsharebuttons'>
    <Zoom left>
    <article className='followbuttons' style={{display:'none'}}>
    <a href="https://www.facebook.com/iharicharan">
        <FontAwesomeIcon icon={faFacebook} size="2x"  className="youtube-social"/>
      </a>
      <a href="https://github.com/iharicharan">
        <FontAwesomeIcon icon={faGithub} size="2x"  className="youtube-social"/>
      </a>
      <a href="https://www.linkedin.com/in/iharicharan">
        <FontAwesomeIcon icon={faLinkedin} size="2x"   className="youtube-social"/>
      </a>
      <a href="https://www.twitter.com/iharicharan">
        <FontAwesomeIcon icon={faTwitter} size="2x"  className="youtube-social"/>
      </a>
    </article>
    </Zoom>
   
    <Zoom right>
    <article  className='sharebuttons' style={{display:'none'}}> 
<FacebookShareButton url="https://iharicharan.github.io/Portfolio" quote="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist." className='icon'>
     <FacebookIcon size={40} square='true'/>
</FacebookShareButton>
<WhatsappShareButton url="*Hello,My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.!*.👉https://iharicharan.github.io/Portfolio" className='icon' >
<WhatsappIcon size={40} square='true'/>
</WhatsappShareButton>
<TwitterShareButton url="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<TwitterIcon size={40} square='true'/>
</TwitterShareButton>
<EmailShareButton url="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<EmailIcon size={40} square='true'/>
</EmailShareButton>
</article>
</Zoom>
</section>
<section id='home-upperpage'>
    <h2>Mobile App Development</h2>
    <article>
    <Flip left cascade>
        <div>
            <img src={reactnative} alt='mobiledevelopment'/>
        </div>
        </Flip>
        <Fade left opposite cascade>
    <div className='mobile-app-text'>
        <h4>&#9654; Cloud-based Mobile Apps</h4>
        <h4>&#9654;  Quality user interface design</h4>
        <h4>&#9654;  Cyber Security,Backend Computing</h4>
        <h4>&#9654;  Cross-platform app development , JS MobileFrameworks (ReactNative,Ionic)</h4>
        </div>
        </Fade>
   </article>
   </section>
  <section id='home-buttons'>
    <button onClick={homefollow1}>Follow</button>
    <button onClick={homeshare1}>Share</button>
</section>
    
 
<section className='followsharebuttons'>
    <Zoom left>
    <article  className='followbuttons1' style={{display:'none'}}>
    <a href="https://www.facebook.com/iharicharan">
        <FontAwesomeIcon icon={faFacebook} size="2x"  className="youtube social" />
      </a>
      <a href="https://github.com/iharicharan">
        <FontAwesomeIcon icon={faGithub} size="2x"  className="youtube social" />
      </a>
      <a href="https://www.linkedin.com/in/iharicharan">
        <FontAwesomeIcon icon={faLinkedin} size="2x"  className="youtube social"/>
      </a>
      <a href="https://www.twitter.com/iharicharan">
        <FontAwesomeIcon icon={faTwitter} size="2x"  className="youtube social"/>
      </a>
    </article>
    </Zoom>
  
    <Zoom right>
    <article  className='sharebuttons1' style={{display:'none'}}> 
    <FacebookShareButton url="https://iharicharan.github.io/Portfolio" quote="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist." className='icon'>
     <FacebookIcon size={40} square='true'/>
</FacebookShareButton>
<WhatsappShareButton url="*Hello,My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.!*.👉 https://iharicharan.github.io/Portfolio" className='icon' >
<WhatsappIcon size={40} square='true'/>
</WhatsappShareButton>
<TwitterShareButton url="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<TwitterIcon size={40} square='true'/>
</TwitterShareButton>
<EmailShareButton url="Hello, My name is HariCharan.I'm a Webweb developer and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<EmailIcon size={40} square='true'/>
</EmailShareButton>
</article>
</Zoom>
</section>
 
<section id='home-upperpage'>
    <h2>Cloud Infra-Architecture</h2>
    <article>
    <Fade right opposite cascade>
    <div className='mobile-app-text'>
        <h4>&#9654;  Experience working on multiple cloud platforms</h4>
        <h4>&#9654;  Hosting and maintaining websites on virtual machine instances along with integration of databases</h4>
     </div>
     </Fade>
     <Flip right cascade>
        <div><img src={cloud} alt='cloud'/> </div>
        </Flip>
    </article>
   </section> 
<section id='home-buttons'>
    <button onClick={homefollow2}>Follow</button>
    <button onClick={homeshare2}>Share</button>
</section>
<section className='followsharebuttons'>
    <Zoom left>
    <article className='followbuttons2' style={{display:'none'}}>
    <a href="https://www.facebook.com/iharicharan">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="youtube social" />
      </a>
      <a href="https://github.com/iharicharan">
        <FontAwesomeIcon icon={faGithub} size="2x"  className="youtube social" />
      </a>
      <a href="https://www.linkedin.com/in/iharicharan">
        <FontAwesomeIcon icon={faLinkedin} size="2x"  className="youtube social" />
      </a>
      <a href="https://www.twitter.com/iharicharan">
        <FontAwesomeIcon icon={faTwitter} size="2x"  className="youtube social" />
      </a>
    </article>
    </Zoom>
   
    <Zoom right>
    <article className='sharebuttons2' style={{display:'none'}}> 
  <FacebookShareButton url="https://iharicharan.github.io/Portfolio" quote="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist." className='icon'>
     <FacebookIcon size={40} square='true'/>
</FacebookShareButton>
<WhatsappShareButton url="*Hello,My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.!*.👉 https://iharicharan.github.io/Portfolio" className='icon' >
<WhatsappIcon size={40} square='true'/>
</WhatsappShareButton>
<TwitterShareButton url="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<TwitterIcon size={40} square='true'/>
</TwitterShareButton>
<EmailShareButton url="Hello, My name is HariCharan.I'm a Webdeveloper and UI/UX specialist.👉 https://iharicharan.github.io/Portfolio"  className='icon'>
<EmailIcon size={40} square='true'/>
</EmailShareButton>
</article>
</Zoom>
</section>
</div>
<div className='home-pagetwo'>
<section>
<Zoom right opposite cascade duration={1000}>
<div style={{marginLeft:'1%'}}><h4>MCA (Master of Computer Applications) at OsmaniaUniversity</h4></div>
<div>
  <a href='https://drive.google.com/file/d/1JXyFkOOGBUfFTHdIdCpkBSinOnoIGVvZ/view?usp=sharing' target='googledrive'>
  <button><i className="fa fa-download"/> Download</button></a>
  </div>
</Zoom>
</section>
</div>
</section>

</Fade>
      
        </>
    );
}
import React from 'react'
import Fade from 'react-reveal/Fade';
import './static/maincontact.scss'
import Work from './work'
import Contact1 from './contact1'
import Zoom from 'react-reveal/Zoom';

 export default function contact(){
  function grid(){
document.getElementsByClassName('work')[0].style.display='flex'
document.getElementsByClassName('cont-box1')[0].style.borderBottom ='2px solid  rgb(1, 177, 247)';
document.getElementsByClassName('cont-box')[0].style.border='none'
document.getElementsByClassName('contact')[0].style.display='none'
  }
  function grid1(){
    document.getElementsByClassName('cont-box')[0].style.borderBottom ='2px solid  rgb(1, 177, 247)';
document.getElementsByClassName('cont-box1')[0].style.border='none'
   document.getElementsByClassName('work')[0].style.display='none'
   document.getElementsByClassName('contact')[0].style.display='block'
     }
    return(
   <>
    <Fade duration={5000}>
       <div className='border-box1'>
       
       <section className='section'> 
        
      <div className='cont-box' onClick={grid1}><h3>Contact Me</h3>
      </div>
       <div className='cont-box1' onClick={grid} ><h3>Interested in working together?</h3>
       </div>
       </section>
       <section  className='section-box'>
       <Zoom right>
       <div className='contact'><Contact1/></div>
       </Zoom>
       <Zoom left>
       <div className='work'><Work/></div>
       </Zoom>
       </section>
       </div>
       </Fade>
       </>
    );
}

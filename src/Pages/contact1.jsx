import React from 'react'
import './static/contact.scss'
import blog from './svg/blog.svg'
import loc from './svg/location.svg'
import Fade from 'react-reveal/Fade';
export default function contact1(){
    return(
      <>
     
     
       <section className='flex-left-box'>
       <h2>Contact Me</h2>
         <h4>I am available on almost every social media. You can message me, 
I will reply within 24 hours.</h4>
<figure>
   <a href='https://facebook.com/iharicharan' alt='facebook'><i className='fa fa-facebook'/></a>
   <a href='https://instagram.com/technologyjokes' alt='instagram'>  <i className='fa fa-instagram'/></a>
   <a href='https://linkedin.com/in/iharicharan' alt='linkedin'><i className='fa fa-linkedin'/></a>
   <a href='https://twitter.com/iharicharan' alt='twitter'> <i className='fa fa-twitter'/></a>
</figure>
</section>
<section className='image-flex-box'>
  <Fade up>
<div>
  <img src={blog} alt='website'/>
</div>
</Fade>
<Fade up>
<div>
 
<h2>Blogs</h2>
<h4>For individual fundamental empowerment, 
  I like to write powerful Technology Articles that create impact on each of the reader.</h4>

<a href='https://www.xprogrammer.me' alt='technology'><button>Visit My Blog</button></a>
</div>
</Fade>
</section>
<section className='image-flex-box1'>

<Fade right>
<div className='div'>
<h2>Address</h2>
<h4>Saroornagar,Ranga Reddy district,Hyderabad,Telangana 500035</h4>
<h3>Phone Number</h3>
<h4>+91 8247329502</h4>
<h3>Email:</h3>
<h4>xprogrammer.me@gmail.com</h4>

<a href='https://www.google.com/maps/place/Saroornagar,+Telangana/@17.355702,78.5084848,14z/data=!3m1!4b1!4m5!3m4!1s0x3bcb988dfcf065bf:0x389e109c28c4e876!8m2!3d17.3529457!4d78.5356595' alt='google map'><button>Visit on Google Maps</button></a>
</div>
</Fade>
<Fade left>
<div>
  <img src={loc} alt='website'/>
</div>
</Fade>
</section>

      </>
    );

}
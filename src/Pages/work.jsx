import React from 'react'
import './static/contact.scss'
import wrk from './svg/work.svg'

export default function work(){
  
    return(
        <>
        <section className='section1'>
         <section className='flex-left-box1'>
         <h2>Interested in working together?</h2>
    
             <h4> 
    Fill out the form below with some 
    info about your project and 
    i will get back to you as soon as i can.
    Please allow a couple days for me to 
    respond</h4>
    <form action='mailto:xprogrammer.me@gmail.com' method='POST' enctype='text/plain'>
    <section className='form-box'>
       <div><label>Name</label><br/><input type='text' name='name'/>
       </div> 
       <div><label>Email</label><br/><input type='email' name="mail"/>
      
       </div>
       
       <div><label>Website</label><br/><input type='text' name='name'/>
       </div> 
       <div><label>Budget</label><br/><input type='text' name='name'/>
       </div>
    </section>
       <div><label>Tell me a little about your project:</label><br/>
       <textarea placeholder='Write something..' name='comment' style={{height:'30vh',width:'85%'}}/>
       </div> 
       <div><input type='submit' value='Submit'/></div>
    </form>
</section>
  <section className='wrk'>
    <div><img src={wrk} alt='wrk'/></div>
  </section>
  </section>
    
        </>
    );
}
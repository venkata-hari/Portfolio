import React from 'react'
import Fade from 'react-reveal/Fade';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import './static/App.scss'
import Typewriter from 'typewriter-effect';
import contact from './Pages/contact'
import {Switch,Route,Link,Redirect} from 'react-router-dom'
export default function App(){
    const bar=()=>{
        let x= document.getElementsByClassName('flex-fixed-box')[0]
        x.style.display='block'
       let y=document.getElementsByClassName('fa fa-bars')[0]
       y.style.display='none'
        let z=document.getElementsByClassName('fa fa-close')[0]
        z.style.display='block'
        }
        const close1=()=>{
            let x= document.getElementsByClassName('flex-fixed-box')[0]
            x.style.display='none'
        
            let y=document.getElementsByClassName('fa fa-bars')[0]
            y.style.display='block'
             let z=document.getElementsByClassName('fa fa-close')[0]
             z.style.display='none'
             } 
          
             function homel(){
                let x= document.getElementsByClassName('flex-fixed-box')[0]
                x.style.display='none'
                let y=document.getElementsByClassName('fa fa-close')[0]
                y.style.display='none'
                let z=document.getElementsByClassName('fa fa-bars')[0]
                z.style.display='block'
            }   
          
            function about(){
                let x= document.getElementsByClassName('flex-fixed-box')[0]
                x.style.display='none'
                let y=document.getElementsByClassName('fa fa-close')[0]
                y.style.display='none'
                let z=document.getElementsByClassName('fa fa-bars')[0]
                z.style.display='block'
            } 
            function project(){
                let x= document.getElementsByClassName('flex-fixed-box')[0]
                x.style.display='none'
                let y=document.getElementsByClassName('fa fa-close')[0]
                y.style.display='none'
                let z=document.getElementsByClassName('fa fa-bars')[0]
                z.style.display='block'
            } 
            function skills(){
                let x= document.getElementsByClassName('flex-fixed-box')[0]
                x.style.display='none'
                let y=document.getElementsByClassName('fa fa-close')[0]
                y.style.display='none'
                let z=document.getElementsByClassName('fa fa-bars')[0]
                z.style.display='block'
            } 
            function contactme(){
                let x= document.getElementsByClassName('flex-fixed-box')[0]
                x.style.display='none'
                let y=document.getElementsByClassName('fa fa-close')[0]
                y.style.display='none'
                let z=document.getElementsByClassName('fa fa-bars')[0]
                z.style.display='block'
                
            }  
            function night(){
                let x= document.getElementsByClassName('container-button')[0]
           x.style.background='black'
           let y= document.getElementsByClassName('container')[0]
         y.style.background='black' 
           document.body.style.background= "black";
           document.body.style.color= "white";
            
              }
              function day(){
               document.body.style.color = "black";
                let x=document.getElementsByClassName('container-button')[0]
               x.style.background='rgb(226, 193, 6)'
               let y= document.getElementsByClassName('container-svg')[0]
               y.style.background='white'
               let z= document.getElementsByClassName('container')[0]
               z.style.background='white'  
              document.body.style.background = "white";
              }              
    return(
        <>
       
    
       <section>
           
        <Switch>
            <Route exact path='/contact'  component={contact}/>
            <Route exact path='/'  component={Home}/>
           
            <Route exact path='/About' component={About}/>
            <Route exact path='/Projects' component={Projects}/>
            <Route exact path='/Skills' component={Skills}/>
            <Redirect to='/' />
        </Switch>
        <section className='main-text1'>
    <div className='main-text2'>
<span className='span-text'>VHariCharan</span>
  <span className='span-icon'><i className='fa fa-bars' onClick={bar}/>
    <i className='fa fa-close' onClick={close1}/></span>

    </div>
   
    <div className='main-text1-section-two'> 
    <span className='container'> 
    <button className="container-svg" onClick={night}></button>
    <button className='container-button' onClick={day}></button> 
    </span>
<span className='main-text1-typewriter'><Typewriter
  options={{
    strings: ['Full stack developer', 'Android/iOS Developer','Blogger'],
    autoStart: true,
    loop: true,
  }}
/></span>

</div>
    </section>
  <Fade top>
 <section className='flex-fixed-box'>     
<section className='txt'>
<Link to='/' style={{textDecoration:'none'}}><div onClick={homel}><i class="fa fa-home" aria-hidden="true"/><span>Home</span></div></Link>
<Link to ='/Skills'  style={{textDecoration:'none'}}><div onClick={skills}><i class="fa fa-desktop"/><span>Skills</span></div></Link>
<Link to ='/About'  style={{textDecoration:'none'}}><div onClick={about}><i class="fa fa-car"/><span>About</span></div></Link>
<Link to ='/Projects'  style={{textDecoration:'none'}}><div onClick={project}><i class="fa fa-file"/><span>Projects</span></div></Link>
</section>
<Link to='/contact'> <div onClick={contactme}> <button>Contact Me</button></div></Link>
</section>
</Fade>
</section>

        </>
    );
}
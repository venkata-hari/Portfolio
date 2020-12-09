import React from 'react'
import logo from './svg/home.svg'

import logo2 from './svg/exe.svg'
import logo3 from './svg/proj.svg'
import logo4 from './svg/opensrc.svg'
import Home from './Pages/Home'

import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import './static/App.scss'
import contact from './Pages/contact'
import {Switch,Route,Link,Redirect} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import MobileApp from './MobileApp'
import Typewriter from 'typewriter-effect';

export default function App(){

               const Mobile=({children})=>{
                const isMobile=useMediaQuery({maxWidth:768});
                return isMobile? children:null
              }
              const Desktop=({children})=>{
               const isDesktop=useMediaQuery({minWidth:992});
               return isDesktop? children:null
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
      
        <Desktop>
       
       <section>
           
        <Switch>
            <Route exact path='/contact'  component={contact}/>
            <Route exact path='/'  component={Home}/>
          
            <Route exact path='/About' component={About}/>
            <Route exact path='/Projects' component={Projects}/>
            <Route exact path='/Skills' component={Skills}/>
            <Redirect to='/' />
        </Switch>
       
    <section className='main-text'><div className='span-text'>HariCharan</div>
    <span className='container'> 
    <button className='container-button' onClick={day}></button> 
  
    <button className="container-svg" onClick={night}></button>
    
    </span>
   <div className='type-txt'> <Typewriter
  options={{
    strings: ['Full stack developer', 'Android/iOS Developer','Blogger'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
    </section>
   
 <section className='flex-fixed-box'>     
<section className='txt'>
<Link to='/' style={{textDecoration:'none'}}><div><img src={logo}  alt="logo" className='logo'/><p>Home</p></div></Link>
<Link to ='/Skills' style={{textDecoration:'none'}}><div><img src={logo4} alt='logo' className='logo4'/><p>Skills</p></div></Link>
<Link to ='/About'  style={{textDecoration:'none'}}><div><img src={logo2} alt='logo' className='logo2'/><p>About</p></div></Link>
<Link to ='/Projects'  style={{textDecoration:'none'}}><div><img src={logo3} alt='logo' className='logo3'/><p>Projects</p></div></Link>

</section>
<Link to='/contact'> <div> <button>Contact Me</button></div></Link>

</section>

</section>



        </Desktop>
        <Mobile>
            <MobileApp/>
        </Mobile>
       
        </>
    );
}
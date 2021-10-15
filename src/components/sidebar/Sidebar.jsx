import "./sidebar.css"
import React from 'react'

export default function Sidebar() {
   return (
      <div className="sideBar0">
      <div className="sideBar">
         <div className="sidebarItem">
         
            
            <img src="/images/neha.jpeg " alt="mypic" /><br/><br/>
            <span className="sidebarTitle">Who is Neha?</span>
            <p className="psidebar"> A curiosity-driven Full Stack Developer, I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</p>
         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">My Tool Box</span>
         <div className="sidebarList0">
         <ul className="sidebarList">
            <i className=" sidebarIcon fab fa-html5"></i>
            <i className="sidebarIcon fab fa-node"></i>
             <i className="sidebarIcon fab fa-laravel"></i>
            <i className="sidebarIcon fab fa-css3-alt"></i>
            <i className="sidebarIcon fab fa-js-square"></i>
            
            <i className="sidebarIcon fab fa-php"></i>
            <i className="sidebarIcon fab fa-react"></i>
           
            
            <i className="sidebarIcon fab fa-github"></i>
                                 
         </ul>
         </div>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle"> Feeling Social?</span>
            <div className="sidebarSocial">
            <i className=" sidebarIcon fab fa-linkedin"></i>
          <i className =" sidebarIcon fab fa-github-square"></i>
         <i className=" sidebarIcon fab fa-instagram-square"></i>

            </div>
            
          
             </div>
      </div>
      </div>
   )
}

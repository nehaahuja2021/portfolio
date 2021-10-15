import "./topbar.css"
import React from 'react'

export default function topbar() {
   return (
      <div className="top">
         <div className="topLeft">
         
          <i className=" topIcon fab fa-linkedin"></i>
          <i className =" topIcon fab fa-github-square"></i>
         <i className=" topIcon fab fa-instagram-square"></i>
         </div>
        
         <div className="topCenter">        
         <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">PROJECTS</li>
            <li className="topListItem">CONTACT</li>
         </ul>
            </div>


         <div className="topRight">
            <img className="topImg" src="/images/neha.jpeg" alt="myimage" />
         </div>
      </div>
   )
}

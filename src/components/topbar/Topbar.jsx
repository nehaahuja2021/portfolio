import "./topbar.css"

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
            <img className="topImg" src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/33176536_1850471221672326_9043932688389505024_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=nafk_Mzav3oAX-jctK-&_nc_ht=scontent-bru2-1.xx&oh=89b4a94d6f87278642619d31a11530ec&oe=6183FEB9" alt="myimage" />
         </div>
      </div>
   )
}

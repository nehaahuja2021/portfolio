import "./sidebar.css"

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
         <span className="sidebarTitle">Technical Skills</span>
         <ul className="sidebarList">
            <i className=" sidebarListItem fab fa-html5"></i>
            <i className="sidebarListItem fab fa-css3-alt"></i>
            <li className="sidebarListItem">NodeJS-PHP</li>
            <li className="sidebarListItem">SQL</li>
         </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle"> Follow Me</span>
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

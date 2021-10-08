import "./sidebar.css"

export default function Sidebar() {
   return (
      <div className="sideBar">
         <div className="sidebarItem">
         
            <span className="sidebarTitle">About Me</span>
            <img src="/images/neha.jpeg" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores ea earum deserunt. Impedit autem delectus dolore quam sit placeat, dicta, odio nobis provident, quos perspiciatis labore eligendi. Harum placeat eos quod temporibus mollitia!</p>
         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">Technical Skills</span>
         <ul className="sidebarList">
            <li className="sidebarListItem">HTML-CSS</li>
            <li className="sidebarListItem">Javascript-React</li>
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
   )
}

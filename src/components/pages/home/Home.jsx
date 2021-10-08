import "./home.css"
import Header from "../../header/Header"
import Sidebar from "../../sidebar/Sidebar"
import Projects from "../../projects/Projects"
export default function Home() {
   return (
      
         <>
         <Header/>
         <div className="home">
         <Projects/>
         <Sidebar/>
         </div>
      </>
   )
}


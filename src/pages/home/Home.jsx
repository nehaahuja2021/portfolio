import "./home.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Projects from "../../components/projects/Projects"
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


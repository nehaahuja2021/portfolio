import "./project.css"
import React from 'react'

export default function Project() {
const projectDInfo =[

{img:"/images/cars1.jpg",pname:"Best Car Deals",pdetails:"JS,NodeJs,Sqlite,Express,Heroku",pdescription:"Features : (1) This small app about car deals helps you to find cars of brands ( Audi,BMW,Chevrolet,Alpharomeo,Lambhorgini ) from budget (starting range :20000)Euros. (2) User can use contact us form and all user details can be saved in an excel sheet at backend.",link: "https://appbestcardeal.herokuapp.com/"},
{img:"/images/fresh.jpg",pname:"FreshShop",pdetails:"Laravel,Bootstrap,MYSQL,Heroku",pdescription:"Features: Home Page with links like : Products Available, Search Any Product, Register and Login.From Home Page, User can add products only if he is logged in.User can view his orders,add & delete products from cart. Address needs to be filled.",link:" http://appfreshfood.herokuapp.com/"},
{img:"/images/text.jpg",pname:"TextApp in React",pdetails:"React-Js,Bootstrap",pdescription:" Features:Built using React functional components and hooks, this app converts Text to LowerCase, UpperCase, Copies Text, Deletes Text,Enables Dark or Light Modes and is Responsive",link:"https://apptext-4u.herokuapp.com/"},
{img:"/images/corona.jpg",pname:"Corona Worldometer",pdetails:"Html,Css,JS",pdescription:"Features: This app was built using API to display Corona Cases in almost 200 countries.User needs to input country name and it displays all information related to cases in that country.",link:"https://nehaahuja2021.github.io/CoronaWorldometer.github.io/" }
]

const renderProject=(project,index)=>{
   
return(
   <>
  <div className ="variousProjects">
         <img className="projectImg" src={project.img} alt=""/>
         <div className="projectInfo">
            <div className="projectName">{project.pname}</div>
            <span className="projectTechnologies">{project.pdetails}</span>
            <span className="projectDesc">
            <p>{project.pdescription} </p>
         </span>
         <a className="-btn -bg -txt" href={project.link} >Click Here to View </a>
         </div>
         </div>
</>
)}

return <div className="project" >
   <p className="pmainbar"> A Selection of Stuff I've Built</p>{projectDInfo.map(renderProject)}</div>;
   





   
}

import "./project.css"

export default function Project() {
const projectDInfo =[

{img:"/images/cars1.jpg",pname:"Best Car Deals",pdetails:"JS,NodeJs,Sqlite,Express,Heroku",pdescription:"Features : (1) This small app about car deals helps you to find cars of brands ( Audi,BMW,Chevrolet,Alpharomeo,Lambhorgini ) from budget (starting range :20000)Euros. (2) User can use contact us form and all user details can be saved in an excel sheet at backend.",link: "https://appbestcardeal.herokuapp.com/"},
{img:"/images/farm.jpg",pname:"FreshShop",pdetails:"Laravel,Bootstrap,MYSQL,Heroku",pdescription:"Features: Home Page with links like : Products Available, Search Any Product, Register and Login.User can Register & after registration, lands to login page.From Home Page, User can add products only if he is logged in.User can view his orders,add & delete products from cart.User can place an order only with Payment on Delivery Option. Address needs to be filled.",link:" http://appfreshfood.herokuapp.com/"},
{img:"/images/textimage.png",pname:"TextApp in React",pdetails:"React-Js,Bootstrap",pdescription:" Features:Built using React functional components and hooks, this app converts Text to LowerCase, UpperCase, Copies Text, Deletes Text,Enables Dark or Light Modes and is Responsive",link:"https://apptext-4u.herokuapp.com/"},
{img:"/images/corona.png",pname:"Corona Worldometer",pdetails:"Html,Css,JS",pdescription:"Features: This app was built using API to display Corona Cases in almost 200 countries.User needs to input country name and it displays all information related to cases in that country.",link:"https://nehaahuja2021.github.io/CoronaWorldometer.github.io/" }
]

const renderProject=(project,index)=>{
   
return(
   <>
  
         <img className="projectImg" src={project.img} alt=""/>
         <div className="projectInfo">
            <div className="projectName">{project.pname}</div>
            <span className="projectDetails">{project.pdetails}</span>
            <span className="projectDesc">
            <p>{project.pdescription} </p>
         </span>
         <a className="-btn -bg -txt" href={project.link} >Click Here to View </a>
         </div>
</>
)}

return <div className="project" >{projectDInfo.map(renderProject)}</div>;
   





   
}

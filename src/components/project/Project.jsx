import "./project.css"

export default function Project() {
const projectDInfo =[
{img:"/images/corona.png",pname:"Corona Worldometer",pdetails:"Html,Css,JS",pdescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, obcaecati velit totam deleniti numquam pariatur corporis delectus nesciunt neque, voluptatibus tempore unde sequi, consectetur sunt exercitationem at beatae. A, dolores? Et perspiciatis recusandae animi!"},
{img:"/images/corona.png",pname:"Best Car Deals",pdetails:"JS,NodeJs,Sqlite",pdescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, obcaecati velit totam deleniti numquam pariatur corporis delectus nesciunt neque, voluptatibus tempore unde sequi, consectetur sunt exercitationem at beatae. A, dolores? Et perspiciatis recusandae animi!"},
{img:"/images/corona.png",pname:"FreshShop",pdetails:"PHP,Laravel,Bootstrap,SQL",pdescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, obcaecati velit totam deleniti numquam pariatur corporis delectus nesciunt neque, voluptatibus tempore unde sequi, consectetur sunt exercitationem at beatae. A, dolores? Et perspiciatis recusandae animi!"},
{img:"/images/corona.png",pname:"TextApp in React",pdetails:"React-Js,Bootstrap",pdescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, obcaecati velit totam deleniti numquam pariatur corporis delectus nesciunt neque, voluptatibus tempore unde sequi, consectetur sunt exercitationem at beatae. A, dolores? Et perspiciatis recusandae animi!"}
]

const renderProject=(project,index)=>{
return(
   <div className="project">
         <img className="projectImg" src={project.img} alt=""/>
         <div className="projectInfo">
            <div className="projectName">{project.pname}</div>
            <span className="projectDetails">{project.pdetails}</span>
            <span className="projectDesc">
            <p>{project.pdescription} </p>
         </span>
         </div>
</div>
)}

return <div >{projectDInfo.map(renderProject)}</div>;
   





   
}

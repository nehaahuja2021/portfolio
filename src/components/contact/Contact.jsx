import "./contact.css"
import React from 'react'

import { useRef } from "react"
import emailjs from 'emailjs-com';
const Contact=() =>{
const formRef= useRef()

const handleSubmit=(e)=>
{
e.preventDefault()
emailjs.sendForm('service_gupp8af', 'template_nk2e0tg', formRef.current, 'user_55aW1OQuQcfr3NaQ3N3xC')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
};

   return (
      <div className="c">
<div className="c-bg">
<div className="c-wrapper">
<div className="c-left">
<h1 className="c-title">
   Lets Discuss </h1>
   <div className="c-info">
<div className="c-info-item">
   <img src="/images/phone1.png" alt="" className="c-icon" />+32-468366298
</div>
<div className="c-info-item">
   <img src="/images/email1.png" alt="" className="c-icon" />neha.ahuja2021@gmail.com
</div>
<div className="c-info-item">
   <img src="/images/address1.png" alt="" className="c-icon" /> Evere 1140,Brussels
</div>
   </div>

</div>
<div className="c-right">
   <p className="c-desc">
      Get in Touch!
   </p>
<form className="c-form" ref={formRef} onSubmit={handleSubmit}>

   <input className="c-input" type="text" placeholder="Name" name="user_name"/><br/>
   <input  className="c-input"type="text" placeholder="Subject" name="user_subject"/><br/>
   <input  className="c-input"type="text" placeholder="Email" name="user_email"/>
   <textarea className="c-textarea" rows="5" placeholder="Message" name="message"/>
   <button>Submit</button>
   
   </form>



</div>

</div>
   </div>

      </div>
         
     
   )
   }
export default Contact;
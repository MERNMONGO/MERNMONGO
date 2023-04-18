import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const redirect = useNavigate()

let nameRef = useRef()
let emailRef = useRef()
let messageRef = useRef()

const showToastMessage = () => {
    toast.success('Message Sent !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

async function handleSubmit(e) {
    e.preventDefault()
    showToastMessage()

 
    let newMessage = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      
        
    }
    

    // await createMessage(newMessage)
    // redirect ('/')
}

return ( 
    <div className="text-center">
        <h1>Leave a Message</h1>
        <form onSubmit={handleSubmit}>

    

            <label htmlFor="z">Name</label><br />
            <input type="text" id="z" ref={nameRef} /><br /><br />

            <label htmlFor="zz">Email</label><br />
            <input type="text" id="zz" ref={emailRef} /><br /><br />

            <label htmlFor="zzw">Message</label><br />
            <div className = "input-icon"><input type="text" id="zzw" ref={messageRef} /><i></i></div><br /><br />
           



          

                <button onClick = {handleSubmit} type="button" class="btn btn-primary">Send Message</button>
                <ToastContainer />

                    
        </form>
    </div>
 );
}
export default Contact;

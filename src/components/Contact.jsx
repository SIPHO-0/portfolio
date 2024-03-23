import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';
import Loader from './shared/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  
  
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

   
    emailjs
      .sendForm('service_8cwvy1s', 'template_xdm1p38', form.current, {
        publicKey: '4WKDy9p3CYOHJB_bG',
      })
      .then(
        () => {
          toast.success('Your message has been sent successfully. I will be in contact', {
            position: 'top-right'
          });
          
          setLoading(false);
          // Clear the form fields
        setUserName('');
        setUserEmail('');
        setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          toast.error('Error sendind', error.text,  {
            position: 'top-right'
          });
        },
      );
  };

  const isFormEmpty = () => {
    return !userName || !userEmail || !message;
  };

  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 w-full  text-white">
      <ToastContainer />
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contacts</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col w-full md:w-1/2">
                <input 
                    text="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                    text="text"
                    name="user_email"
                    placeholder="Enter your email address"
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <textarea 
                    rows="10" 
                    placeholder="Enter your message"
                    name="message"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    >

                    </textarea>
                    <button
      className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
      type="submit"
      value="Send"
      disabled={loading || isFormEmpty()}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!loading && "Let's talk"}
    </button>
                </form>
            </div>
      </div>

    </div>
  )
}


export default Contact


'use client'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can send formData to an API or perform further processing
    const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    operation: "serviceContact",
                    formValues: formData,
                }),
            });
    
            if (response.ok) {
                Swal.fire({
    
                    title: "Form submitted successfully!",
    
                    text: "Team connect with you soon",
    
                    icon: "success"
    
                }).then((result) => {
    
    
                });

                setFormData({
                  name: "",
                  mobile: "",
                  email: "",
                  message: "",
                })
            } else {
    
            }
  };


  return (
    <div className='bg-white'>
      <div className='bg-neutral-200 w-full flex flex-col justify-center items-center h-full pt-48 pb-40'>
        <div className='w-[100%]'>
          <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[30%]">
            <span className="flex-grow border-t-1 border-black mr-2"></span>
            <div className='flex flex-col ml-8'>
              <span className='font-bold tracking-widest text-sm'>
                {"Let's Talk"}
              </span>
              <span className='font-bold tracking-wider text-7xl'>Contact</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center h-full w-[100%] bg-neutral-100 pb-32'>
        <div className='w-[80%]'>
          {/* <div className='flex flex-row justify-center items-center gap-2'>
          <div>
            Sameer
          </div>
          <div>
            Shaikh
          </div>
        </div> */}

          <div className="flex flex-col lg:flex-row bg-gray-100 min-h-[50%]">
            {/* Left Section */}
            <div className="lg:w-1/2 bg-neutral-200 p-8">
              <h2 className="text-5xl font-bold mb-4 mt-4">
                To Make Requests For Further Information
              </h2>
              <p className="font-semibold mb-2 mt-4">Via Our Social Channels.</p>
              <p className="text-gray-600 mb-6 mt-4">
                We just need a couple of hours! No more than 2 working days since receiving your issue ticket.
              </p>
              <div className="mb-4 mt-4">
                <p className="text-gray-700 font-semibold">PHONE</p>
                <p className="text-gray-900">+91 70217 19016</p>
              </div>
              <div className="mb-4 mt-4">
                <p className="text-gray-700 font-semibold">E-MAIL</p>
                <p className="text-blue-600 underline cursor-pointer">
                  info@krafitechnsolution.com
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mt-4">ADDRESS</p>
                <p className="text-gray-900">Office No.1006 Juhi Niharika Mirage, 274, Kopra Rd, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210.</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 bg-neutral-100 p-8">
              <h2 className="text-4xl font-bold mb-6">Fill Below Details For Demo</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-semibold">Name?</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    className="w-full border-b border-gray-400 outline-none py-2 bg-neutral-100"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold">Mobile?</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Type your number"
                    className="w-full border-b border-gray-400 outline-none py-2 bg-neutral-100"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold">E-mail?</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your Email Address"
                    className="w-full border-b border-gray-400 outline-none py-2 bg-neutral-100"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold">{"What's up?"}</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about you and the world"
                    className="w-full border-b border-gray-400 outline-none py-2 bg-neutral-100 resize-none"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center h-full w-[100%] bg-neutral-100 pb-32'>
        <div className='flex justify-center items-center w-full bg-neutral-100'>
          <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.257183653825!2d73.07530865368928!3d19.0360809896763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c20d3e4bdf33%3A0x6233e94401a34a5b!2sJuhi%20Niharika%20Mirage%20Kharghar!5e0!3m2!1sen!2sin!4v1742197391763!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className='w-full'
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Contact
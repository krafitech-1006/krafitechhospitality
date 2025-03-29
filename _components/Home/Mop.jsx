import React from 'react'

const Mop = () => {
    return (
        <div className='flex justify-center items-center w-full bg-white'>
            <div className='w-[100%] h-[100%] flex justify-center items-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.257183653825!2d73.07530865368928!3d19.0360809896763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c20d3e4bdf33%3A0x6233e94401a34a5b!2sJuhi%20Niharika%20Mirage%20Kharghar!5e0!3m2!1sen!2sin!4v1742197391763!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    className='rounded-xl w-full mb-16'
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>
    )
}

export default Mop
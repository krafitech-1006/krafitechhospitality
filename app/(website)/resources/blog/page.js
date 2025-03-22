import ContactSupport from '@/_components/Resources/Blog/ContactSupport'
import Blog from '@/_components/Resources/Blog/Blog'
import React from 'react'



const blog = () => {

  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Blog />
      <ContactSupport />
    </div>
  )
}

export default blog
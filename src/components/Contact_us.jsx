import React from 'react'

function Contact_us() {
  return (
    <>

      <div className='contact'>
        <div class="container">
          <div class="row">
            <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470027.2875193123!2d72.25005752275631!3d23.02053415874055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1697519232187!5m2!1sen!2sin" width="400" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col">
            <div className='posterhead2'>
      <p>
      <i className="fa-solid fa-leaf fa-2xl leaf "></i> ORGANIC
      </p>
      <p className='pera2'>Food Market</p>
    </div>
            </div>
          </div>
          <div class="row">
            <div className="col info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa laboriosam nostrum earum a, eum nemo minima explicabo, voluptates odio similique magni cumque dolore
            </div>
            <div className="col info">
              <p className='fa-2xl'>Contact</p><br />
              <p><i class="fa-solid fa-phone" style={{color: 'green'}}></i>   1234567899</p>
              <p><i class="fa-solid fa-envelope"style={{color: 'green'}}></i>    info@gmail.com</p>
            </div>
            <div className="col info">
              <p className='fa-2xl'>Explore</p><br />
              <p>My Account</p>
              <p>New Products</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact_us
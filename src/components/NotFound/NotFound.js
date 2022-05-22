import React from 'react'
import images from './images/222.jpg'

const NotFound = () => {
  return (
    <section className='px-4 mt-20'>
      <div class="grid grid-cols-2">
  <div class="">
    <div class="card m-5 w-100 border-0">
      <div class="card-body m-5">
        <h2 class="card-title pt-5">Error 404</h2>
        <h4 class="card-text">Oops! The page you're looking for isn't here.</h4>
        <h6 class="card-text">You might have the wrong address, or the page may have moved.</h6>
     
      </div>
    </div>
  </div>
  <div class="">
    <div class="card border-0 mt-5">
      <div class="card-body">
       <img height={400} src={images} alt="" />
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default NotFound

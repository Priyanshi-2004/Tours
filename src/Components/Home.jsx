import React from 'react'
import Header from '../Common/Header'
import t1 from '../Images/t1.png'
import t2 from '../Images/t2.png'
import V1 from '../Images/img2.jpg'
import Footer from '../Common/Footer'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';


export default function Home() {
  return (
    <>
    <Header/>
    <div><img src={V1} style={{width:"85%",margin:"auto", height:"600px"}}/></div>
    {/* -------------------------------About Section Starts----------------------------------------------------- */}
<div className='rounded-3xl' style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU63FqSgZ26Ygzafae04opmGs6MN0vkupAMw&s')" }}>
    <div className=' w-[800px] shadow-2xl p-[100px] text-center rounded-2xl ml-[350px]'>
        <h1 className='mb-4 text-center font-bold text-[50px]'>ABOUT US</h1>
        <p className='mr-[30px] rounded text-center shadow-lg'>
          Welcome to Academica Tours, where educational exploration meets unparalleled expertise in organizing enriching trips for schools and colleges.
           At Academica Tours, we are dedicated to transforming traditional learning into immersive experiences that inspire curiosity and foster a deeper understanding of the world. 
           With a commitment to safety, quality, and educational value, our team of seasoned professionals meticulously plans each trip, ensuring every detail is tailored to meet your
            educational objectives. Whether it's historical landmarks, scientific expeditions, or cultural immersion, we specialize in creating customized itineraries that empower students
             to learn beyond the classroom. Join us as we embark on educational journeys that ignite a passion for learning and leave lasting memories.<br/>
             With years of experience in educational travel, we pride ourselves on our comprehensive approach to planning, which includes rigorous safety standards, expert guides, and partnerships with trusted vendors worldwide. Our mission is to provide students and educators with unforgettable experiences that broaden perspectives 
             and enrich academic learning. 

        </p>
        {/* <button className='bg-danger mt-4 mx-auto'>Read More</button> */}
    </div>
</div>
{/* ----------------------------------------------About Section Ends------------------------------------------------------------- */}
{/* ----------------------------------------------Testimonial Starts------------------------------------------------------------- */}
<section class="text-gray-600 p-[60px] bg-red-400 shadow-2xl rounded-3xl">
  <div class="container px-[50px] pb-[40px] mx-auto">
    <h1 className='mb-4 text-center font-bold text-[50px]'>Testimonials</h1>r
     <AwesomeSlider style={{height:"500px" , marginTop:"40px" }} >
        <div data-src={t1} />
        <div data-src={t1} style={{objectFit:"cover"}} />
        <div data-src={t1} />
      </AwesomeSlider>
  </div>
</section>

{/* ----------------------------------------------Testimonial Ends----------------------------------------------------------------*/}
{/* ---------------------------------------------Why Choose Us Starts------------------------------------------------------------ */}
<div className='bg-blue-300 p-[50px] rounded-3xl'>
<img className="m-auto rounded-2xl" src={t2}/>
</div>
{/* --------------------------------------------Why Choose Us Ends--------------------------------------------------------------- */}
{/* --------------------------------------------Our Services Starts--------------------------------------------------------------- */}
<section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">

  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services </h1>
  <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
      {/* -------------------------- */}
      <div className="card bg-gray-800 p-6  " style={{width:"500px"}}>
           <div><img src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl p-3">Customizable Trip Packages</h2>
        <p className="text-gray-400">Tailor your educational journey with our customizable trip packages. Whether you're interested in historical landmarks, scientific exploration, or cultural immersion, we create personalized itineraries to match your educational objectives and budget.</p>
      </div>
    {/* </div> */}
    {/* ------------------------------ */}
    <div className="card bg-gray-800 p-6  " style={{width:"500px"}}>
      <div >
          <div><img src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl p-3">Expert Trip Planning</h2>
        <p className="text-gray-400">"Our team of expert trip planners meticulously designs each itinerary, ensuring a seamless and enriching experience. From accommodation to transportation and guided tours, we handle every detail to optimize learning opportunities and safety."
</p>
      </div>
    </div>
    {/* -------------------------------- */}
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div>
           <div><img src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl p-3">Affordable Pricing</h2>
        <p className="text-gray-400">"We believe in making educational travel accessible. Benefit from competitive pricing without compromising on quality. Our transparent pricing and flexible payment options make planning and budgeting straightforward."
</p>
      </div>
    </div>
    {/* ------------------------------ */}
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div >
           <div><img src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></div>
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
    </div>
    </div>
</section>
{/* --------------------------------------------Our Services Ends----------------------------------------------------------------- */}
{/* -------------------------------------------Contact Us Starts------------------------------------------------------------------ */}

<div class='flex justify-center p-[80px] rounded-3xl 'style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_alB798Lgv3F3PP5gqxKL9ONCcU2a-Ix-QDb-18QKBuDdsDP7f9m5L4DmeBhk4_ruxU&usqp=CAU')" }}>
  <div class="border-purple-500 shadow-2xl flex"  >
    <div class="p-5 space-y-5 shadow-xl flex flex-col items-center w-full">
 
      <h4 class="text-center text-3xl mb-5 font-bold">Get in touch with our creator-friendly support team</h4>
      
      <div class="flex justify-between w-full">
        <div class="w-64 border bg-red-200 mx-2">
          <div class="p-4">
            <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Chat with us</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
            <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
          </div>
        </div>
        
        <div class="w-64 border bg-red-200 mx-2">
          <div class="p-4">
            <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Email</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
            <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
          </div>
        </div>
        
        <div class="w-64 border bg-red-200 mx-2">
          <div class="p-4">
            <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Call</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
            <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>

</div>
{/* ------------------------------------------Contact Us Ends--------------------------------------------------------------------- */}
<Footer/>
    </>
  )
}

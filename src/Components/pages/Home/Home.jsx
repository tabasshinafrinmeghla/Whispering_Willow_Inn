import React from 'react';
import BackgroundImage from '../../BackgroundImage/BackgroundImage';
import img1 from '../../../img/download (1).jpg'
import img2 from '../../../img/download (2).jpg'
import img3 from '../../../img/download (3).jpg'
import img4 from '../../../img/07032647-most-expensive-hotel-rooms-suites-in-the-world-rosewood-copy_cover_1366x768.webp'
import img5 from '../../../img/110830032650-hotel-president-wilson.jpg'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <div>
      <BackgroundImage></BackgroundImage>


      {/* Time date  */}
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 51 }}></span>
          </span>
          sec
        </div>
      </div>





      <div className='bg-slate-800 p-7 my-8  shadow-indigo-500/40'>
        <div className='flex'>
          <div className='w-1/2 '>
            <h2 className='capitalize text-justify p-2 font-serif text-xl'>High-Quality Accommodations:</h2>
            <p className='text-justify p-4 indent-4'>Luxurious hotels typically offer spacious and well-appointed rooms or suites with upscale furnishings, comfortable bedding, and high-end amenities. Guests can expect top-notch interior design and attention to detail.</p>
          </div>
          <div className='w-1/2 m-8'>
            <div className="card  bg-base-100 shadow-xl image-full flex-1  shadow-indigo-500/40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <figure>
                <img src={img3} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Room!</h2>
                <p>If a dog chews Room whose Room does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary "><Link to="/vip room">BookIng</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='w-1/2 m-8'>
            <div className="card  bg-base-100 shadow-xl image-full flex-1  shadow-indigo-500/40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <figure>
                <img src={img2} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Room!</h2>
                <p>If a dog chews Room whose Room does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary "><Link to="/vip room">BookIng</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 '>
            <h2 className='capitalize text-justify p-2 font-serif text-xl'>Exceptional Service:</h2>
            <p className='text-justify p-4 indent-4'>Service is a key element of luxury hotels. Staff members are often highly trained, attentive, and aim to anticipate and fulfill guests' needs promptly. Personalized services, such as concierge assistance, are common.</p>
          </div>

        </div>


        <div className='flex'>
          <div className='w-1/2 '>
            <h2 className='capitalize text-justify p-2 font-serif text-xl'>Fine Dining:</h2>
            <p className='text-justify p-4 indent-4'>Luxury hotels often feature one or more high-quality restaurants with renowned chefs, offering a diverse range of culinary experiences. Some hotels may also provide 24-hour room service with gourmet menu options.</p>
          </div>
          <div className='w-1/2 m-8'>
            <div className="card  bg-base-100 shadow-xl image-full flex-1  shadow-indigo-500/40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <figure>
                <img src={img1} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Room!</h2>
                <p>If a dog chews Room whose Room does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary "><Link to="/vip room">BookIng</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='w-1/2 m-8'>
            <div className="card  bg-base-100 shadow-xl image-full flex-1  shadow-indigo-500/40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <figure>
                <img className='w-80' src={img4} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Room!</h2>
                <p>If a dog chews Room whose Room does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary "><Link to="/vip room">BookIng</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 '>
            <h2 className='capitalize text-justify p-2 font-serif text-xl'>Spa and Wellness Facilities:</h2>
            <p className='text-justify p-4 indent-4'>Many luxurious hotels have on-site spas, fitness centers, and wellness facilities. These may include massage services, saunas, steam rooms, and state-of-the-art fitness equipment.</p>
          </div>

        </div>

      </div>





      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 ...">
          <div className="card  glass">
            <figure>
              <img className='pt-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' src={img2} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Choose your Room</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/vip room">BookIng</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-3 ...">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">VIP Room!</h2>
              <p>it's a luxurious Room .if you want you can book?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/vip room">BookIng</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-end-7 col-span-2 ...">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={img4} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">VIP Room!</h2>
              <p>it's a luxurious Room .if you want you can book?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to="/vip room">BookIng</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-7 ...">
          <div className="card  glass">
            <figure>
              <img className='pt-2  ' src={img5} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
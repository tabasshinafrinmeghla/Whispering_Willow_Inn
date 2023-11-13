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



      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 ...">
          <div className="card  glass">
            <figure>
              <img className='pt-2' src={img2} alt="" />
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
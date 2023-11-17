import React from 'react';
import imgAbout2 from '../../../img/photo-1584132967334-10e028bd69f7.avif'

const About = () => {
  return (
    <div >
      <div className="diff aspect-[12/6]">
        <div className="diff-item-1">
          <img alt="daisy" src={imgAbout2} />

          <div class="backdrop-blur-sm bg-white/20 ...">

            {/* <div className='px-8'>
              <h2 className='text-slate-950 '></h2>
            </div> */}



            <div className="hero  ">
              <div className="hero-content text-center mt-28  ">
                <div className="p-8 bg-neutral-400 ml-12 w-11/12 pe-8 ">
                  <h1 className="text-5xl font-bold font-serif text-slate-950 ">Whispering Willow Inn</h1>
                  <h5 className="pxy-12 text-slate-950 font-mono font-normal text-center  m-8 ">Greetings from Whispering Willow Inn! We are thrilled to extend a warm welcome and have you as our esteemed guest. Your presence is a pleasure, and we are committed to making your stay a delightful experience.

                    Nestled in the heart of tranquility, Whispering Willow Inn offers a unique blend of comfort, charm, and hospitality. From the moment you step through our doors, you will be enveloped in the serene atmosphere that defines our haven.

                    Our dedicated team is here to ensure that every aspect of your stay is seamless and enjoyable. Whether you're here for business or leisure, our array of amenities and services are designed to cater to your every need. Relax in our well-appointed rooms, savor delicious cuisine at our on-site restaurant, and let our attentive staff take care of the details.

                    Feel free to reach out to our concierge for any special requests or information about the local attractions. We want your time at Whispering Willow Inn to be more than just a stay; we aim to create lasting memories that you'll cherish.

                    Thank you for choosing Whispering Willow Inn. We look forward to exceeding your expectations and making your stay with us truly exceptional.</h5>
                  
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className="diff-item-2 ">
          <img alt="daisy" src={imgAbout2} />



        </div>
        <div className="diff-resizer"></div>
      </div>




    </div>

  );
};

export default About;
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages = [
  {
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/110830032650-hotel-president-wilson.jpg?q=w_1200,h_800,x_0,y_0,c_fill/h_618',
    caption: 'First Slide'
  },
  {
    url: 'https://truffle-assets.tastemadecontent.net/pxqrocxwsjcc_6sjV67m1OgKeag688K2m6Y_expensehotel3.png',
    caption: 'Second Slide'
  },
  {
    url: 'https://travelstatsman.s3.eu-west-1.amazonaws.com/wp-content/uploads/2017/11/01135815/Burj_Al_Arab_-_Royal_Suite.jpg',
    caption: 'Third Slide'
  },
  {
    url: 'https://image-tc.galaxy.tf/wijpeg-afu0zj5rhmyyirzditj3g96mk/deluxe-room-king-1-2000px_standard.jpg?crop=120%2C0%2C1760%2C1320',
    caption: 'forth Slide'
  },
  {
    url: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/08/THE-BVLGARI-VILLA-THE-BVLGARI-RESORT-DUBAI-USA.jpg?ssl=1',
    caption: 'fifth Slide'
  },
  {
    url: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07032647-most-expensive-hotel-rooms-suites-in-the-world-rosewood-copy_cover_1366x768.jpg',
    caption: 'sixth Slide'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM3_VH1axvpp3aEDUbfBFeDtsxoHB1Yrnq4Q8TX4J15ENo-OfZBAz87-PPM7klkaSyX4&usqp=CAU',
    caption: 'seventh Slide'
  },
  {
    url: 'https://i.insider.com/5db76394045a312d556d4ca3?width=1136&format=jpeg',
    caption: 'eighth Slide'
  },
  {
    url: 'https://bookyourluxuryhotelsuite.com/wp-content/uploads/2019/01/Presidential_Suite_living_Mandarin_Oriental_NY.jpg',
    caption: 'ninth Slide'
  },
  {
    url: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07031629-most-expensive-hotel-rooms-suites-in-the-world-the-palm2_cover_2000x727.png',
    caption: 'Tenth Slide'
  },
  {
    url: 'https://travelstatsman.s3.eu-west-1.amazonaws.com/wp-content/uploads/2017/11/01135815/Burj_Al_Arab_-_Royal_Suite.jpg',
    caption: 'Third Slide'
  },
  {
    url: 'https://travelstatsman.s3.eu-west-1.amazonaws.com/wp-content/uploads/2017/11/01135815/Burj_Al_Arab_-_Royal_Suite.jpg',
    caption: 'Third Slide'
  },
  {
    url: 'https://travelstatsman.s3.eu-west-1.amazonaws.com/wp-content/uploads/2017/11/01135815/Burj_Al_Arab_-_Royal_Suite.jpg',
    caption: 'Third Slide'
  }
];



const BackgroundImage = () => {
  return (
    <div className='slide-container'>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%',height: '700px' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}

      </Fade>

    </div>
  );
};

export default BackgroundImage;
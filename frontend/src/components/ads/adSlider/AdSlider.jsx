import Carousel from 'react-bootstrap/Carousel';
import ad1 from '../../../assets/ads/ad1.png';
import ad2 from '../../../assets/ads/ad2.png';
import ad3 from '../../../assets/ads/ad3.png';
import ad4 from '../../../assets/ads/ad4.png';
import ad5 from '../../../assets/ads/ad5.png';
import ad6 from '../../../assets/ads/ad6.png';
import ad7 from '../../../assets/ads/ad7.png';
import ad8 from '../../../assets/ads/ad8.png';
import ad9 from '../../../assets/ads/ad9.png';
import ad10 from '../../../assets/ads/ad10.png';
import ad11 from '../../../assets/ads/ad11.png';
import ad12 from '../../../assets/ads/ad12.png';
import ad13 from '../../../assets/ads/ad13.png';
import ad14 from '../../../assets/ads/ad14.png';
import ad15 from '../../../assets/ads/ad15.png';

import './AdSlider.css';

const ads = [
  ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10,
  ad11, ad12, ad13, ad14, ad15
];

function AdSlider() {
  return (
    <div className="ad-slider-container">
      <Carousel
        indicators={true}
        fade={false}
        slide={true}
        interval={2000}
        controls={true}
      >
        {ads.map((ad, index) => (
          <Carousel.Item key={index}>
            <img src={ad} alt={`Ad ${index + 1}`} className="carousel-image" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default AdSlider;

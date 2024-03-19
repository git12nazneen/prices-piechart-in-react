import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image1 from '../../1.jpg'
import Image2 from '../../2.jpg';
import Image3 from '../../3.jpg';


const Banner = () => {
    const slider = (
        <AwesomeSlider>
          <div data-src={Image1} />
          <div data-src={Image2}/>
          <div data-src={Image3}/>
        </AwesomeSlider>
      );
      return slider;
};

export default Banner;
import Navbar from "../../components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
          <div>
            <img src="banner.png" />
          </div>
          <div>
            <img src="banner.png" />
          </div>
        </Carousel>
      </main>
    </div>
  );
};

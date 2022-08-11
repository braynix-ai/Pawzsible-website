import Navbar from "../../components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "./Home.module.css";

export default () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
              <img src="banner.png" />
            </div>
            <div>
              <img src="banner.png" />
            </div>
          </Carousel>
        </section>

        <section className={styles.feedDogSection}>
          <div id={styles.feedDogSectionTitle}>Feed Your Dog</div>

          <div className={styles.feedDogSectionMain}>
            <div className={styles.feedDogSectionInfogrid}>
              <img
                id={styles.feedDogSectionDog1}
                src="feedDogSection/dog1.png"
                alt="Dog"
              />
              <img
                id={styles.feedDogSectionDog2}
                src="feedDogSection/dog2.png"
                alt="Dog"
              />
              <img
                id={styles.feedDogSectionDog3}
                src="feedDogSection/dog3.png"
                alt="Dog"
              />
            </div>
            <div className={styles.feedDogSectionContent}>
              <div id={styles.feedDogSectionContentTitle}>
                Nurture and nourish
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut
                enim ad minim v eniam, quis nostrud exercitation uecat
              </p>
              <div id={styles.feedDogSectionContentOptions}>
                Try out the amazing options!
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

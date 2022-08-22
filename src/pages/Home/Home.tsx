import Navbar from "../../components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as BannerCarousel } from "react-responsive-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Home.module.css";

export default () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1550 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1550, min: 1457 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1457, min: 990 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 990, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <BannerCarousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            interval={7000}
          >
            <div>
              <img src="banner/b1.gif" />
            </div>
            <div>
              <img src="banner/b2.gif" />
            </div>
            <div>
              <img src="banner/b3.gif" />
            </div>
            <div>
              <img src="banner/b4.gif" />
            </div>
          </BannerCarousel>
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

        <section style={{ width: "95%", margin: "0 auto", padding: "1rem" }}>
          <Carousel responsive={responsive}>
            <div
              className={styles.dcContainer}
              style={{ backgroundColor: "#fff0e3" }}
            >
              <div className={styles.dcTitle}>Chew Bones</div>
              <div className={styles.dcSubTitle}>Starting at ₹99*</div>
              <img
                className={styles.dcImage}
                src="divCarousel/bone.png"
                alt="bone"
              />
            </div>
            <div
              className={styles.dcContainer}
              style={{ backgroundColor: "#EBECF0" }}
            >
              <div className={styles.dcTitle}>Training Treats</div>
              <div className={styles.dcSubTitle}>Starting at ₹99*</div>
              <img
                className={styles.dcImage}
                src="divCarousel/bone.png"
                alt="bone"
              />
            </div>
            <div
              className={styles.dcContainer}
              style={{ backgroundColor: "#E9FFFD" }}
            >
              <div className={styles.dcTitle}>Dental Treats</div>
              <div className={styles.dcSubTitle}>Starting at ₹99*</div>
              <img
                className={styles.dcImage}
                src="divCarousel/bone.png"
                alt="bone"
              />
            </div>
            <div
              className={styles.dcContainer}
              style={{ backgroundColor: "#fff0e3" }}
            >
              <div className={styles.dcTitle}>Chew Bones</div>
              <div className={styles.dcSubTitle}>Starting at ₹99*</div>
              <img
                className={styles.dcImage}
                src="divCarousel/bone.png"
                alt="bone"
              />
            </div>
          </Carousel>
        </section>

        <section style={{ margin: "2rem 0" }}>
          <div className={styles.pbMain}>
            <div id={styles.pbTitle}>Popular Brands</div>
            <img src="divCarousel/pedigree.png" alt="pedigree logo" />
            <img src="divCarousel/royalcanin.png" alt="royalcanin logo" />
            <img src="divCarousel/himalya.png" alt="himalya logo" />
          </div>
        </section>

        <section style={{ padding: "1rem" }}>
          <div className={styles.gdMain}>
            <img
              id={styles.gdlImage}
              src="groomDog/girldog.png"
              alt="girl holding a dog"
            />
            <div>
              <div id={styles.gdrTitle}>Groom Your Dog</div>
              <div id={styles.gdrSubTitle}>Our Services</div>
              <div className={styles.gdrSubMain}>
                <img src="groomDog/gd1r.png" alt="dog" />
                <div className={styles.gdrContent}>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut l
                </div>
              </div>

              <div className={styles.gdrSubMain}>
                <img src="groomDog/gd2r.png" alt="dog" />
                <div className={styles.gdrContent}>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut l
                </div>
              </div>

              <div className={styles.gdrSubMain}>
                <img src="groomDog/gd3r.png" alt="dog" />
                <div className={styles.gdrContent}>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut l
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

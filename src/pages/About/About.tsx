import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section style={{ padding: "1rem", display: "grid" }}>
          <div className={styles.sMain}>
            <div id={styles.sTitle}>Our Story</div>
            <div id={styles.sSubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut
              enim ad minim v eniam, quis nostrud exercitation uecat Lorem ipsum
              dolor sit amet, consectetur adipis cing elit, sed do eiusmod
              tempor incididunt ut l abore et dolore magna aliqua. Ut enim ad
              minim v eniam, quis nostrud exercitation uecat Lorem ipsum dolor
              sit amet, consectetur adipis cing elit, sed do eiusmod tempor
              incididunt ut l abore et dolore magna aliqua. Ut enim ad minim v
              eniam, quis nostrud exercitation uecat.
            </div>
          </div>
        </section>

        <section style={{ padding: "1rem", marginTop: "3rem" }}>
          <div id={styles.vTitle}>Our Values</div>
          <div className={styles.gdMain}>
            <img
              id={styles.gdlImage}
              src="about/doga.png"
              alt="girl holding a dog"
            />
            <div>
              <div className={styles.gdrContent}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l
              </div>

              <div className={styles.gdrContent}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l
              </div>

              <div className={styles.gdrContent}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: "#000000" }}>
        <div className={styles.fMain}>
          <div className={styles.fContent}>
            <div className={styles.fTitle}>Categories</div>
            <div className={styles.fSubTitle}>
              lorem ipsum • lorem ipsum • lorem ipsum
            </div>
          </div>

          <div className={styles.fContent}>
            <div className={styles.fTitle}>Categories</div>
            <div className={styles.fSubTitle}>
              lorem ipsum • lorem ipsum • lorem ipsum
            </div>
          </div>

          <div className={styles.fContent}>
            <div className={styles.fTitle}>Contact</div>
            <div className={styles.fSubTitle}>Telephone: +55 XX XXXX-XXXX</div>
            <div>Whatsapp: +55 XX XXXXX-XXXX</div>
            <div>E-mail: xxxxxxxx@xxxxxxx.xxx</div>
          </div>

          <div className={styles.fContent}>
            <div className={styles.fTitle}>Hours Active</div>
            <div className={styles.fSubTitle}>loreum ipsum,lorem ipsum</div>
          </div>
        </div>

        <div className={styles.fIconMain}>
          <img src="footer/facebook.png" alt="facebook logo" />
          <img src="footer/insta.png" alt="insta logo" />
          <img src="footer/pin.png" alt="pintrest logo" />
          <img src="footer/twitter.png" alt="twitter logo" />
          <img src="footer/youtube.png" alt="youtube logo" />
        </div>
      </footer>
    </div>
  );
};

export default About;

import Navbar from "../../components/Navbar/Navbar";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section>
          <div id={styles.pTitle}>Our Paws</div>

          <div className={styles.pMain}>
            <div className={styles.pSubMain}>
              <div className={styles.pSubImage}></div>
              <div className={styles.pSubName}>name</div>
              <div className={styles.pSubPos}>
                <b>position currently working at</b>
              </div>
              <div className={styles.pSubCom}>company</div>
            </div>
            <div className={styles.pSubMain}>
              <div className={styles.pSubImage}></div>
              <div className={styles.pSubName}>name</div>
              <div className={styles.pSubPos}>
                <b>position currently working at</b>
              </div>
              <div className={styles.pSubCom}>company</div>
            </div>
            <div className={styles.pSubMain}>
              <div className={styles.pSubImage}></div>
              <div className={styles.pSubName}>name</div>
              <div className={styles.pSubPos}>
                <b>position currently working at</b>
              </div>
              <div className={styles.pSubCom}>company</div>
            </div>
          </div>
        </section>

        <section style={{ padding: "1rem" }}>
          <div id={styles.pTitle}>Bark at us!</div>

          <div className={styles.bauMain}>
            <div className={styles.baulMain}>
              <div id={styles.baulTitle}>We’d love to hear from you!</div>
              <div>For support related queries write to</div>
              <div id={styles.baulEmail}>support@xyz.com</div>
              <div>or Call us on</div>
              <div>
                <b> +91 1234567890</b>
              </div>
              <div>Monday to Friday: 9am to 7pm Saturday: 10am-5pm</div>
            </div>
            <div className={styles.baurMain}>
              <div id={styles.baurTitle}>Office address</div>
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25895663.485556163!2d-95.665!3d37.599999999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1661237136881!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  title="google map for address"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
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

export default Team;

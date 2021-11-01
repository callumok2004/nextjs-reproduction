import type { NextPage } from 'next';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styles from "../styles/pages/Landing.module.scss";

const Landing: NextPage = () => {
  return <>
    <title>Ryft</title>
    <Navigation page="premium" />
    <div className={styles.content}>
      Premium
    </div>
    <Footer />
  </>
}

export default Landing;

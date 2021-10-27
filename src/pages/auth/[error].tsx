import type { NextPage } from 'next';

import styles from "../../styles/pages/Auth.module.scss";

export const getServerSideProps = async (context: any) => {
  const error = context.query.error;
  return {
    props: {
      error
    }
  };
};

const Landing: NextPage = ({ error }: any) => {
  return (
    <div className={styles.content}>
      <div className={styles.errorBox}>
        <title>Ryft • Authentication</title>
        <h1>{error}</h1>
        <span>Redirecting in 3...</span>
      </div>
    </div>
  )
}

export default Landing;

import type { NextPage } from 'next';
import { signIn } from "next-auth/client";
import { useEffect, useState } from "react";

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
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);

      if(count === 1) signIn("discord");
    }, 1000);

    return () => clearInterval(interval);
  })

  return (
    <div className={styles.content}>
      <div className={styles.errorBox}>
        <title>Ryft • Authentication</title>
        <h1>{error}</h1>
        <span>Redirecting in {count}...</span>
      </div>
    </div>
  )
}

export default Landing;

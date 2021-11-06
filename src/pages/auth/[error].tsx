import type { NextPage } from 'next';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
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
  const [count, setCount] = useState(3),
    { data: session } = useSession(),
    router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);

      if (count === 1) signIn("discord");
      if (session) router.push("/", "/", { shallow: true });
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

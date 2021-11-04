import type { NextPage } from 'next';
import { useSession } from "next-auth/react";

import styles from "../../styles/pages/Landing.module.scss";

const Landing: NextPage = () => {
  const { data: session } = useSession()

  console.log(1, session)

  return <>
    <title>Ryft</title>
    <div className={styles.content}>
      dashboard
    </div>
  </>
}

export default Landing;

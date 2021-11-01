import type { NextPage } from 'next';
import { useSession } from "next-auth/client";

import styles from "../../styles/pages/Landing.module.scss";

const Landing: NextPage = () => {
  const [session] = useSession()

  console.log(session)

  return <>
    <title>Ryft</title>
    <div className={styles.content}>
      dashboard
    </div>
  </>
}

export default Landing;

import $ from "jquery";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "../styles/components/Navigation.module.scss";

const Navigation = ({ page }) => {
  const [session] = useSession(),
    router = useRouter();

  function login(out = false) {
    if (!out) signIn("discord");
    else router.push("/dashboard", undefined, { shallow: true });
  }

  useEffect(() => {
    $(`.${styles.center}`).children().map(x => {
      const elem = $(`.${styles.center}`).children()[x];
      if(elem.id.split("-")[0] === page) $(elem).addClass(styles.activePage);

      $(elem).click((x) => {
        x.preventDefault();
        router.replace($(elem).attr("href") as string, $(elem).attr("href") as string, { shallow: true });
      })
    })
  }, []);

  return <div className={styles.base}>
    <div className={styles.left}>
      <img src="https://branding.fyredev.xyz/Ryft/RyftLogoTransparent.png" />
    </div>
    <div className={`${styles.center} ${styles.smallScreen}`}>
      <a className="fas fa-home fa-fw" id="home-1" />
      <a className="fas fa-list fa-fw" id="cmds-1" />
      <a className="fas fa-dollar-sign fa-fw" id="premium-1" />
    </div>
    <div className={`${styles.center} ${styles.bigScreen}`}>
      <a href="/home" id="home-2">Home</a>
      <a href="/commands" id="cmds-2">Commands</a>
      <a href="/premium" id="premium-2">Premium</a>
    </div>
    <div className={styles.right}>
      {!session && <button onClick={() => login(false)} className={styles.button}>Login</button>}
      {session && <button onClick={() => login(true)} className={styles.button}>Dashboard</button>}
    </div>
  </div>
}

export default Navigation;
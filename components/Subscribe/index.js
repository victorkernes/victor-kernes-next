import { useEffect } from 'react';
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.dataset.uid = "982cb29d18";
    scriptEl.src = "https://successful-musician-8227.ck.page/982cb29d18/index.js";
    scriptEl.setAttribute('strategy', 'afterInteractive');
    document.getElementById("subscribe-form").appendChild(scriptEl);
  }, []);

  return (
    <>
      <p className={styles.subscribe}>Subscribe to my personal newsletter</p>
      <div id="subscribe-form" dangerouslySetInnerHTML={{ __html: `<!-- form -->`}} />
    </>
  );
};

export default Subscribe;
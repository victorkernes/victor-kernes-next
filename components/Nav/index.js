import styles from "./Nav.module.css";
import Link from 'next/link';

if (typeof window !== "undefined") {
  function clock() {
    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
  
    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);
}

  const today = new Date();
  const date = (today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear();


const Nav = () => (
  <nav className={styles.Nav}>
    <p className={styles.NavItem}>{date}</p>
    <Link className={styles.NavItem} href="/" alt="Home">Victor Kernes</Link>
    <div className="clock"></div>
  </nav>
);
export default Nav;
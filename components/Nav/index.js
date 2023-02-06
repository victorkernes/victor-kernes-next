import styles from "./Nav.module.css";
import Link from 'next/link';

// if (typeof window !== "undefined") {
//   function clock() {
//     var time = new Date(),
//         hours = time.getHours(),
//         minutes = time.getMinutes(),
//         seconds = time.getSeconds();
  
//     document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
      
//       function harold(standIn) {
//         if (standIn < 10) {
//           standIn = '0' + standIn
//         }
//         return standIn;
//       }
//     }
//     setInterval(clock, 1000);
// }

const date = new Date();
const month = date.toLocaleString('default', {
  month: 'long',
});
const today = month+" "+date.getDate()+" "+date.getFullYear();


const Nav = () => (
  <nav className={styles.Nav}>
    <Link className={styles.NavItem} href="/" alt="Home">Victor Kernes</Link>
    {/* <div className="clock"></div> */}
    <ul className={styles.NavItemGroup}>
      <li className={styles.NavItem}>Home</li>
      <li className={styles.NavItem}>Work</li>
      <li className={styles.NavItem}>About</li>
      <li className={styles.NavItem}>Connect</li>
    </ul>
    <p className={styles.NavItem}>{today}</p>
  </nav>
);
export default Nav;
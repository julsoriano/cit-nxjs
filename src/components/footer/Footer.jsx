import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Cedar IT</div>
      <div className={styles.text}>
        Cedar Internet Technology © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
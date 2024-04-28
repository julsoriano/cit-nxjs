import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar  = () => {
  return (
    <div>
      <div className={styles.container}>
        <div href="/" className={styles.logo}>Cedar IT</div>
        <div>
          <Links/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
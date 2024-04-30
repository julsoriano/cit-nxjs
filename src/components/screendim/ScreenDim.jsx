"use client";
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from "./screendim.module.css"

const ScreenDimension = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>
          Screen Width: {width}&nbsp;
          Screen Height: {height}
        </p>
      </div>
    </div>
  )
}

export default ScreenDimension

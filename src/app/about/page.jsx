import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "CIT Website About Page",
  description: "About description",
};

const AboutPage = () => {

  // console.log("lets check where it works")

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>New World Reference</h2>
        <h1 className={styles.title}>
          Psalm 23
        </h1>
        <p className={styles.desc}>
          Jehovah is my Shepherd
          <br></br>&ensp;I shall lack nothing. 
          <br></br>In grassy pastures he makes me lie down; 
          <br></br>&ensp;By well-watered resting-places he conducts me.
          <br></br>My soul he refreshes. 
          <br></br>&ensp;He leads me in the tracks of righteousness for his name’s sake.
          <br></br>Even though I walk in the valley of deep shadow, 
          <br></br>&ensp;I fear nothing bad, 
          <br></br>For you are with me; 
          <br></br>&ensp;Your rod and your staff are the things that comfort me. 
          <br></br>You arrange before me a table in front of those showing hostility to me. 
          <br></br>&ensp;With oil you have greased my head; 
          <br></br>&ensp;My cup is well filled.
          <br></br>Surely goodness and loving-kindness themselves will pursue me all the days of my life; 
          <br></br>&ensp;And I will dwell in the house of Jehovah to the length of days
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_1280.jpg"
          alt="About Image"
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default AboutPage;


/*
import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}  
          src="/about.png" 
          alt="" 
          fill/>
      </div>
    </div>
  )
}

export default AboutPage;

          <br></br>&ensp;I shall lack nothing. 
          <br></br>In grassy pastures he makes me lie down; 
          <br></br>&ensp;By well-watered resting-places he conducts me.
          <br></br>My soul he refreshes. 
          <br></br>&ensp;He leads me in the tracks of righteousness for his name’s sake.
          <br></br>Even though I walk in the valley of deep shadow, 
          <br></br>&ensp;I fear nothing bad, 
          <br></br>For you are with me; 
          <br></br>&ensp;Your rod and your staff are the things that comfort me. 
          <br></br>You arrange before me a table in front of those showing hostility to me. 
          <br></br>&ensp;With oil you have greased my head; 
          <br></br>&ensp;My cup is well filled.
          <br></br>Surely goodness and loving-kindness themselves will pursue me all the days of my life; 
          <br></br>&ensp;And I will dwell in the house of Jehovah to the length of days
*/
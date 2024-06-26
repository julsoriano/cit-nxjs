import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userID }) => {
  console.log("User: "+ userID)
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userID);
  // console.log("PostUser: " + user);

  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}> */}
        <Image 
          src={user.img ? user.img : "/noavatar.png"}
          alt="" 
          width={50} 
          height={50}
          className={styles.avatar} />
      {/* </div> */}

      {/* <Image 
        className={styles.avatar} 
        src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg' 
        alt="" 
        width={50} 
        height={50}
      /> */}      
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;

import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`);
//   // const res = await fetch(`http://localhost:3052/api/blog/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({params}) => {
  console.log(params);
  const {id, userId} = params;
  console.log( id, userId );
  // const {slug} = params;

  // FETCH DATA WITH AN API
  //const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(id);
  console.log("Post Details");
  console.log(post);
  // console.log("userID: " + `$post.userID`);

   return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.img} />
            </div>
          )}
          {/* <Image 
            className={styles.img} 
            src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg' 
            alt="" 
            fill 
          /> */}
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>

            <div className={styles.detailTextContainer}>
              {post && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userID={post.userID} />
                </Suspense>
              )}

              <div className={styles.detailText}>  
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>{post.createdAt.toString().slice(0, 16)}</span>
              </div>
            </div>
          </div>        
          <div className={styles.content}>{post.desc}</div>
        </div>
    </div>
  );
}

export default SinglePostPage
import Image from "next/image"
import styles from "./postCardSlug.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  // console.log("Post Card");
  // console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        {/* <Image src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg' alt="" fill className={styles.img}/> */}
        </div>
        <span className={styles.date}>05.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <p className={styles.desc}>Post Slug : {post.slug}</p>
        {/* <p className={styles.desc}>Post ID : {post.id}</p> */}
        <Link className={styles.link} href={`/blogslug/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
/**
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}
 */
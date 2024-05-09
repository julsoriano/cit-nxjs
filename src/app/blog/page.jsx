import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  // const res = await fetch("http://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
  const res = await fetch("http://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  // const posts = await getData();
  const posts = await getPosts();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.post}>
  //       <PostCard />
  //       <PostCard />
  //       <PostCard />
  //       <PostCard />
  //       <PostCard />
  //       <PostCard />
  //       <PostCard />
  //     </div> 
  //   </div>
  // )
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        {posts.map((post) => (       
          <PostCard key={post.id} post={post} />        
          )
        )}
      </div>
    </div>
  );  
}

export default BlogPage

/*
// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3052/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );

  // const BlogPage = () => {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.post}>
  //         <PostCard />
  //       </div>
  //       <div className={styles.post}>
  //         <PostCard />
  //       </div>
  //       <div className={styles.post}>
  //         <PostCard />
  //       </div>  
  //       <div className={styles.post}>
  //         <PostCard />
  //       </div>            
  //     </div>
  //   )
  // }


};

export default BlogPage;
*/
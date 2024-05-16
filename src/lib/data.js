import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("getPosts Non-API: "+ posts)
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPostSlug = async (slug) => {
  try {
    connectToDb();
    // console.log("getPostSlug: " + slug);
    const post = await Post.findOne( {slug} );
    // const post = posts.find((post) => post.id == parseInt(id));
    console.log("getPostSlug: " + post);
    return post;

  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getPostID = async (id) => {
  try {
    connectToDb();
    console.log("getPostID: " + id);
    const post = await Post.findOne( { _id: id } );
    //const post = posts.find((post) => post.id == parseInt(id));
    console.log("getPostID: " + post);
    return post;

  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (userID) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(userID);
    // console.log("getUser: " + user);
    return user;
    // return users.find((user) => user.id == id)

  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
    
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

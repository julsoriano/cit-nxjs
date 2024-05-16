import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  console.log("Here at GETAPIid");
  const { id } = params;
  console.log( id );

  try {
    console.log("api/blogidapi/route");
    connectToDb();
    const post = await Post.findOne( { _id: id } );
    console.log("api/blogidapi/route" + post);
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

// export const DELETE = async (request, { params }) => {
//   const { slug } = params;

//   try {
//     connectToDb();

//     await Post.deleteOne({ slug });
//     return NextResponse.json("Post deleted");
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to delete post!");
//   }
// };

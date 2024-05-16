import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  console.log("Here at GET");
  const { slug } = params;
  // const { slug } = params;
  console.log( slug );

  try {
    console.log("api/blogslug/route");
    connectToDb();
    const post = await Post.findOne( { slug } );
    console.log("api/blogslug/route" + post);
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

import React from "react";
//method of data fetching:

//method: 1
// const getPosts = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json();
// }

// method 3
// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (err) {
//     throw new Error("failed to fetch data");
//   }
// };

//method 4
const getPosts = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res.ok){
        throw new Error("failed to fetch posts data")
    }
    return res.json();
}
const PostPage = async () => {
  //method 2
  //  const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  //  const data = await res.json();

  const data = await getPosts(); //method 1,3
  return (
    <div>
      This is post page
      <h4>Total posts: {data.length}</h4>
    </div>
  );
};

export default PostPage;

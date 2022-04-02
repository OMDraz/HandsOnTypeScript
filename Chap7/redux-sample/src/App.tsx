import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "./store/UserReducer";
import UserDisplay from "./UserDisplay";
import { POST_TYPE } from "./store/PostReducer";
import PostDisplay from "./PostDisplay";

function App() {
  const [userid, setUserid] = useState(0);
  const [postid, setPostId] = useState(0);
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userid", useridFromInput);
    setUserid(useridFromInput);
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromInput;
      });
      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city,
        },
      });
    }
  };
  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIDFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("PostId", postIDFromInput);
    setPostId(postIDFromInput);
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postIDFromInput
    );
    if (postsResponse.ok) {
      const post = await postsResponse.json();
      console.log("Post:", post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        },
      });
    }
  };
  return (
    <React.Fragment>
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>user id</label>
          <input value={userid} onChange={onChangeUserId} />
        </div>
        <UserDisplay />
      </div>
      <br />
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>post id</label>
          <input value={postid} onChange={onChangePostId} />
        </div>
        <PostDisplay />
      </div>
    </React.Fragment>
  );
}

export default App;

// Step 1 - Take the USER ID from the input
// Step 2 - Pull the response from the API
// Step 3 - Match and see if there are any users that match the USER ID input
// Step 4 - Hook that sends the daya to reducer for processing
// Step 5 - Reducer

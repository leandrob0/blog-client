import { useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/pub")
      .then((result) => {
        // save to an redux state the posts.
        console.log(result.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Check the posts state, if there are posts (with attribute published true) shows them, else, show there are no posts.
  return (
    <div>
      <h2>Homepage form</h2>
    </div>
  );
};

export default Homepage;

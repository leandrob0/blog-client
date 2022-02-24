import { useEffect } from "react";
//import axios from "axios";

import SinglePost from "../SinglePost";

const Homepage = () => {
  useEffect(() => {
    /* axios
      .get("http://localhost:5000/api/posts/pub")
      .then((result) => {
        // save to an redux state the posts.
        console.log(result.data.posts);
      })
      .catch((err) => {
        console.log(err);
      }); */
      console.log("hola");
  }, []);

  // Check the posts state, if there are posts shows them, else, show there are no posts.
  return (
    <div>
      <div className="flex justify-center items-center mt-6 p-6">
        <h2>Welcome to my blog!</h2>
        {/* I should put a welcome div here. */}
      </div>
      <section className="flex flex-wrap justify-center items-center">
        {/* Check post State and for each show a SinglePost tag (Limit to 6, and add a view all posts NavLink). else show there are no posts. */}
        <SinglePost title="This is my first post!" text="Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt. Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt.Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt.Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt." author="Leandro matias" updatedOrCreated="2022-02-22" />
        <SinglePost title="This is my first post!" text="Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt." author="Leandro matias" updatedOrCreated="2022-02-22" />
        <SinglePost title="This is my first post!" text="Sit velit consequat nisi est.Aute mollit quis in est cillum proident consectetur cupidatat ea Lorem voluptate voluptate voluptate aute.Eu consectetur in in ullamco magna ut exercitation enim.Consectetur ex fugiat laboris et culpa laboris labore dolor aliquip labore anim nulla nostrud commodo.Id magna Lorem exercitation dolore mollit id laborum elit dolore laboris sit dolore et.Voluptate sunt laboris proident duis labore anim irure officia ullamco veniam dolore sint ullamco et.Voluptate pariatur eiusmod Lorem proident velit nostrud anim ad non esse proident quis." author="Leandro matias" updatedOrCreated="2022-02-22" />
        <SinglePost title="This is my first post!" text="Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt." author="Leandro matias" updatedOrCreated="2022-02-22" />
        <SinglePost title="This is my first post!" text="Sit velit consequat nisi est aliquip deserunt eu quis amet.Dolore deserunt enim occaecat eiusmod commodo aliquip do magna do incididunt non tempor nisi.Minim ut esse proident aliquip mollit.Laborum Lorem mollit nulla velit.Proident quis id enim reprehenderit ex occaecat veniam excepteur adipisicing ad et Lorem proident incididunt." author="Leandro matias" updatedOrCreated="2022-02-22" />
      </section>
    </div>
  );
};

export default Homepage;

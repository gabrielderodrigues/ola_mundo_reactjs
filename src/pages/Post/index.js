import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
          <ModelPost
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
          </ModelPost>
        }/>
      </Route>
    </Routes>
  );
}
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const fetchPosts = async (pageNumber) => {
    try {
      const res = await api.get(`/posts?page=${pageNumber}&limit=5`);

      setPosts(res.data.posts);
      setPage(res.data.page);
      setPages(res.data.pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="/create">Create Post</Link>

      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}

      {/* 🔥 PAGINATION */}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span> Page {page} of {pages} </span>

        <button
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
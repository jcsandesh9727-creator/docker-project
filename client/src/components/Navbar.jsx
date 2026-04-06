import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./navbar.css";

const Navbar = () => {
  
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/bag">Bag</Link>
      <Link to="/wishlist">Wishlist</Link>
      {user ? (
        <>
          <span className="nav-user">{user.name}</span>
          <button className="nav-logout" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
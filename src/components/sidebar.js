import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        background: "#333",
        color: "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Charts To Mkt</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/customer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Customer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

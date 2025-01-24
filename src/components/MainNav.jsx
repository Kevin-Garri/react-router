import { NavLink } from "react-router-dom"

function MainNav() {
  return (
    <nav className="conatainer p-3 ">
      <ul className="nav d-flex justify-content-between">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/chi-siamo" className="nav-link">
            Chi Siamo
          </NavLink>
        </li>
        <li>
          <NavLink to="/lista-post" className="nav-link">
            Lista Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/nuovo-post" className="nav-link">
            Aggiungi un Nuovo post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav
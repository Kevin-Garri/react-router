import { NavLink } from "react-router-dom"

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chi-siamo">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/lista-post">Lista Post</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  return (
    <>
      <h1>{diploma.name} Diploma</h1>

      <ul className="module-list">
        {diploma?.modules.map(module => (
          <li className="module" key={module.id}>
            <NavLink 
              className={({isActive}) => (isActive ? "module-active" : null)}
              to={module.id}
            >
              <p className="module-name">{module.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
      
    </>
  );
}

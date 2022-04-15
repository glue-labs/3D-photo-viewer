import { Link } from "react-router-dom";

import "./style.css";
import {
  CAR_DAMAGE_DETECTION,
  DASHBOARD_ROUTE,
} from "../../utils/routeConstants";
import { useLoginHook } from "../../store/hooks/userAuth";

const Header = () => {
  const { logoutUserHandler, userName } = useLoginHook();

  return (
    <div className="header">
      <div>Hi, {userName}</div>

      <div>
        <Link to={DASHBOARD_ROUTE} className="route">
          Panorama
        </Link>
        <Link to={CAR_DAMAGE_DETECTION} className="route">
          Cars Damage
        </Link>
      </div>

      <button onClick={logoutUserHandler}>Sign Out</button>
    </div>
  );
};
export default Header;

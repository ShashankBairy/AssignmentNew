import "./transport.css";
import TransportHead from "./transport-heading";
import TransportImg from "./transport-map-img";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Transport() {
    const location=useLocation();
    const hidebutton = /manage/.test(location.pathname);
  return (
      <div className="transport-container d-flex flex-column justify-content-start">
        <section>
          <TransportHead />
        </section>

        <section>
          <Outlet />
        </section>

        <div className="text-center">
         

         {!hidebutton && (
            <Link to="manage">
            <button className="btn btn-primary w-25">+ Manage Transport</button>
          </Link>
         )}
          
        </div>
      </div>
  );
}

export default Transport;
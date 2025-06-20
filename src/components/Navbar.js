import "../components/navcontent.css";
import { Link ,useLocation} from 'react-router-dom';
import { useState } from "react";

function NavButtons(){
    const location = useLocation();
 const isActive = (path) => {
        // Define StudentProfile child routes (exclude '/' to avoid matching all routes)
        const studentProfileRoutes = [
            '/pocketmoney',
            '/transport-info',
            '/refunds',
            '/otherfeeheads'
        ];

        // For StudentProfile, check exact / or its child routes
        if (path === '/') {
            return location.pathname === '/' || // Exact match for root
                   studentProfileRoutes.some(route => 
                       location.pathname === route || location.pathname.startsWith(route)
                   ) ? "navlink active" : "navlink";
        }
        // For /transport, exclude /transport-info
        if (path === '/transport') {
            return location.pathname.startsWith('/transport') && !location.pathname.startsWith('/transport-info')
                ? "navlink active"
                : "navlink";
        }
        // For other paths, check startsWith to support sub-routes
        return location.pathname.startsWith(path) ? "navlink active" : "navlink";
    };

    const [selectedYear, setSelectedYear] = useState('2024-2025'); 
    return(
        <div style={{width:"100%"}}>
            <div className="nav-and-year-container d-flex justify-content-between align-items-center py-1">
                <nav className="navBar px-0 py-0" style={{width:"80%"}}>
                    <div className="nav-links  gap-3 d-flex justify-center-evenly align-items-center" style={{width:"100%"}}>
                        <Link to="/" className={isActive('/')}>Student Profile</Link>
                        <Link to="/payment" className={isActive('/payment')}>Payments</Link>
                        <Link to="/receipts" className={isActive('/receipts')}>Receipts</Link>
                        <Link to="/transport" className={isActive('/transport')}>Transport</Link>
                        <Link to="/academics" className={isActive('/academics')}>Academics</Link>
                        <Link to="/alerts" className={isActive('/alerts')}>Alerts</Link>
                        <Link to="/history" className={isActive('/history')}>History</Link>
                        <Link to="/room-allotment" className={isActive('/room-allotment')}>Room Allotment</Link>
                    </div>
                </nav>
                <select
                    className="year-select"
                    aria-label="Select academic year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                </select>
            </div>
            </div>
    );
}
export default NavButtons;
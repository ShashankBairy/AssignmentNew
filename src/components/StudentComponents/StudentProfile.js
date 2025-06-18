import "./StudentProfile.css"
import { NavLink, Outlet } from "react-router-dom";
import studentInfo from "../../assets/srichaiinfo.png"
import MetricsGrid from './MetricsGrid';

const StudentProfile = ()=>{
    return(
       <div className="d-flex flex-column">
          <MetricsGrid/>
        <section style={{width:"100%"}}> 
         <div class="student-info-container w-100 d-flex flex-column gap-3 flex-auto">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-0">
                    <div class="d-flex align-items-center gap-2">
                        <img src={studentInfo} className="student-info-img w-20 h-20" />
                        <div>
                            <h2 className="stu-info mb-1 mt-1">Student Information</h2>
                            <p className="stu-info-sub-para mb-0">Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads</p>
                        </div>
                    </div>
                    <select class="year-dropdown p-2 rounded fw-bold border-dark fs-0 flex-grow:0">
                        <option>Inter 2</option>
                        <option>Inter 1</option>
                    </select>
                </div>
                <ul className="nav nav-tabs d-flex gap-2 border-bottom">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Fee Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="pocketmoney"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Pocket Money
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="transportdetails"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Transport Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="refunds"
                            className="nav-link text-decoration-none border-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Refunds
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="otherfeeheads"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Other Fee Heads
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
               <Outlet/>
            </div>


        </section>
       </div>
    )
}

export default StudentProfile;
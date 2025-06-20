import "./StudentProfile.css"
import { NavLink, Outlet } from "react-router-dom";
import studentInfo from "../../assets/srichaiinfo.png"
import MetricsGrid from './MetricsGrid';

const StudentProfile = ()=>{
    return(
       <div className="d-flex flex-column">
          <MetricsGrid/>
        <section style={{width:"100%"}}> 
         <div class="student-info-container w-100 d-flex flex-column gap-3 flex-auto mt-3">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-0">
                    <div class="d-flex align-items-center gap-2">
                        <img src={studentInfo} className="student-info-img w-20 h-20" />
                        <div>
                            <h2 className="stu-info mb-1 mt-1 ">Student Information</h2>
                            <p className="stu-info-sub-para mb-0">Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads</p>
                        </div>
                    </div>
                    <select class="year-dropdown py-2 px-2 fs-0">
                        <option>Inter 2</option>
                        <option>Inter 1</option>
                    </select>
                </div>
                <ul className="nav nav-tabs d-flex gap-2 ">
                    <li className="nav-item pb-3">
                        <NavLink
                            to="/"
                            className="nav_link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '1rem',
                                fontWeight:isActive ? '700' : '400',
                                color: isActive ? '#3425FF' : '#555',
                                borderBottom: isActive ? '0.2vh solid #3425FF' : 'none'
                            })}
                        >
                            Fee Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="pocketmoney"
                            className="nav_link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '1rem',
                                fontWeight:isActive ? '700' : '400',
                                color: isActive ? '#3425FF' : '#555',
                                borderBottom: isActive ? '0.2vh solid #3425FF' : 'none'
                            })}
                        >
                            Pocket Money
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="transport-info"
                            className="nav_link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '1rem',
                                fontWeight:isActive ? '700' : '400',
                                color: isActive ? '#3425FF' : '#555',
                                borderBottom: isActive ? '0.2vh solid #3425FF' : 'none'
                            })}
                        >
                            Transport Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="refunds"
                            className="nav_link text-decoration-none border-none "
                            style={({ isActive }) => ({
                                fontSize: '1rem',
                                fontWeight:isActive ? '700' : '400',
                                color: isActive ? '#3425FF' : '#555',
                                borderBottom: isActive ? '0.2vh solid #3425FF' : 'none'
                            })}
                        >
                            Refunds
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="otherfeeheads"
                            className="nav_link text-decoration-none"
                             style={({ isActive }) => ({
                                fontSize: '1rem',
                                fontWeight:isActive ? '700' : '400',
                                color: isActive ? '#3425FF' : '#555',
                                borderBottom: isActive ? '0.2vh solid #3425FF' : 'none'
                            })}
                        >
                            Other Fee Heads
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div >
               <Outlet/>
            </div>
        </section>
       </div>
    )
}

export default StudentProfile;
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';
import useNavigation from "../../customhooks/useNav";
import {NavLink, Outlet } from "react-router-dom";

const Payment= ()=> {
  const { subTabs } = useNavigation();

  return (
    <div className="container-fluid p-0 m-0" style={{width:"100%", height:"100%"}}>
      <div className="row" style={{height:"100%"}}>
        <div className="col-12 p-0" style={{height:"100%"}}>
          {/* Header */}
          <div className="headerclass">
          <div className="d-flex align-items-start gap-3 p-3 rounded-3  ">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <rect x="3" y="3" width="42" height="42" rx="7" fill="url(#paint0_linear)" />
                <rect x="3" y="3" width="42" height="42" rx="7" fill="black" fillOpacity="0.2" />
                <path d="M17.0001 18.8136C17.0001 18.2474 17.459 17.7885 18.0252 17.7885H23.9823C23.9056 17.3784 23.776 17.0074 23.5936 16.6755C23.4209 16.3338 23.1713 16.0458 22.845 15.8115C22.5283 15.5674 22.13 15.3819 21.6501 15.255C21.1798 15.1183 20.6184 15.05 19.9657 15.05H18.0252C17.459 15.05 17.0001 14.591 17.0001 14.0249C17.0001 13.4587 17.459 12.9998 18.0252 12.9998H28.9749C29.5411 12.9998 30.0001 13.4587 30.0001 14.0249C30.0001 14.591 29.5411 15.05 28.9749 15.05H25.278C25.5563 15.4112 25.7819 15.8212 25.9546 16.2801C26.137 16.7292 26.257 17.232 26.3146 17.7885H28.9749C29.5411 17.7885 30.0001 18.2474 30.0001 18.8136C30.0001 19.3797 29.5411 19.8387 28.9749 19.8387H26.2426C26.041 21.0102 25.5659 22.0109 24.8173 22.8408C24.0783 23.6608 23.1377 24.2271 21.9956 24.5395V24.5981C22.3219 24.7543 22.6195 24.9349 22.8882 25.1399C23.1569 25.3449 23.4161 25.5841 23.6656 25.8575C23.9152 26.1211 24.1599 26.4286 24.3998 26.7801C24.6494 27.1316 24.9133 27.5318 25.1916 27.9809L27.7849 32.2327C28.2572 33.007 27.6999 33.9998 26.7929 33.9998C26.3806 33.9998 25.9993 33.7813 25.7906 33.4258L22.845 28.4056C22.5283 27.8687 22.226 27.3952 21.938 26.9851C21.6597 26.5751 21.3574 26.2334 21.0311 25.96C20.7143 25.6866 20.3592 25.4816 19.9657 25.3449C19.5818 25.2083 19.1307 25.1399 18.6125 25.1399H18.0032C17.4492 25.1399 17.0001 24.6908 17.0001 24.1368C17.0001 23.5828 17.4492 23.1336 18.0032 23.1336H19.9513C20.4408 23.1336 20.9063 23.0555 21.3478 22.8993C21.7893 22.7334 22.1828 22.5088 22.5283 22.2257C22.8834 21.9328 23.1809 21.5862 23.4209 21.1859C23.6704 20.7759 23.848 20.3268 23.9535 19.8387H18.0252C17.459 19.8387 17.0001 19.3797 17.0001 18.8136Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d" x="0.95" y="0.95" width="46.1" height="46.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.02439" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="3" y1="3" x2="45" y2="45" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#402CF7" />
                  <stop offset="1" stopColor="#6E37EE" />
                </linearGradient>
              </defs>
            </svg>

            <div>
              <h1 className="fw-bold fs-5 mb-1">Payments</h1>
              <p className="text-muted mb-0 small">
                Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="custom-tabs mb-3 mt-0">
         <div className="tab-wrapper">
              {subTabs.map((tab, index) => (
                <NavLink
                  key={index}
                  to={tab.path}
                  className={({ isActive }) => (isActive ? 'sub-tab active' : 'sub-tab')}
                  end={tab.path === '/payment'}
                  >
                    {tab.name}
                  </NavLink>
              ))}
            </div>
          </div>
          </div>

          {/* Tab Content */}
          <div style={{
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
         
          }}>
            <Outlet/>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default Payment;
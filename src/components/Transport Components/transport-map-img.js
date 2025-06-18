import map from "../../assets/transport/trans-map.png"
import routeNum from "../../assets/transport/route-num.png"
import greenDot from "../../assets/transport/green-dot.png"
import redDot from "../../assets/transport/red-dot.png"
import redUnion from "../../assets/transport/red-union.png"
import greenUnion from "../../assets/transport/green-union.png"
import redText from "../../assets/transport/red-box-text.png"
import greenText from "../../assets/transport/green-box-text.png"
import "./transport-map-img.css"
function TransportImg() {
    return (




        <div className="position-relative">
            <img src={map} className="map-img " />
            <div>
                <div className="route-direction ">
                    <svg width="271" height="67" viewBox="0 0 271 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 24.5L21.2492 31.5424C22.0812 31.8468 22.8811 32.2279 23.6392 32.6863C27.1911 34.8338 32.7829 38.2829 33.5 39C34.2264 39.7264 42.4275 45.4542 47.5488 48.9975C48.5124 49.6642 49.5563 50.2049 50.6558 50.61L58.5 53.5C60 54.1667 63.2 55.8 64 57C64.6556 57.9833 66.9227 57.6908 68.5454 57.278C69.1874 57.1147 69.7974 56.8513 70.3899 56.555L71.1285 56.1857C72.6956 55.4022 74.1016 54.3315 75.2737 53.0293L76.9385 51.1794C77.6439 50.3957 78.2585 49.5347 78.7706 48.6129L81.2342 44.1785C82.3922 42.0941 84.0634 40.34 86.0893 39.0825L95.9863 32.9396C96.9914 32.3157 97.9133 31.567 98.7302 30.7113L107.112 21.9301C107.703 21.3113 108.349 20.748 109.042 20.2472L116.08 15.1647C116.692 14.7223 117.34 14.3302 118.015 13.9923L124 11L131.881 6.0225C132.955 5.34399 134.117 4.81489 135.334 4.44978L140.083 3.02496C142.325 2.3524 144.7 2.25265 146.99 2.73484L153 4L161.425 4.80234C162.801 4.93339 164.15 5.2675 165.428 5.79379L172 8.5L188.351 15.5076C189.116 15.8352 189.908 16.0941 190.718 16.2811L202.5 19L213.5 22.5L222.853 24.6256C223.947 24.8743 225.007 25.2536 226.011 25.7555L230.371 27.9354C231.122 28.3111 231.838 28.7535 232.51 29.2574L236.192 32.0188C237.061 32.6707 237.851 33.4216 238.547 34.2563L242.5 39L248 47.5L250.799 51.4991C251.266 52.1651 251.673 52.8705 252.017 53.6072L252.528 54.7023C254.11 58.0923 257.004 60.6579 260.473 62.0571C261.539 62.4869 262.345 62.8455 262.5 63C262.9 63.4 267 64.8333 269 65.5" stroke="url(#paint0_linear_1_38961)" stroke-width="3" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1_38961" x1="2" y1="33.75" x2="269" y2="33.75" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BD0F0F" />
                                <stop offset="1" stop-color="#19C019" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="route-num">
                <img src={routeNum} />
            </div>


            <div>
                <img src={redDot} className="red-dot" />
            </div>


            <div>
                <img src={greenDot} className="green-dot" />
            </div>

            <div>
                <img src={redUnion} className="red-union" />
            </div>

            <div>
                <img src={greenUnion} className="green-union" />
            </div>


            <div>
                <img src={redText} className="red-text" />
            </div>

            <div>
                <img src={greenText} className="green-text" />
            </div>


        </div>






        /* <div>Miyapur</div>
        <div>KPHB</div> */


    );
}
export default TransportImg;
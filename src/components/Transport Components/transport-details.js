import "./transport-details.css"
import TransportImg from "./transport-map-img";
function TransDetails() {
    return (
        <div>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 pt-5 px-5">
                        <div className="trans-details-cont d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <p className="mb-0">Academic Year</p>
                                <span>2014-2015</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <p className="mb-0">Transport Type</p>
                                <span>Miyapur-KPHB</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <p className="mb-0">Transport Status</p>
                                <span>Assigned</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <p className="mb-0">Stage</p>
                                <span>Addanki</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 px-0">
                        <TransportImg />
                    </div>
                </div>


            </div>
        </div>
    );
}
export default TransDetails;
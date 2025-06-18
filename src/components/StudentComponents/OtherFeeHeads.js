import "./otherfeeheads.css"
import {useStudentMajorInfo} from "../../backend/queries";

function OtherFeeHeads() {
  const{data, isLoading, isError, error} = useStudentMajorInfo();
    console.log(data);

    if (isLoading) {
    return <div className="container-fluid px-0 mt-4">Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return (
      <div className="container-fluid px-0 mt-4">
        Error: {error?.message || "Failed to load student profile"}
      </div>
    );
  }

//   Handle no data
  if (!data) {
    return (
      <div className="container-fluid px-0 mt-4">
        No student profile data available.
      </div>
    );
  }


    return (
        <div className="fee-head-container d-flex justify-content-column flex-wrap gap-5 pt-4 ps-5">
            <div className="fee-head-column flex-1">
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Akash Books</span>
                    <span>{data.akash_books || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Bus Pass</span>
                    <span>{data.bus_pss || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Caution Deposit</span>
                    <span>{data.caution_deposite || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>CRD Books</span>
                    <span>{data.crd_books || "N/A"}</span>
                </div>
            </div>
            <div className="fee-head-column2 flex-1">
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Miscellaneous</span>
                    <span>{data.miscellaneous || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>STD Wellfare Fund</span>
                    <span>{data.std_welfare_fund || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Material</span>
                    <span>{data.material || "N/A"}</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>EAMCET App Free</span>
                    <span>{data.eamcet_app_fee || "N/A"}</span>
                </div>
            </div>


        </div>

    );
}
export default OtherFeeHeads;
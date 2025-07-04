import "./otherfeeheads.css"
import {useStudentMajorInfo} from "../../backend/queries";

function OtherFeeHeads() {
//   const{data, isLoading, isError, error} = useStudentMajorInfo();
//     console.log(data);

//     if (isLoading) {
//     return <div className="container-fluid px-0 mt-4">Loading...</div>;
//   }

//   // Handle error state
//   if (isError) {
//     return (
//       <div className="container-fluid px-0 mt-4">
//         Error: {error?.message || "Failed to load student profile"}
//       </div>
//     );
//   }

// //   Handle no data
//   if (!data) {
//     return (
//       <div className="container-fluid px-0 mt-4">
//         No student profile data available.
//       </div>
//     );
//   }


    return (
        <div className="fee-head-container d-flex justify-content-column flex-wrap gap-5 pt-4 ps-5">
            <div className="fee-head-column flex-1">
                <div id="details" className="fee-head-row d-flex justify-content-between py-2  align-items-center ">
                    <span>Akash Books</span>
                    <span>{ "N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2  align-items-center ">
                    <span>Bus Pass</span>
                    <span>{"N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2  align-items-center ">
                    <span>Caution Deposit</span>
                    <span>{"N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2 align-items-center">
                    <span>CRD Books</span>
                    <span>{"N/A"}</span>
                </div>
            </div>
            <div className="fee-head-column2 flex-1">
                <div id="details" className="fee-head-row d-flex justify-content-between py-2  align-items-center">
                    <span>Miscellaneous</span>
                    <span>{"N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2 align-items-center">
                    <span>STD Wellfare Fund</span>
                    <span>{ "N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2 align-items-center">
                    <span>Material</span>
                    <span>{"N/A"}</span>
                </div>
                <div id="details" className="fee-head-row d-flex justify-content-between py-2 align-items-center">
                    <span>EAMCET App Free</span>
                    <span>{"N/A"}</span>
                </div>
            </div>


        </div>

    );
}
export default OtherFeeHeads;
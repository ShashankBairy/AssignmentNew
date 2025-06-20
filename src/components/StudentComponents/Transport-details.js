import "./transportdetails.css";
import TransportImage from "../../assets/transport-img.png";
import {useStudentMajorInfo} from "../../backend/queries"
function TransportDetails() {
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

      <div>
      <div className="d-flex justify-content-between align-items-start flex-nowrap p-5 transport-container">
        <div className="d-flex flex-column gap-4 flex-fill transport-info ">
          <div id="details" className="d-flex justify-content-between align-items-center transport-row w-50 h-5">
            <p className="mb-0 transport-label fs-6">Academic Year</p>
            <span>{"N/A"}</span>
          </div>
          <div id="details" className="d-flex justify-content-between align-items-center transport-row w-50 h-5">
            <p className="mb-0 transport-label fs-6">Transport Type</p>
            <span>Addanki - Miyapur</span>
          </div>
          <div id="details" className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Transport Status</p>
            <span>Assigned</span>
          </div>
          <div id="details" className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Stage</p>
            <span>Addanki</span>
          </div>
        </div>
        <div className="transport-visual d-flex flex-column align-items-end flex-1">
          <img src={TransportImage} alt="transportimage" className="transport-image"></img>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary fw-bold px-4 py-2">+ Manage Transport</button>
      </div>
    </div>
    );
}

export default TransportDetails;
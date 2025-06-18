import "./FeeDetails.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TermPaymentChart from "./UnpaidChart";
import {useStudentMajorInfo} from "../../backend/queries"

function FeeDetails() {
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
        <div>
                <div class="fee-summary-container d-flex justify-content-start flex-wrap gap-4 bg-white rounded-4">
                <div class="d-flex flex-column gap-2 flex-grow-1 min-vw-25 pt-3 ps-2 fs-6">
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Course Fee</span><span>{data.courseFee}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Add Amount</span><span>{data.addiAmount}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Concession</span><span>0</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Net Fee</span><span>{data.netFee}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Service Tax Paid</span><span>{data.serviceTaxPaid}</span>
                    </div>
                </div>
 
 
                <div class="d-flex flex-column gap-2 flex-grow-1 min-vw-25 pt-3 ps-4 fs-6">
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Fee Paid</span><span>{data.feePaid}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1 ">
                        <span>Fee Deduction</span><span>{data.feeDeducation}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Fee Refund</span><span>{data.feeRefund}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Over All Due</span><span>{data.overAlldue}</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Service Tax To Be Paid</span><span>{data.serviceTaxToBePaid}</span>
                    </div>
                </div>
 
                <div className="payment-chart">
                    <TermPaymentChart />
                </div>
            </div>
 
            <div class="payment-button-container">
                <button class="btn btn-primary px-4 py-2 fs-6 rounded-3 border-0">
                    + Proceed to Payment
                </button>
 
            </div>
        </div>
    );
}
 
export default FeeDetails;
 
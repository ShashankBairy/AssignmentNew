import { useFormik } from "formik";
import * as Yup from "yup";
import "./Cancellation.css";

const Cancellation = () => {
  const formik = useFormik({
    initialValues: {
      receiptNo: "",
      prePrintReceiptNo: "",
      paidAmount: "",
      notes: "",
    },
    validationSchema: Yup.object({
      receiptNo: Yup.string()
        .required("Receipt No is required")
        .matches(/^\d+$/, "Must be only digits"),
      prePrintReceiptNo: Yup.string()
        .required("Pre Print Receipt No is required")
        .matches(/^\d+$/, "Must be only digits"),
      paidAmount: Yup.number()
        .typeError("Must be a number")
        .positive("Must be a positive amount")
        .required("Paid Amount is required"),
      notes: Yup.string().required("Notes are required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="cancellation-container container my-4">
      <div>
        <h5 className="fw-bold mt-5">Request Cancellation</h5>
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <p className="text-muted small mb-0 flex-grow-1">
            Students can submit a fee cancellation request, which will be reviewed and<br />
            processed by the department officer (DO) for approval.
          </p>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-gradient d-flex align-items-center gap-2 px-3 py-2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0001 11.7501H15.4167C16.2026 11.7501 16.5951 11.7501 16.8392 11.5059C17.0834 11.2617 17.0834 10.8692 17.0834 10.0834V9.25008C17.0834 7.67841 17.0834 6.89341 16.5951 6.40508C16.1067 5.91675 15.3217 5.91675 13.7501 5.91675H6.25008C4.67841 5.91675 3.89341 5.91675 3.40508 6.40508C2.91675 6.89341 2.91675 7.67841 2.91675 9.25008V10.9167C2.91675 11.3092 2.91675 11.5059 3.03841 11.6284C3.16091 11.7501 3.35758 11.7501 3.75008 11.7501H5.00008" stroke="white" stroke-width="1.2"/>
<path d="M5.41675 17.0051V10.0834C5.41675 9.29758 5.41675 8.90508 5.66091 8.66091C5.90508 8.41675 6.29758 8.41675 7.08341 8.41675H12.9167C13.7026 8.41675 14.0951 8.41675 14.3392 8.66091C14.5834 8.90508 14.5834 9.29758 14.5834 10.0834V17.0051C14.5834 17.2692 14.5834 17.4009 14.4967 17.4634C14.4101 17.5259 14.2851 17.4842 14.0351 17.4009L12.2284 16.7984C12.1828 16.7782 12.134 16.7664 12.0842 16.7634C12.0345 16.7692 11.9863 16.7839 11.9417 16.8067L10.1551 17.5217C10.1069 17.547 10.0542 17.5626 10.0001 17.5676C9.94592 17.5626 9.89326 17.547 9.84508 17.5217L8.05841 16.8067C7.98841 16.7784 7.95341 16.7651 7.91675 16.7634C7.88008 16.7617 7.84341 16.7742 7.77175 16.7984L5.96508 17.4009C5.71508 17.4842 5.59008 17.5259 5.50341 17.4634C5.41675 17.4009 5.41675 17.2692 5.41675 17.0051Z" stroke="white" stroke-width="1.2"/>
<path d="M7.91675 11.75H11.2501M7.91675 14.25H12.0834" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
<path d="M14.5834 5.91671V5.58337C14.5834 4.16921 14.5834 3.46171 14.1442 3.02254C13.7051 2.58337 12.9976 2.58337 11.5834 2.58337H8.41675C7.00258 2.58337 6.29508 2.58337 5.85591 3.02254C5.41675 3.46171 5.41675 4.16921 5.41675 5.58337V5.91671" stroke="white" stroke-width="1.2"/>
</svg>

              <span className="text-white fw-semibold">Receipt Print</span>
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 px-3 py-2">
                <span className="fw-semibold">History</span>
             <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18C8.25 18 6.70139 17.4689 5.35417 16.4067C4.00694 15.3444 3.13194 13.9867 2.72917 12.3333C2.67361 12.125 2.71528 11.9342 2.85417 11.7608C2.99306 11.5875 3.18056 11.4867 3.41667 11.4583C3.63889 11.4306 3.84028 11.4722 4.02083 11.5833C4.20139 11.6944 4.32639 11.8611 4.39583 12.0833C4.72917 13.3333 5.41667 14.3542 6.45833 15.1458C7.5 15.9375 8.68056 16.3333 10 16.3333C11.625 16.3333 13.0036 15.7675 14.1358 14.6358C15.2681 13.5042 15.8339 12.1256 15.8333 10.5C15.8328 8.87444 15.2669 7.49611 14.1358 6.365C13.0047 5.23389 11.6261 4.66778 10 4.66667C9.04167 4.66667 8.14583 4.88889 7.3125 5.33333C6.47917 5.77778 5.77778 6.38889 5.20833 7.16667H6.66667C6.90278 7.16667 7.10083 7.24667 7.26083 7.40667C7.42083 7.56667 7.50056 7.76444 7.5 8C7.49944 8.23556 7.41944 8.43361 7.26 8.59417C7.10056 8.75472 6.90278 8.83444 6.66667 8.83333H3.33333C3.09722 8.83333 2.89944 8.75333 2.74 8.59333C2.58056 8.43333 2.50056 8.23556 2.5 8V4.66667C2.5 4.43056 2.58 4.23278 2.74 4.07333C2.9 3.91389 3.09778 3.83389 3.33333 3.83333C3.56889 3.83278 3.76694 3.91278 3.9275 4.07333C4.08806 4.23389 4.16778 4.43167 4.16667 4.66667V5.79167C4.875 4.90278 5.73972 4.21528 6.76083 3.72917C7.78194 3.24306 8.86167 3 10 3C11.0417 3 12.0175 3.19806 12.9275 3.59417C13.8375 3.99028 14.6292 4.52472 15.3025 5.1975C15.9758 5.87028 16.5106 6.66194 16.9067 7.5725C17.3028 8.48306 17.5006 9.45889 17.5 10.5C17.4994 11.5411 17.3017 12.5169 16.9067 13.4275C16.5117 14.3381 15.9769 15.1297 15.3025 15.8025C14.6281 16.4753 13.8364 17.01 12.9275 17.4067C12.0186 17.8033 11.0428 18.0011 10 18ZM10.8333 10.1667L12.9167 12.25C13.0694 12.4028 13.1458 12.5972 13.1458 12.8333C13.1458 13.0694 13.0694 13.2639 12.9167 13.4167C12.7639 13.5694 12.5694 13.6458 12.3333 13.6458C12.0972 13.6458 11.9028 13.5694 11.75 13.4167L9.41667 11.0833C9.33333 11 9.27083 10.9064 9.22917 10.8025C9.1875 10.6986 9.16667 10.5908 9.16667 10.4792V7.16667C9.16667 6.93056 9.24667 6.73278 9.40667 6.57333C9.56667 6.41389 9.76444 6.33389 10 6.33333C10.2356 6.33278 10.4336 6.41278 10.5942 6.57333C10.7547 6.73389 10.8344 6.93167 10.8333 7.16667V10.1667Z" fill="#252C32"/>
</svg>

              
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4 cancellation-form-wrapper mt-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="receiptNo" className="form-label">
                Receipt No
              </label>
              <input
                type="text"
                id="receiptNo"
                name="receiptNo"
                className={`form-control ${
                  formik.touched.receiptNo && formik.errors.receiptNo ? "is-invalid" : ""
                }`}
                placeholder="Enter receipt number"
                {...formik.getFieldProps("receiptNo")}
              />
              {formik.touched.receiptNo && formik.errors.receiptNo && (
                <div className="invalid-feedback">{formik.errors.receiptNo}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="prePrintReceiptNo" className="form-label">
                Pre Print Receipt No
              </label>
              <input
                type="text"
                id="prePrintReceiptNo"
                name="prePrintReceiptNo"
                className={`form-control ${
                  formik.touched.prePrintReceiptNo && formik.errors.prePrintReceiptNo
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Enter pre-printed receipt no"
                {...formik.getFieldProps("prePrintReceiptNo")}
              />
              {formik.touched.prePrintReceiptNo && formik.errors.prePrintReceiptNo && (
                <div className="invalid-feedback">{formik.errors.prePrintReceiptNo}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="paidAmount" className="form-label">
                Paid Amount
              </label>
              <input
                type="text"
                id="paidAmount"
                name="paidAmount"
                className={`form-control ${
                  formik.touched.paidAmount && formik.errors.paidAmount ? "is-invalid" : ""
                }`}
                placeholder="Enter paid amount"
                {...formik.getFieldProps("paidAmount")}
              />
              {formik.touched.paidAmount && formik.errors.paidAmount && (
                <div className="invalid-feedback">{formik.errors.paidAmount}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                className={`form-control ${
                  formik.touched.notes && formik.errors.notes ? "is-invalid" : ""
                }`}
                placeholder="Enter any notes or reason"
                {...formik.getFieldProps("notes")}
              />
              {formik.touched.notes && formik.errors.notes && (
                <div className="invalid-feedback">{formik.errors.notes}</div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn submit-btn px-4 py-2">
              Request Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cancellation;
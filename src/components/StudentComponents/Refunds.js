import "./refunds.css"
function Refunds() {
  return (
    <>
      <div className="refund-container d-flex flex-wrap align-content-start ps-5 pt-5 gap-4">
        <div className="refund-item d-flex justify-content-between w-100 fs-6 text-muted">
          <span>Akash Books</span>
          <span>0</span>
        </div>
        <div className="refund-item d-flex justify-content-between w-100 fs-6 text-muted">
          <span>Bus Pass</span>
          <span>0</span>
        </div>
        <div className="refund-item d-flex justify-content-between w-100 fs-6 text-muted">
          <span>Caution Deposit</span>
          <span>0</span>
        </div>
        <div className="refund-item d-flex justify-content-between w-100 fs-6 text-muted">
          <span>Material</span>
          <span>0</span>
        </div>
      </div>

    </>
  );

}
export default Refunds;
import { usePaymentTable } from '../../customhooks/usePaymentTable';
import './PaymentsTable.css';

export function PaymentTable({ onBackToForm }) {
  const { table, columns, data, isLoading, isError, error, flexRender } = usePaymentTable();

  // Debug: Log data and table rows
  console.log('PaymentTable data:', data);
  console.log('Table rows:', table.getRowModel().rows);

  const handleCreatePayment = () => {
    console.log("Create New Payment clicked");
    // Add logic to handle new payment creation, e.g., navigate to a form
  };

  if (isLoading) {
    return (
      <main className="payment-container container py-4">
        <div className="payment-card shadow-sm rounded-3 border mb-4">
          <div className="payment-header d-flex justify-content-between align-items-center p-3 border-bottom">
            <h6 className="mb-0 fw-semibold text-body-secondary">Previous Payments</h6>
          </div>
          <div className="text-center p-3">Loading...</div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="payment-container container py-4">
        <div className="payment-card shadow-sm rounded-3 border mb-4">
          <div className="payment-header d-flex justify-content-between align-items-center p-3 border-bottom">
            <h6 className="mb-0 fw-semibold text-body-secondary">Previous Payments</h6>
          </div>
          <div className="text-center p-3 text-danger">
            Error: {error?.message || 'Failed to load payment history'}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="payment-container container py-4">
      <div className="payment-card shadow-sm rounded-3 border mb-4">
        <div className="payment-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <h6 className="mb-0 fw-semibold text-body-secondary">Previous Payments for HYD 253456789</h6>
          <button className="btn btn-export d-flex align-items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 2.25V5.25C10.5 5.44891 10.579 5.63968 10.7197 5.78033C10.8603 5.92098 11.0511 6 11.25 6H14.25"
                stroke="#4876EE"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.625 15.75H5.25C4.85218 15.75 4.47064 15.592 4.18934 15.3107C3.90804 15.0294 3.75 14.6478 3.75 14.25V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H10.5L14.25 6V9.75M10.5 14.25H15.75M15.75 14.25L13.5 12M15.75 14.25L13.5 16.5"
                stroke="#4876EE"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Export
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-sm align-middle table-borderless payment-table mb-0">
            <thead className="table-light small text-uppercase text-secondary border-bottom">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="py-2 px-3"
                      onClick={header.column.getToggleSortingHandler()}
                      style={{ cursor: 'pointer' }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'asc' ? (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L9 7H3L6 3Z" fill="#4876EE" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L3 5H9L6 9Z" fill="#4876EE" />
                          </svg>
                        )
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="small text-dark">
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="text-center py-3">
                    No payments found
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="border-bottom">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="py-2 px-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-4"
          onClick={handleCreatePayment}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm3 7a.5.5 0 0 0-.5-.5H8.5V5.5a.5.5 0 0 0-1 0V7.5H5.5a.5.5 0 0 0 0 1H7.5V10.5a.5.5 0 0 0 1 0V8.5H10.5a.5.5 0 0 0 .5-.5z" />
          </svg>
          Create New Payment
        </button>
      </div>
    </main>
  );
}

export default PaymentTable;
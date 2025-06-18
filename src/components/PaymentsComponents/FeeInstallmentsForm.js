import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HistoryIcon from '@mui/icons-material/History';

// Import the background image
import backgroundImage from '../../assets/transport/backgroundImage.png';

// Validation schema using Yup
const validationSchema = Yup.object({
  cardNo: Yup.string().required('Card No is required'),
  depositAmount: Yup.number().required('Deposit Amount is required').positive('Deposit Amount must be positive'),
  issueAmount: Yup.number().required('Issue Amount is required').positive('Issue Amount must be positive'),
  pocketMoneyBalance: Yup.number().positive('Pocket Money Balance must be positive'),
  payAmount: Yup.number().required('Pay Amount is required').positive('Pay Amount must be positive'),
  description: Yup.string(),
  issueDate: Yup.date().required('Issue Date is required').nullable(),
  paymentMode: Yup.string().required('Payment Mode is required'),
  remarks: Yup.string(),
});

const FeeInstalmentsForm = () => {
  const initialValues = {
    cardNo: '',
    depositAmount: '',
    issueAmount: '',
    pocketMoneyBalance: '',
    payAmount: '',
    description: '',
    issueDate: '',
    paymentMode: '',
    remarks: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div
      className="p-4 mt-2 ms-5 me-5"
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>Fee Instalments</h3>
          <p className="text-muted">
            Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
          </p>
        </div>
        <Stack direction="row" spacing={2}>
          
          <Button
            variant="outlined"
            color="inherit"
            endIcon={<HistoryIcon />}
            sx={{
              borderColor: '#d3d3d3',
              color: '#606060',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: '#d3d3d3',
              },
               textTransform: 'none',
            }}
          >
            History
          </Button>
        </Stack>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Add the background image to the form container */}
            <div
              className="border border-1 rounded-3 p-3 position-relative"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maxHeight: '45vh',
                overflowX: 'hidden',
                overflowY: 'auto',
              }}
            >
              <div
                className="bg-primary p-1 rounded-top-3 position-absolute top-0 start-0 end-0"
                style={{ marginTop: '-1px', marginLeft: '-1px', marginRight: '-1px', height: '2px' }}
              ></div>
              <div className="row mb-3" style={{ marginTop: '40px' }}>
                {/* Left Column: Card No, Deposit Amount, Issue Amount, Pocket Money Balance, Pay Amount */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="cardNo" className="form-label">Card No</label>
                    <Field
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      className="form-control rounded-3"
                      placeholder="Enter Card No"
                    />
                    <ErrorMessage name="cardNo" component="div" className="text-danger" />
                  </div>

                

                  <div className="mb-3">
                    <label htmlFor="issueAmount" className="form-label">Issue Amount</label>
                    <Field
                      type="number"
                      id="issueAmount"
                      name="issueAmount"
                      className="form-control rounded-3"
                      placeholder="Enter Issue Amount"
                    />
                    <ErrorMessage name="issueAmount" component="div" className="text-danger" />
                  </div>

                  

                  <div className="mb-3">
                    <label htmlFor="payAmount" className="form-label">Pay Amount</label>
                    <Field
                      type="number"
                      id="payAmount"
                      name="payAmount"
                      className="form-control rounded-3"
                      placeholder="Enter Pay Amount"
                    />
                    <ErrorMessage name="payAmount" component="div" className="text-danger" />
                  </div>
                   <div className="mb-3">
                    <label htmlFor="issueDate" className="form-label">Issue Date</label>
                    <Field
                      type="date"
                      id="issueDate"
                      name="issueDate"
                      className="form-control rounded-3"
                    />
                    <ErrorMessage name="issueDate" component="div" className="text-danger" />
                  </div>
                    <div className="mb-3">
                    <label htmlFor="remarks" className="form-label">Remarks</label>
                    <Field
                      type='input'
                      id="remarks"
                      name="remarks"
                      className="form-control rounded-3"
                      rows="2"
                      placeholder="Enter Remarks"
                    />
                    <ErrorMessage name="remarks" component="div" className="text-danger" />
                  </div>
                </div>

                {/* Right Column: Description, Issue Date, Payment Mode, Remarks */}
                <div className="col-md-6">
                  <div className="mb-3">
                      <div className="mb-3">
                    <label htmlFor="depositAmount" className="form-label">Deposit Amount</label>
                    <Field
                      type="number"
                      id="depositAmount"
                      name="depositAmount"
                      className="form-control rounded-3"
                      placeholder="Enter Deposit Amount"
                    />
                    <ErrorMessage name="depositAmount" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pocketMoneyBalance" className="form-label">Pocket Money Balance</label>
                    <Field
                      type="number"
                      id="pocketMoneyBalance"
                      name="pocketMoneyBalance"
                      className="form-control rounded-3"
                      placeholder="Pocket Money Balance"
                      readOnly
                    />
                    <ErrorMessage name="pocketMoneyBalance" component="div" className="text-danger" />
                  </div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <Field
                      type='input'
                      id="description"
                      name="description"
                      className="form-control rounded-3"
                      rows="2"
                      placeholder="Enter Description"
                    />
                    <ErrorMessage name="description" component="div" className="text-danger" />
                  </div>

                 

                  <div className="mb-3">
                    <label htmlFor="paymentMode" className="form-label">Payment Mode</label>
                    <Field
                      as="select"
                      id="paymentMode"
                      name="paymentMode"
                      className="form-select rounded-3"
                    >
                      <option value="">Select Payment Mode</option>
                      <option value="Cash">Cash</option>
                      <option value="Card">Card</option>
                      <option value="Online">Online</option>
                    </Field>
                    <ErrorMessage name="paymentMode" component="div" className="text-danger" />
                  </div>

                
                </div>
              </div>

              {/* Center the Print Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '250px',
                    backgroundColor: '#3425FF',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#2e22e6',
                    },
                      textTransform: 'none',
                  }}
                  
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeeInstalmentsForm;
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HistoryIcon from '@mui/icons-material/History';

// Import the background image
import backgroundImage from '../../assets/transport/backgroundImage.png';

// Validation schema using Yup
const validationSchema = Yup.object({
  receiptNo: Yup.string().required('Paid Receipt No is required'),
  prePrintReceiptNo: Yup.string(),
  notes: Yup.string(),
});

const UniformForm = () => {
  const initialValues = {
    receiptNo: '',
    prePrintReceiptNo: '',
    notes: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="p-4 mt-2  ms-5 me-5"
    style={{
        width: '80%', // Set the width to 80% of the parent container
        marginLeft: 'auto', // Center the form
        marginRight: 'auto',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>Uniform Print</h3>
          <p className="text-muted">
            Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
          </p>
        </div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="primary"
             endIcon={
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.2666 5.23331C14.9666 5.53331 14.9416 5.99998 15.2082 6.33331C16.4166 7.84998 17.0499 9.92498 16.4832 12.1C15.8249 14.6416 13.8332 16.5416 11.3082 17.05C7.05825 17.8917 3.33325 14.6083 3.33325 10.5C3.33325 7.09998 5.87492 4.29998 9.16658 3.89165V5.57498C7.87146 5.7939 6.71448 6.51365 5.94573 7.57868C5.17697 8.64371 4.85818 9.96848 5.05825 11.2666C5.38325 13.4416 7.19158 15.1916 9.37492 15.4583C10.3279 15.5779 11.2951 15.4204 12.161 15.0048C13.0268 14.5891 13.7546 13.9329 14.2574 13.1146C14.7602 12.2963 15.0166 11.3505 14.9961 10.3903C14.9756 9.43004 14.6789 8.49606 14.1416 7.69998C13.8582 7.28332 13.2499 7.25831 12.8916 7.60831L12.8832 7.61665C12.5999 7.89998 12.5749 8.34165 12.7916 8.67498C13.2916 9.44165 13.4916 10.425 13.1999 11.4416C13.0339 12.0096 12.7193 12.523 12.2886 12.9288C11.8579 13.3345 11.3267 13.618 10.7499 13.75C10.2611 13.8629 9.75314 13.8639 9.26386 13.7532C8.77458 13.6424 8.31661 13.4226 7.9241 13.1102C7.53158 12.7978 7.21464 12.4008 6.99691 11.9489C6.77918 11.4969 6.66626 11.0016 6.66658 10.5C6.66658 8.94998 7.73325 7.65832 9.16658 7.28332V9.06665C8.66658 9.35832 8.33325 9.88332 8.33325 10.5C8.33325 11.4166 9.08325 12.1666 9.99992 12.1666C10.9166 12.1666 11.6666 11.4166 11.6666 10.5C11.6666 9.88332 11.3333 9.34998 10.8333 9.06665V2.75832C10.8333 2.43332 10.5666 2.16665 10.2416 2.16665C5.77492 1.99998 1.92492 5.54998 1.68325 9.99998C1.38325 15.4583 6.19158 19.85 11.6916 18.6666C14.9249 17.975 17.4249 15.5 18.1499 12.275C18.7416 9.64165 17.9832 7.14165 16.5082 5.29998C16.4349 5.20833 16.343 5.13321 16.2386 5.07955C16.1342 5.02589 16.0196 4.9949 15.9023 4.9886C15.7851 4.98231 15.6679 5.00085 15.5583 5.04303C15.4488 5.0852 15.3493 5.15004 15.2666 5.23331Z"
                  fill="currentColor" // Use currentColor to inherit the button's text color
                />
              </svg>
            }
            sx={{
              borderColor: '#3425FF',
              backgroundColor: '#3425FF',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#2e22e6',
                borderColor: '#2e22e6',
                color: '#ffffff',
              },
               textTransform: 'none',
            }}
          >
            Tracking
          </Button>
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
            {/* Add the background image and scrolling to the form container */}
            <div
              className="border border-1 rounded-3 p-3 position-relative"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              maxHeight: '45vh',
                overflowX: 'hidden',
                overflowY:'auto',
               
              }}
            >
              <div
                className="bg-primary p-1 rounded-top-3 position-absolute top-0 start-0 end-0"
                style={{ marginTop: '-1px', marginLeft: '-1px', marginRight: '-1px', height: '2px' }}
              ></div>
              <div className="row mb-3" style={{ marginTop: '40px' }}>
                {/* Left Column: Paid Receipt No, Pre Print Receipt No */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label style={{fontSize:"0.8rem"}} htmlFor="receiptNo" className="form-label">Paid Receipt No</label>
                    <Field
                      type="text"
                      id="receiptNo"
                      name="receiptNo"
                      className="form-control rounded-3"
                      placeholder="Enter Receipt No"
                    />
                    <ErrorMessage name="receiptNo" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label style={{fontSize:"0.8rem"}} htmlFor="prePrintReceiptNo" className="form-label">Pre Print Receipt No</label>
                    <Field
                      type="text"
                      id="prePrintReceiptNo"
                      name="prePrintReceiptNo"
                      className="form-control rounded-3"
                      placeholder="Enter Receipt No"
                    />
                    <ErrorMessage name="prePrintReceiptNo" component="div" className="text-danger" />
                  </div>
                </div>

                {/* Right Column: Notes */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label style={{fontSize:"0.8rem"}} htmlFor="notes" className="form-label">Notes</label>
                    <Field
                      as="textarea"
                      id="notes"
                      name="notes"
                      className="form-control rounded-3"
                      rows="4"
                      placeholder="Enter Your Text Here"
                    />
                    <ErrorMessage name="notes" component="div" className="text-danger" />
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
                  Print
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UniformForm;
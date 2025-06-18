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
  // joinInto: Yup.string().required('Join Into is required'),
  reason: Yup.string().required('Reason is required'),
  approvedBy: Yup.string().required('Approved By is required'),
  concessionAmount: Yup.number().required('Concession Amount is required').positive('Concession Amount must be positive'),
  // reasonDescription: Yup.string(),
});

const ConcessionForm = () => {
  const initialValues = {
    joinInto: '',
    reason: '',
    approvedBy: '',
    concessionAmount: 0,
    reasonDescription: '',
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
          <h3>Concession</h3>
          <p className="text-muted">
            Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
          </p>
        </div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            endIcon={
             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path d="M7.16667 8.00004C6.93056 8.00004 6.73278 7.92004 6.57334 7.76004C6.41389 7.60004 6.33389 7.40226 6.33334 7.16671C6.33278 6.93115 6.41278 6.73337 6.57334 6.57337C6.73389 6.41337 6.93167 6.33337 7.16667 6.33337H17.1667C17.4028 6.33337 17.6008 6.41337 17.7608 6.57337C17.9208 6.73337 18.0006 6.93115 18 7.16671C17.9994 7.40226 17.9194 7.60032 17.76 7.76087C17.6006 7.92143 17.4028 8.00115 17.1667 8.00004H7.16667ZM7.16667 11.3334C6.93056 11.3334 6.73278 11.2534 6.57334 11.0934C6.41389 10.9334 6.33389 10.7356 6.33334 10.5C6.33278 10.2645 6.41278 10.0667 6.57334 9.90671C6.73389 9.74671 6.93167 9.66671 7.16667 9.66671H17.1667C17.4028 9.66671 17.6008 9.74671 17.7608 9.90671C17.9208 10.0667 18.0006 10.2645 18 10.5C17.9994 10.7356 17.9194 10.9337 17.76 11.0942C17.6006 11.2548 17.4028 11.3345 17.1667 11.3334H7.16667ZM7.16667 14.6667C6.93056 14.6667 6.73278 14.5867 6.57334 14.4267C6.41389 14.2667 6.33389 14.0689 6.33334 13.8334C6.33278 13.5978 6.41278 13.4 6.57334 13.24C6.73389 13.08 6.93167 13 7.16667 13H17.1667C17.4028 13 17.6008 13.08 17.7608 13.24C17.9208 13.4 18.0006 13.5978 18 13.8334C17.9994 14.0689 17.9194 14.267 17.76 14.4275C17.6006 14.5881 17.4028 14.6678 17.1667 14.6667H7.16667ZM3.83334 8.00004C3.59723 8.00004 3.39945 7.92004 3.24 7.76004C3.08056 7.60004 3.00056 7.40226 3 7.16671C2.99945 6.93115 3.07945 6.73337 3.24 6.57337C3.40056 6.41337 3.59834 6.33337 3.83334 6.33337C4.06834 6.33337 4.26639 6.41337 4.4275 6.57337C4.58861 6.73337 4.66834 6.93115 4.66667 7.16671C4.665 7.40226 4.585 7.60032 4.42667 7.76087C4.26834 7.92143 4.07056 8.00115 3.83334 8.00004ZM3.83334 11.3334C3.59723 11.3334 3.39945 11.2534 3.24 11.0934C3.08056 10.9334 3.00056 10.7356 3 10.5C2.99945 10.2645 3.07945 10.0667 3.24 9.90671C3.40056 9.74671 3.59834 9.66671 3.83334 9.66671C4.06834 9.66671 4.26639 9.74671 4.4275 9.90671C4.58861 10.0667 4.66834 10.2645 4.66667 10.5C4.665 10.7356 4.585 10.9337 4.42667 11.0942C4.26834 11.2548 4.07056 11.3345 3.83334 11.3334ZM3.83334 14.6667C3.59723 14.6667 3.39945 14.5867 3.24 14.4267C3.08056 14.2667 3.00056 14.0689 3 13.8334C2.99945 13.5978 3.07945 13.4 3.24 13.24C3.40056 13.08 3.59834 13 3.83334 13C4.06834 13 4.26639 13.08 4.4275 13.24C4.58861 13.4 4.66834 13.5978 4.66667 13.8334C4.665 14.0689 4.585 14.267 4.42667 14.4275C4.26834 14.5881 4.07056 14.6678 3.83334 14.6667Z" fill="white"/>
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
            Request
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
                {/* Left Column: Join Into, Reason, Approved By, Concession Amount */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="joinInto" className="form-label">Join Into</label>
                    <Field
                      as="select"
                      id="joinInto"
                      name="joinInto"
                      className="form-select rounded-3"
                    >
                      <option value="">Select Join Into</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Jr Intermediate">Jr Intermediate</option>
                      <option value="Sr Intermediate">Sr Intermediate</option>
                    </Field>
                    <ErrorMessage name="joinInto" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason</label>
                    <Field
                      as="select"
                      id="reason"
                      name="reason"
                      className="form-select rounded-3"
                    >
                      <option value="">Select Reason</option>
                      <option value="Financial Hardship">Financial Hardship</option>
                      <option value="Academic Merit">Academic Merit</option>
                      <option value="Special Circumstances">Special Circumstances</option>
                    </Field>
                    <ErrorMessage name="reason" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="approvedBy" className="form-label">Approved By</label>
                    <Field
                      type="text"
                      id="approvedBy"
                      name="approvedBy"
                      className="form-control rounded-3"
                      placeholder="Enter Approved By"
                    />
                    <ErrorMessage name="approvedBy" component="div" className="text-danger" />
                  </div>

                  
                </div>

                {/* Right Column: Reason Description */}
                <div className="col-md-6">
                    <div className="mb-3">
                    <label htmlFor="concessionAmount" className="form-label">Concession Amount</label>
                    <Field
                      type="number"
                      id="concessionAmount"
                      name="concessionAmount"
                      className="form-control rounded-3"
                      placeholder="Enter Concession Amount"
                    />
                    <ErrorMessage name="concessionAmount" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reasonDescription" className="form-label">Reason Description</label>
                    <Field
                      as="textarea"
                      id="reasonDescription"
                      name="reasonDescription"
                      className="form-control rounded-3"
                      rows="4"
                      placeholder="Enter Reason Description"
                    />
                    <ErrorMessage name="reasonDescription" component="div" className="text-danger" />
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

export default ConcessionForm;
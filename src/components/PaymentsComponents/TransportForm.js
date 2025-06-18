import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HistoryIcon from '@mui/icons-material/History';

// Import the background image
import backgroundImage from '../../assets/transport/backgroundImage.png';

// Validation schema using Yup
const validationSchema = Yup.object({
  transferFrom: Yup.string().required('Transfer From is required'),
  transferTo: Yup.string().required('Transfer To is required'),
  receiptNo: Yup.string().required('Paid Receipt No is required'),
  prePrintReceiptNo: Yup.string(),
  notes: Yup.string(),
});

const TransferForm = () => {
  const initialValues = {
    transferFrom: '',
    transferTo: '',
    receiptNo: '',
    prePrintReceiptNo: '',
    notes: '',
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
          <h3>Transfers</h3>
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
            {/* Add the background image and scrolling to the form container */}
            <div
              className="border border-1 rounded-3 p-3 position-relative"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                
              }}
            >
              <div
                className="bg-primary p-1 rounded-top-3 position-absolute top-0 start-0 end-0"
                style={{ marginTop: '-1px', marginLeft: '-1px', marginRight: '-1px', height: '2px' }}
              ></div>
              <div className="row mb-3" style={{ marginTop: '40px' }}>
                {/* Left Column: Transfer From, Transfer To, Paid Receipt No, Pre Print Receipt No */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="transferFrom" className="form-label">Transfer Type</label>
                    <Field
                      type="text"
                      id="transferFrom"
                      name="transferFrom"
                      className="form-control rounded-3"
                      placeholder="Enter Transfer From"
                    />
                    <ErrorMessage name="transferFrom" component="div" className="text-danger" />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="prePrintReceiptNo" className="form-label">Pre Print Receipt No</label>
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
                    <label htmlFor="notes" className="form-label">Notes</label>
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

           
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TransferForm;
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { PaymentTable } from "./PaymentsTable";
import { Container, Row, Col, Button, Form as BootstrapForm } from "react-bootstrap";
import './PaymentsForm.css';
import { useStudentContext } from "../../customhooks/StudentContext";
import {CashIcon, DDIcon, ChequeIcon, CardIcon} from "./icons"

const today = new Date().toISOString().split("T")[0];

const addPayment = async (id, cash) => {
  try {
    const result = await axios.post(`http://localhost:8080/payment?studentId=${id}`, cash);
    return result.data;
  } catch (error) {
    console.error("Payment submission failed:", error);
    throw error;
  }
};

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .integer("Amount must be an integer"),
  fee_payment_year: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Fee payment date must be in yyyy-MM-dd format")
    .required("Fee payment date is required"),
  class_type: Yup.string().required("Class type is required"),
  feeHeadId: Yup.number()
    .required("Fee Head ID is required")
    .positive("Fee Head ID must be positive"),
});

const initialValues = {
  amount: 0,
  class_type: "",
  feeHeadId: 0,
  pocket_money_no: 0,
  modeOfPayment: "",
  pre_print_receipt_no: 0,
  bank_details: "",
  amountIn: "",
  akashBooks: "",
  description: "",
  fee_payment_year: today,
  // Bank details fields for cheque/DD
  salesOrganization: "",
  chequeNo: "",
  chequeDate: "",
  bank: "",
  branch: "",
  city: "",
  ifsc: "",
};

const PaymentForm = () => {
  const [payments, setPayments] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const { studentId } = useStudentContext();

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    // Construct bank_details for cheque/dd payments
    const bank_details =
      values.modeOfPayment === "cheque" || values.modeOfPayment === "dd"
        ? `Organization: ${values.salesOrganization}, Cheque/DD No: ${values.chequeNo}, Date: ${values.chequeDate}, Bank: ${values.bank}, Branch: ${values.branch}, City: ${values.city}, IFSC: ${values.ifsc}`
        : values.bank_details;

    // Prepare payload matching DemoForm
    const payload = {
      amount: values.amount,
      class_type: values.class_type,
      feeHeadId: Number(values.feeHeadId),
      pocket_money_no: values.pocket_money_no,
      modeOfPayment: values.modeOfPayment,
      pre_print_receipt_no: values.pre_print_receipt_no,
      bank_details,
      amountIn: values.amountIn,
      akashBooks: values.akashBooks,
      description: values.description,
      fee_payment_year: values.fee_payment_year,
    };

    // Validate feeHeadId
    if (!values.feeHeadId || isNaN(values.feeHeadId)) {
      alert("Please enter a valid Fee Head ID");
      setSubmitting(false);
      return;
    }

    try {
      const response = await addPayment(studentId, payload);
      setPayments((prev) => [...prev, { ...payload, id: Date.now() }]);
      setShowTable(true);
      alert("Payment Successful: " + response);
      resetForm({ values: { ...initialValues, fee_payment_year: today } });
    } catch (error) {
      alert("Payment Failed: " + (error.message || "Unknown error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container fluid className="paymentContainer bg-light rounded-3" style={{ height: "100%" }}>
      {showTable ? (
        <PaymentTable
          payments={payments}
          onBackToForm={() => setShowTable(false)}
          setPayments={setPayments}
        />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form>
              {/* Payment Mode Buttons */}
              <Row className="mb-4 justify-content-center">
                <Col md={10}>
                  <div className="paymentTypes">
                    {[
                      { mode: "cash", label: "Cash", icon: <CashIcon /> },
                      { mode: "dd", label: "DD", icon: <DDIcon /> },
                      { mode: "cheque", label: "Cheque", icon: <ChequeIcon /> },
                      { mode: "card", label: "Credit/Debit Card", icon: <CardIcon /> },
                    ].map(({ mode, label , icon}) => (
                      <button
                        key={mode}
                        className={`paymentModeBtn ${values.modeOfPayment === mode ? "active" : ""}`}
                        onClick={() => setFieldValue("modeOfPayment", mode)}
                        type="button"
                      >
                        {icon}
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </Col>
              </Row>

              <div className="formikFormWrapper">
                <Row className="g-4">
                  <Col md={6}>
                    <BootstrapForm.Group
                      className="border p-3 rounded-3"
                      style={{ backgroundColor: "#F1F2F4" }}
                    >
                      <Row className="g-3" style={{ maxHeight: "45vh", overflow: "auto" }}>
                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Amount</BootstrapForm.Label>
                          <Field
                            name="amount"
                            as={BootstrapForm.Control}
                            type="number"
                            placeholder="Enter Amount"
                            className="form-control-sm"
                          />
                          <ErrorMessage name="amount" component="div" className="text-danger small" />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Pay Date</BootstrapForm.Label>
                          <Field
                            name="fee_payment_year"
                            type="date"
                            as={BootstrapForm.Control}
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="fee_payment_year"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Class Type</BootstrapForm.Label>
                          <Field as="select" name="class_type" className="form-select form-select-sm">
                            <option value="">Select</option>
                            <option value="Jr Intermediate">Inter 1</option>
                            <option value="Sr Intermediate">Inter 2</option>
                            {/* <option value="8th Grade">8th Grade</option> */}
                          </Field>
                          <ErrorMessage
                            name="class_type"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Fee Head ID</BootstrapForm.Label>
                          <Field
                            name="feeHeadId"
                            as={BootstrapForm.Control}
                            type="number"
                            placeholder="Enter Fee Head ID"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="feeHeadId"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Pocket Money</BootstrapForm.Label>
                          <Field
                            name="pocket_money_no"
                            as={BootstrapForm.Control}
                            type="number"
                            placeholder="Enter Amount"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="pocket_money_no"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Akash Books</BootstrapForm.Label>
                          <Field
                            name="akashBooks"
                            as={BootstrapForm.Control}
                            placeholder="Enter Akash Books"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="akashBooks"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Amount In</BootstrapForm.Label>
                          <Field
                            name="amountIn"
                            as={BootstrapForm.Control}
                            placeholder="Enter Amount In"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="amountIn"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={12}>
                          <BootstrapForm.Label className="small-label">Description</BootstrapForm.Label>
                          <Field
                            name="description"
                            as={BootstrapForm.Control}
                            placeholder="Enter Description"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>

                        <Col md={6}>
                          <BootstrapForm.Label className="small-label">Pre Print Receipt No</BootstrapForm.Label>
                          <Field
                            name="pre_print_receipt_no"
                            as={BootstrapForm.Control}
                            type="number"
                            placeholder="Enter Receipt Number"
                            className="form-control-sm"
                          />
                          <ErrorMessage
                            name="pre_print_receipt_no"
                            component="div"
                            className="text-danger small"
                          />
                        </Col>
                      </Row>
                    </BootstrapForm.Group>
                  </Col>

                  {(values.modeOfPayment === "cheque" || values.modeOfPayment === "dd") && (
                    <Col md={6}>
                      <BootstrapForm.Group
                        className="border p-3 rounded-3"
                        style={{ backgroundColor: "#F1F2F4" }}
                      >
                        <div className="mb-3 border-bottom pb-2">
                          <h5 className="section-title">Bank Details</h5>
                        </div>
                        <Row className="g-3" style={{ maxHeight: "45vh", overflow: "auto" }}>
                          <Col md={12}>
                            <BootstrapForm.Label className="small-label">Organization</BootstrapForm.Label>
                            <Field
                              as="select"
                              name="salesOrganization"
                              className="form-select form-select-sm"
                            >
                              <option value="">Select Organization</option>
                              <option value="Org A">Org A</option>
                              <option value="Org B">Org B</option>
                            </Field>
                            <ErrorMessage
                              name="salesOrganization"
                              component="div"
                              className="text-danger small"
                            />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">Cheque/DD No</BootstrapForm.Label>
                            <Field
                              name="chequeNo"
                              as={BootstrapForm.Control}
                              placeholder="Enter Cheque/DD Number"
                              className="form-control-sm"
                            />
                            <ErrorMessage
                              name="chequeNo"
                              component="div"
                              className="text-danger small"
                            />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">Cheque/DD Date</BootstrapForm.Label>
                            <Field
                              name="chequeDate"
                              as={BootstrapForm.Control}
                              type="date"
                              className="form-control-sm"
                            />
                            <ErrorMessage
                              name="chequeDate"
                              component="div"
                              className="text-danger small"
                            />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">Bank</BootstrapForm.Label>
                            <Field
                              name="bank"
                              as={BootstrapForm.Control}
                              placeholder="Enter Bank Name"
                              className="form-control-sm"
                            />
                            <ErrorMessage name="bank" component="div" className="text-danger small" />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">Branch</BootstrapForm.Label>
                            <Field
                              name="branch"
                              as={BootstrapForm.Control}
                              placeholder="Enter Branch Name"
                              className="form-control-sm"
                            />
                            <ErrorMessage
                              name="branch"
                              component="div"
                              className="text-danger small"
                            />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">City</BootstrapForm.Label>
                            <Field
                              name="city"
                              as={BootstrapForm.Control}
                              placeholder="Enter City"
                              className="form-control-sm"
                            />
                            <ErrorMessage name="city" component="div" className="text-danger small" />
                          </Col>

                          <Col md={6}>
                            <BootstrapForm.Label className="small-label">IFSC Code</BootstrapForm.Label>
                            <Field
                              name="ifsc"
                              as={BootstrapForm.Control}
                              placeholder="Enter IFSC Code"
                              className="form-control-sm"
                            />
                            <ErrorMessage name="ifsc" component="div" className="text-danger small" />
                          </Col>
                        </Row>
                      </BootstrapForm.Group>
                    </Col>
                  )}
                </Row>
                <Row className="mt-3">
                  <Col className="text-center">
                    <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Add Payment"}
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default PaymentForm;
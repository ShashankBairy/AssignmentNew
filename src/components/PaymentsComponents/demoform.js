import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useStudentContext } from "../../customhooks/StudentContext";

// Get today's date in yyyy-MM-dd format
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

const DemoForm = () => {
  const { studentId } = useStudentContext();

  const initialValues = {
    amount: 0,
    class_type: "8th Grade",
    feeHeadId: 0,
    pocket_money_no: 0,
    modeOfPayment: "",
    pre_print_receipt_no: 0,
    bank_details: "",
    amountIn: "",
    akashBooks: "",
    description: "",
    fee_payment_year: today, // Set to today's date
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .min(0, "Amount must be positive")
      .required("Amount is required"),
    class_type: Yup.string().required("Class type is required"),
    feeHeadId: Yup.number()
      .min(0, "Fee Head ID must be positive")
      .required("Fee Head ID is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await addPayment(studentId, values);
      console.log("Payment submitted successfully:", response);
      resetForm({ values: { ...initialValues, fee_payment_year: today } });
    } catch (error) {
      console.error("Failed to submit payment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 max-w-lg mx-auto p-4">
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-sm font-medium">
              Amount
            </label>
            <Field
              type="number"
              name="amount"
              id="amount"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="class_type" className="text-sm font-medium">
              Class Type
            </label>
            <Field
              type="text"
              name="class_type"
              id="class_type"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="class_type"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="feeHeadId" className="text-sm font-medium">
              Fee Head ID
            </label>
            <Field
              type="number"
              name="feeHeadId"
              id="feeHeadId"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="feeHeadId"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pocket_money_no" className="text-sm font-medium">
              Pocket Money No
            </label>
            <Field
              type="number"
              name="pocket_money_no"
              id="pocket_money_no"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="pocket_money_no"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="modeOfPayment" className="text-sm font-medium">
              Mode of Payment
            </label>
            <Field
              as="select"
              name="modeOfPayment"
              id="modeOfPayment"
              className="border rounded p-2"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Online">Online</option>
            </Field>
            <ErrorMessage
              name="modeOfPayment"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pre_print_receipt_no"
              className="text-sm font-medium"
            >
              Pre-print Receipt No
            </label>
            <Field
              type="number"
              name="pre_print_receipt_no"
              id="pre_print_receipt_no"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="pre_print_receipt_no"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bank_details" className="text-sm font-medium">
              Bank Details
            </label>
            <Field
              type="text"
              name="bank_details"
              id="bank_details"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="bank_details"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amountIn" className="text-sm font-medium">
              Amount In
            </label>
            <Field
              type="text"
              name="amountIn"
              id="amountIn"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="amountIn"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="akashBooks" className="text-sm font-medium">
              Akash Books
            </label>
            <Field
              type="text"
              name="akashBooks"
              id="akashBooks"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="akashBooks"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              id="description"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fee_payment_year" className="text-sm font-medium">
              Fee Payment Date
            </label>
            <Field
              type="date"
              name="fee_payment_year"
              id="fee_payment_year"
              className="border rounded p-2"
            />
            <ErrorMessage
              name="fee_payment_year"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Submit Payment"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DemoForm;
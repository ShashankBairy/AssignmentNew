import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./manage-transport.css";
import redEllipse from "../../assets/transport/ellipse-red.png"
import blueEllipse from "../../assets/transport/ellipse-blue.png"
import yelowEllipse from "../../assets/transport/ellipse-yellow.png"

function ManageTrans() {
    const routes = ["Miyapur-KPHB", "Dilsukhnagar", "Ameerpet"];
    const stops = ["Addanki", "LB Nagar", "KPHB"];

    const validationSchema = Yup.object({
        route: Yup.string().required("Route is required"),
        stop: Yup.string().required("Stop is required"),
    });

    const handleSubmit = (values) => {
        console.log("Submitted:", values);
        alert("Transport Assigned!");
    };

    return (
        <div className="container manage-container d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center mb-1 fw-bold">Manage Transport</h3>
            <div className="w-75">
                <p className="text-center text-muted mb-4 fs-0">
                    Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
                </p>
            </div>
            <Formik
                initialValues={{ route: "", stop: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <div className="d-flex flex-column align-items-center w-100">
                        <Form className=" shadow p-4 rounded form-box mx-auto d-flex flex-column justify-content-between position-relative">
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="route" className="form-label">Routes</label>
                                    <Field as="select" name="route" className="form-select">
                                        <option value="">Select Route</option>
                                        {routes.map((r) => (
                                            <option key={r} value={r}>{r}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="route" component="div" className="text-danger mt-1" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="stop" className="form-label">Stop Name</label>
                                    <Field as="select" name="stop" className="form-select">
                                        <option value="">Select Stop</option>
                                        {stops.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="stop" component="div" className="text-danger mt-1" />
                                </div>
                            </div>


                            <div className="text-center z-1 ">
                                <button type="submit" className="btn btn-primary px-5">
                                    Assign Transport
                                </button>
                            </div>  


                            {/* <div className="radiant-box"> */}
                            <div className="position-absolute w-25 h-100 d-flex flex-column end-0 bottom:0 ">
                                <img src={yelowEllipse} className="yellow-img opacity-50  h-50 " />
                                <img src={redEllipse} className="red-img opacity-50   h-25"  />
                                <img src={blueEllipse} className="blue-img  opacity-25 h-25" />
                            </div>
                            {/* </div> */}

                        </Form>
                    </div>
                )}
            </Formik>
        </div>

    );
}

export default ManageTrans;
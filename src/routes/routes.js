import { lazy } from "react";

const StudentProfile = lazy(()=> import("../components/StudentComponents/StudentProfile"));
const FeeDetails = lazy(()=> import("../components/StudentComponents/FeeDetails"));
const PocketMoney = lazy(()=>import("../components/StudentComponents/PocketMoney"));
const OtherFeeHeads = lazy(()=> import("../components/StudentComponents/OtherFeeHeads"));
const Refunds = lazy(()=> import("../components/StudentComponents/Refunds"));
const StudentTransport = lazy(()=> import("../components/StudentComponents/Transport-details"));
const Payment = lazy(()=> import("../components/PaymentsComponents/payment"));
const PaymentForm = lazy(()=> import("../components/PaymentsComponents/PaymentsForm"));
// const PaymentTable = lazy(()=> import("../components/PaymentsComponents/PaymentsTable"));
const Cancellation = lazy(()=> import("../components/PaymentsComponents/CancellationForm"));
const Concession = lazy(() => import("../components/PaymentsComponents/ConcessionForm"));
const PmIssue = lazy(() => import("../components/PaymentsComponents/PMIssuesForm"));
const FeeInstallments = lazy(() => import("../components/PaymentsComponents/FeeInstallmentsForm"));
const AkashBooks = lazy(() => import("../components/PaymentsComponents/AkashBooksForm"));
const Uniform = lazy(() => import("../components/PaymentsComponents/UniformForm"));
const Transfers = lazy(() => import("../components/PaymentsComponents/TransportForm"));
const Transport = lazy(()=> import("../components/Transport Components/transport"));
const TransportDetails = lazy(()=> import("../components/Transport Components/transport-details"));
const ManageTransport = lazy(()=> import("../components/Transport Components/manage-transport"));
const DemoForm = lazy(()=> import("../components/PaymentsComponents/demoform"));
// const PaymentHistory = lazy(()=> import("../components/PaymentsComponents/PaymentsTable"));
// const Transport = lazy(() => import("../components/TransportForm"));

const routes =[
    {
        path:"/",
        element:<StudentProfile/>,
        name:"Student Profile",
        children:[{
            path:'/',
            element:<FeeDetails/>,
            name:"Fee Details",
        },
        {
            path:'pocketmoney',
            element:<PocketMoney/>,
            name:"Pocket Money"
        },
        {
            path:"transport-info",
            element:<StudentTransport/>,
            name:"Student Transport Details",
        },
        {
            path:"refunds",
            element:<Refunds/>,
            name:"Refunds",
        },
        {
            path:"otherfeeheads",
            element:<OtherFeeHeads/>,
            name:"Other Fee Heads"
        }
    ]
    },
    {
        path:"/payment",
        element:<Payment/>,
        name:"Payments",
        children:[
            {
                path:'/payment',
                element:<PaymentForm/>,
                name:"Payment Form"
            },
            {
                path:"cancellation",
                element:<Cancellation/>,
                name:"Cancellation"
            },
            {
                path: "concession",
                element: <Concession />,
                name: "Concession",
            },
            {
                path: "pmissue",
                element: <PmIssue />,
                name: "PM Issue",
            },
            {
                path: "feeinstallments",
                element: <FeeInstallments />,
                name: "Fee Installments",
            },
            {
                path: "akashbooks",
                element: <AkashBooks />,
                name: "Akash Books",
            },
            {
                path: "uniform",
                element: <Uniform />,
                name: "Uniform",
            },
            {
                path: "transfers",
                element: <Transfers />,
                name: "Transfers",
            },
            {
                path:"demo",
                element:<DemoForm/>
                
            }
        ]
    },
    {
        path:"/transport",
        element:<Transport/>,
        name:"Transport",
        children:[{
            path:"/transport",
            element:<TransportDetails/>,
            name:"Transport Details",
        },
        {
            path:"manage",
            element:<ManageTransport/>,
            name:"Manage Transport"
        }
    ]
    }
]

export default routes;
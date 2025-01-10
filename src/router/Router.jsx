import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import CreateAssignment from "../pages/Createassignment";
import MyAttemptedjAssignments from "../pages/MyAttemptedjAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import Assignments from './../pages/Assignments';
import PrivateRoute from "../private/PrivateRoute";
import AssignmentDetails from "../pages/AssignmentDetails";
import Update from "../components/Update";
import Error from "../error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/assignments',
                element: <Assignments />,
            },
            {
                path: '/assignmentDetails/:id',
                element: <AssignmentDetails/>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <Update></Update>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://edu-linker-server.vercel.app/assignment/${params.id}`, { withCredentials: true })
            },
            {
                path: '/createAssignment',
                element: <PrivateRoute>
                    <CreateAssignment></CreateAssignment>
                </PrivateRoute>
            },
            {
                path: "/myAttemptedAssignment",
                element: <PrivateRoute>
                    <MyAttemptedjAssignments></MyAttemptedjAssignments>
                </PrivateRoute>
            },
            {
                path: '/pendingAssignments',
                element: <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>
            }

        ]
    },
]);

export default router;
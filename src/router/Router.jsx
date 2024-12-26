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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                loader: () => fetch('http://localhost:5000/assignments')
            },
            {
                path: '/assignmentDetails/:id',
                element: <PrivateRoute>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateRoute>
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
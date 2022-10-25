
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { fetchProjects } from './JS/api';

import { GlobalStyles } from './components';

import Calendar from './routers/Calendar';
import Layout from './routers/Layout';
import Login from './routers/Login/Login';
import TimeKeeper from './routers/TimeKeeper/TimeKeeper';
import Overview from './routers/Overview';
import Tasks from './routers/Overview/Tasks';
import Projects from './routers/Overview/Projects';
import UserDataProvider from './context/UserDataProvider';
import ErrorPage from './routers/ErrorPage';

const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: ':id',
        element: <Layout />,
        loader: async({params}) => fetchProjects(params.id),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: 'calendar',
                element: <Calendar />
            },
            {
                path: 'timekeeper',
                element: <TimeKeeper />
            },
            {
                path: 'overview',
                element: <Overview />,
                children: [
                    {
                        path: 'tasks',
                        element: <Tasks />
                    },{
                        path: 'projects',
                        element: <Projects />
                    },
                ]
            }
        ]
    }
]);

function App() {
    return (
        <>
            <UserDataProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </UserDataProvider>
        </>
    );
}

export default App;

// Toast to tell if the request was successful
// Modal should close automatically
// Icon is transparent

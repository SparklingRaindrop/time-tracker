
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { GlobalStyles } from './components';
import Calendar from './routers/Calendar';
import Layout from './routers/Layout';
import Login from './routers/Login/Login';
import TimeKeeper from './routers/TimeKeeper/TimeKeeper';
import Overview from './routers/Overview';
import Tasks from './routers/Tasks';
import Projects from './routers/Projects';
import UserDataProvider from './context/UserDataProvider';

const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: <Login />,
    },
    {
        path: ':id',
        element: <Layout />,
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

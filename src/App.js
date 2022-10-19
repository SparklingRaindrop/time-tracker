
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { GlobalStyles } from './components';
import Calendar from './routers/Calendar';
import Layout from './routers/Layout';
import Login from './routers/Login';
import TimeKeeper from './routers/TimeKeeper/TimeKeeper';
import Overview from './routers/Overview';
import Tasks from './routers/Tasks';
import Projects from './routers/Projects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: '',
                element: <Login />
            },
            {
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
            <ThemeProvider>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;

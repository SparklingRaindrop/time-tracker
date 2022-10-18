
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { GlobalStyles } from './components';
import Calendar from './routers/Calendar';
import Layout from './routers/Layout';
import Login from './routers/Login';

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

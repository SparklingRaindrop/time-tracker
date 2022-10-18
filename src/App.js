
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { GlobalStyles } from './components';
import Calender from './routers/Calender';
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
                path: 'calender',
                element: <Calender />
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

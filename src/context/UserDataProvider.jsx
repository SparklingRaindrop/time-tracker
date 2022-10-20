import PropTypes from 'prop-types';
import { createContext } from 'react'
import useFetchedData from '../hooks/useFetchedData';

export const UserDataContext = createContext();

export default function UserDataProvider(props) {
    const { children } = props;
    const value = useFetchedData();
    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    )
}


UserDataProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};
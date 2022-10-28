import { useContext, useEffect, useState } from 'react'
import { Container } from './styled';
import { Button, InputField, } from '../../components';
import { UserDataContext } from '../../context/UserDataProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState({
        login: false,
        createUser: false
    });
    const { setUserId, userId, fetchUserId, createUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }

    async function handleOnClick() {
        if (isError) {
            setIsError(false);
        }
        const { data } = await fetchUserId(inputValue);
        // It returns 200 if endpoint is correct
        if (data.length === 0) {
            setIsError(prev => ({
                ...prev,
                login: true,
            }));
        } else {
            setUserId(data[0].id);
        }
    }

    function handleKeyDown(event) {
        if (event.key !== 'Enter') return;
        handleOnClick();
    }

    async function handleCreateUser() {
        if (inputValue === '') return;
        const { status } = await createUser({ username: inputValue });

        if (status !== 201) {
            setIsError(prev => ({
                ...prev,
                createUser: true,
            }));
        } else {
            if (isError.createUser) {
                setIsError(prev => ({
                    ...prev,
                    createUser: false,
                }));
            }
            setInputValue('');
        }
    }

    useEffect(() => {
        if (userId) {
            navigate(`${userId}/calendar`);
        }
    }, [userId]);

    return (
        <Container>
            <h1>Timekeeper</h1>
            <InputField
                placeholder='Username'
                value={inputValue}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                autoFocus />
            <Button
                label='Login'
                onClick={handleOnClick} />
            <div>{isError.login ? 'Please provide correct username' : null}</div>
            <Button
                label='Create new user'
                onClick={handleCreateUser} />
            <div>{isError.createUser ? 'Provided username already exists' : null}</div>
        </Container>
    )
}
import { useContext, useEffect, useState } from 'react'
import { Container } from './styled';
import { Button, InputField, } from '../../components';
import { UserDataContext } from '../../context/UserDataProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const { setUserId, userId, fetchUserId } = useContext(UserDataContext);
    const navigate = useNavigate();

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }

    async function handleOnClick() {
        if (isError) {
            setIsError(false);
        }
        const { status, data } = await fetchUserId(inputValue);
        if (status !== 200) {
            setIsError(true);
        } else {
            setUserId(data[0].id);
            console.log(data.id);
        }
    }

    function handleKeyDown(event) {
        if (event.key !== 'Enter') return;
        handleOnClick();
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
            <div>{isError ? 'Please provide correct username' : null}</div>
        </Container>
    )
}
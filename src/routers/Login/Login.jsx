import { useContext, useEffect, useState } from 'react'
import { Container } from './styled';
import { Button, InputField, } from '../../components';
import { UserDataContext } from '../../context/UserDataProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const { setUserId, userId, getUserId } = useContext(UserDataContext);
    const navigate = useNavigate();

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }

    async function handleOnClick() {
        if (isError) {
            setIsError(false);
        }
        const { status, data } = await getUserId(inputValue);
        if (status !== 200) {
            setIsError(true);
        } else {
            setUserId(data.id);
        }
    }

    useEffect(() => {
        if (userId) {
            navigate(`${userId}/calendar`);
        }
    }, [userId])

    return (
        <Container>
            <InputField
                placeholder='username'
                value={inputValue}
                onChange={handleOnChange} />
            <Button
                label='Login'
                onClick={handleOnClick} />
            <div>{isError ? 'Please provide correct username' : null}</div>
        </Container>
    )
}
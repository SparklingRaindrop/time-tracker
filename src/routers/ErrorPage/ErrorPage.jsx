import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Wrapper, FlexColumn } from './styled';

export default function ErrorPage() {
    const navigate = useNavigate();

    function handleOnClick() {
        navigate('/');
    }

    return (
        <Wrapper>
            <FlexColumn>
                Something went Wrong
                <Button label='Go back to Top Page' onClick={handleOnClick} />
            </FlexColumn>
        </Wrapper>
    )
}
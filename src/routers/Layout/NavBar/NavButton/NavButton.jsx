import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { Wrapper, Title } from './styled';

export default function NavButton(props) {
    const { icon, title, linkTo } = props;
    const navigate = useNavigate();
    const { pathname } = useLocation();

    function handleOnClick() {
        navigate(linkTo);
    }

    return (
        <Wrapper onClick={handleOnClick} $current={pathname.slice(1) === linkTo}>
            <Icon name={icon} />
            <Title>{title}</Title>
        </Wrapper>
    )
}
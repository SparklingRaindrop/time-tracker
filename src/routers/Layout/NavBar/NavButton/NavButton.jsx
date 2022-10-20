import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <Wrapper onClick={handleOnClick} $current={pathname.includes(linkTo)}>
            <Icon name={icon} />
            <Title>{title}</Title>
        </Wrapper>
    )
}

NavButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    linkTo: PropTypes.string,
};
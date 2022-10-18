import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default function Nav(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
};
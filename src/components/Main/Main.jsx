import { Wrapper } from './styled';
import PropTypes from 'prop-types';

export default function Main(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

Main.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};
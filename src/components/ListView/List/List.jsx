import PropTypes from 'prop-types';
import { Container, ListWrapper } from './styled';

export default function List(props) {
    const { children, className, filled, round, separate } = props;
    return (
        <Container className={className} $filled={filled} $round={round}>
            <ListWrapper $separate={separate}>
                {children}
            </ListWrapper>
        </Container>
    )
}

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array,
    filled: PropTypes.bool,
    round: PropTypes.bool,
    separate: PropTypes.bool,
};
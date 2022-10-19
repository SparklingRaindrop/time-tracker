import PropTypes from 'prop-types';
import { Container, ListWrapper } from './styled';

export default function List(props) {
    const { children, className, filled } = props;
    return (
        <Container className={className} $filled={filled}>
            <ListWrapper>
                {children}
            </ListWrapper>
        </Container>
    )
}

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array,
    filled: PropTypes.bool,
};
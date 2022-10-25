import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Wrapper } from './styled';

export function Nav(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

export const NavRef = forwardRef((props, ref) => {
    const { children, className } = props;
    return <Wrapper ref={ref} className={className}>{children}</Wrapper>
});

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

NavRef.displayName = 'NavRef';

NavRef.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
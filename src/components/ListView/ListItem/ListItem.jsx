import ListItemContent from './ListItemContent';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import { cloneElement } from 'react';

export default function ListItem(props) {
    const { values, extra, className, onClick, current } = props;

    return (
        <Wrapper
            className={className}
            $extra={extra}
            $current={current}>
            <ListItemContent {...values} handleOnClick={onClick} />
            {extra && cloneElement(extra)}
        </Wrapper>
    )
}

ListItem.propTypes = {
    values: PropTypes.object.isRequired,
    extra: PropTypes.element,
    className: PropTypes.string,
    current: PropTypes.bool,
    onClick: PropTypes.func,
};
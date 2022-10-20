import ListItemContent from './ListItemContent';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import { cloneElement } from 'react';

export default function ListItem(props) {
    const { values, extra, className, separate, onClick, current } = props;

    return (
        <Wrapper
            className={className}
            $extra={extra}
            $separate={separate}
            $current={current}
            onClick={onClick}>
            <ListItemContent {...values} />
            {extra && cloneElement(extra)}
        </Wrapper>
    )
}

ListItem.propTypes = {
    values: PropTypes.object.isRequired,
    extra: PropTypes.element,
    className: PropTypes.string,
    separate: PropTypes.bool,
    current: PropTypes.bool,
    onClick: PropTypes.func,
};
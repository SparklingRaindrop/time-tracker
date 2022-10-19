import ListItemContent from './ListItemContent';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import { cloneElement } from 'react';

export default function ListItem(props) {
    const { values, extra, className, separate } = props;

    return (
        <Wrapper $extra={extra} className={className} $separate={separate}>
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
};
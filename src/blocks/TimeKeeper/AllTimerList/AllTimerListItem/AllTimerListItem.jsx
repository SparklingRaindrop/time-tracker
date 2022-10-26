import PropTypes from 'prop-types';
import { ColorMarker, Title } from '../../../../components/ListView';
import { Wrapper, Log, Content } from './styled';

import { Stopwatch } from '../../../../components';
import { cloneElement } from 'react';

export default function AllTimerListItem(props) {
    const { color, title, start, end, current, onClick, controller } = props;

    return (
        <Wrapper $current={current} onClick={onClick} >
            <Content>
                <ColorMarker $color={color} />
                <Title>
                    {title}
                </Title>
                <Log>
                    <Stopwatch start={start} end={end} />
                </Log>
            </Content>
            {cloneElement(controller)}
        </Wrapper>
    )
}

AllTimerListItem.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    current: PropTypes.bool,
    onClick: PropTypes.func,
    controller: PropTypes.element,
};
import PropTypes from 'prop-types';
import { ColorMarker, Title } from '../../../../components/ListView';
import { Wrapper, Log, Status, Content } from './styled';

import { Stopwatch } from '../../../../components';
import { cloneElement } from 'react';

export default function TimerListItem(props) {
    const { color, title, start, end, status, controller } = props;

    // This blocks until timers get the first end time
    if (status === 'ongoing' && !end) return;
    return (
        <Wrapper>
            <Content>
                <ColorMarker $color={color} />
                <Title>
                    {title}
                </Title>
                <Log>
                    <Stopwatch start={start} end={end} />
                </Log>
                <Status>status: {status}</Status>
            </Content>
            {cloneElement(controller)}
        </Wrapper>
    )
}

TimerListItem.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    status: PropTypes.string,
    controller: PropTypes.element,
};
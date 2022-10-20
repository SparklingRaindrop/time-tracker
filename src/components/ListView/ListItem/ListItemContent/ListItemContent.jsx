import PropTypes from 'prop-types';
import Stopwatch from '../../../Stopwatch/Stopwatch';

import { ColorMarker, Wrapper, Title, Log, Status } from './styled';

export default function ListItemContent(props) {
    const { color, title, log, start, end, onGoingTotal, taskTotal, status } = props;

    return (
        <Wrapper>
            <ColorMarker $color={color} />
            <Title>
                {title}
            </Title>
            {
                log ?
                    <Log>
                        <Stopwatch start={start} end={end} />
                    </Log> :
                    taskTotal ? <Log>Task Total:{taskTotal}</Log> :
                        null
            }
            {
                status ? <Status>status: {status}</Status> :
                    onGoingTotal ? <Status>On-going Total:{onGoingTotal}</Status> :
                        null
            }
        </Wrapper>
    )
}

ListItemContent.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    log: PropTypes.bool,
    isActive: PropTypes.bool,
    start: PropTypes.string,
    end: PropTypes.string,
    onGoingTotal: PropTypes.string,
    taskTotal: PropTypes.string,
    status: PropTypes.string,
};
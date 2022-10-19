import PropTypes from 'prop-types';
import { ColorMarker, Wrapper, Title, Log, Status } from './styled';


export default function ListItemContent(props) {
    const { color, title, log, status, onGoingTotal, taskTotal } = props;

    return (
        <Wrapper>
            <ColorMarker $color={color} />
            <Title>
                {title}
            </Title>
            {
                log ? <Log>{log}</Log> :
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
    log: PropTypes.string,
    status: PropTypes.string,
    onGoingTotal: PropTypes.number,
    taskTotal: PropTypes.number,
};
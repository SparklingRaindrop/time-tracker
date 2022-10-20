import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserDataContext } from '../../../../context/UserDataProvider';
import { Time, Wrapper } from './styled';

export default function Timer(props) {
    const { currentShownLogId } = props;
    const { getLogDataByLogId } = useContext(UserDataContext);

    const { start = 0, end = 0 } = getLogDataByLogId(currentShownLogId);

    return (
        <Wrapper>
            <Time start={start} end={end} />
        </Wrapper>
    )
}

Timer.propTypes = {
    currentShownLogId: PropTypes.string.isRequired,
};
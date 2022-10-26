import PropTypes from 'prop-types';
import { useContext } from 'react';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Time, Wrapper } from './styled';

export default function Timer(props) {
    const { currentShownLogId } = props;
    const { getLogDataByLogId } = useContext(UserDataContext);

    const currentLog = getLogDataByLogId(currentShownLogId);
    const start = currentLog ? currentLog.start : null;
    const end = currentLog ? currentLog.end : null;

    return (
        <Wrapper>
            <Time start={start} end={end} />
        </Wrapper>
    )
}

Timer.propTypes = {
    currentShownLogId: PropTypes.string,
};
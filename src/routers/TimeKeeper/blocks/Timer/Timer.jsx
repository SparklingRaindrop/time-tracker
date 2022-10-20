import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserDataContext } from '../../../../context/UserDataProvider';
import { Time, Wrapper } from './styled';

export default function Timer(props) {
    const { currentShownTaskId } = props;
    const { getLogData } = useContext(UserDataContext);

    const { start, end } = getLogData(currentShownTaskId);

    return (
        <Wrapper>
            <Time start={start} end={end} />
        </Wrapper>
    )
}

Timer.propTypes = {
    currentShownTaskId: PropTypes.string.isRequired,
};
import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { UserDataContext } from '../../../context/UserDataProvider';
import { getStatus } from '../../../JS/dataParser';

import { ListWrapper } from './styled';
import TimerListItem from './TimerListItem';
import { ListItem } from '../../../components';

/*
    color: 'red',
    title: 'Clean the office',
    start: Date
    end: Date
    log: true
*/

export default function TimerList(props) {
    const { duration } = props;
    const {
        getProjectColorByTaskId,
        getTaskTitleByTaskId,
        filterLogsByDuration,
        logs,
    } = useContext(UserDataContext);
    const logList = useMemo(() => filterLogsByDuration(duration), [duration, logs]);

    return (
        <ListWrapper filled round>
            {
                logList.length > 0 ?
                    logList.map(({ id, start, end, isActive, task_id }) => (
                        <TimerListItem
                            key={id}
                            color={getProjectColorByTaskId(task_id)}
                            title={getTaskTitleByTaskId(task_id)}
                            start={start}
                            end={end}
                            status={getStatus(isActive)} />
                    )) :
                    <ListItem values={{ title: 'No timer found' }} />
            }
        </ListWrapper>
    )
}

TimerList.propTypes = {
    duration: PropTypes.array,
};
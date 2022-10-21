import { useContext } from 'react';
import PropTypes from 'prop-types';

import { UserDataContext } from '../../../context/UserDataProvider';
import { getStatus } from '../../../JS/dataParser';

import { ListWrapper, ListItemWrapper } from './styled';

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
        logs,
        getProjectColorByTaskId,
        getTaskTitleByTaskId,
        filterLogsByDuration,
    } = useContext(UserDataContext);

    if (logs.length === 0) return;
    return (
        <ListWrapper filled>
            {
                filterLogsByDuration(duration).map(({ id, start, end, isActive, task_id }) => (
                    <ListItemWrapper
                        key={id}
                        values={{
                            color: getProjectColorByTaskId(task_id),
                            title: getTaskTitleByTaskId(task_id),
                            isActive,
                            start: start,
                            end: end,
                            log: true,
                            status: getStatus(isActive, end)
                        }} />
                ))
            }
        </ListWrapper>
    )
}

TimerList.propTypes = {
    duration: PropTypes.array,
};
import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { UserDataContext } from '../../../context/UserDataProvider';
import { getStatus } from '../../../JS/dataParser';

import { ListWrapper } from './styled';
import TimerListItem from './TimerListItem';
import { Controller, ListItem } from '../../../components';
import { ContentWrapper, Title } from '../../../components/ListView';

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
        removeLog,
    } = useContext(UserDataContext);
    const logList = useMemo(() => filterLogsByDuration(duration), [duration, logs]);

    return (
        <ListWrapper filled round>
            {
                logList.length > 0 ?
                    logList.map(({ id, start, end, isActive, taskId }) => (
                        <TimerListItem
                            key={id}
                            color={getProjectColorByTaskId(taskId)}
                            title={getTaskTitleByTaskId(taskId)}
                            start={start}
                            end={end}
                            status={getStatus(isActive)}
                            controller={
                                <Controller
                                    buttons={[{
                                        name: 'remove',
                                        onClick: () => removeLog(id)
                                    }]} />
                            } />
                    )) :
                    <ListItem><ContentWrapper><Title>No Timer Found</Title></ContentWrapper></ListItem>
            }
        </ListWrapper>
    )
}

TimerList.propTypes = {
    duration: PropTypes.array,
};
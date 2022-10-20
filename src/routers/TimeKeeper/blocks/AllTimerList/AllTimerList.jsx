import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Controller } from '../../../../blocks';
import { UserDataContext } from '../../../../context/UserDataProvider';
import { ListWrapper, ListItemWrapper } from './styled';

/* 
    {
        color: 'red',
        title: 'Clean the office',
        log: true,
        start: Date
        end: Date
    }
*/

function createButtonValues(start, end, isActive) {
    if (isActive) {
        return 'stop';
    } else if (!start && !end) {
        return 'start';
    } else {
        return 'remove';
    }
}

export default function AllTimerList(props) {
    const { changeCurrentTaskId, currentShownTaskId } = props;
    const { tasks, getProjectColor, getLogData } = useContext(UserDataContext);

    if (tasks.length === 0) return;
    return (
        <ListWrapper filled>
            {
                tasks.map(({ id, project_id, title }) => {
                    const { start, end, isActive } = getLogData(id);
                    return (
                        <ListItemWrapper
                            key={id}
                            current={currentShownTaskId === id}
                            values={{
                                title,
                                isActive,
                                color: getProjectColor(project_id),
                                log: true,
                                start: start,
                                end: end,
                            }}
                            extra={<Controller buttons={[createButtonValues(start, end, isActive)]} />}
                            onClick={() => changeCurrentTaskId(id)} />
                    )
                })
            }
        </ListWrapper>
    )
}

AllTimerList.propTypes = {
    changeCurrentTaskId: PropTypes.func,
    currentShownTaskId: PropTypes.string,
};
import { Controller } from '../../../../blocks';
import { ListWrapper, ListItemWrapper } from './styled';

const test = {
    color: 'red',
    title: 'Clean the office',
    log: '00:00:00',
}

export default function OnGoingTimerList() {
    return (
        <ListWrapper filled>
            <ListItemWrapper values={test} extra={<Controller names={['stop', 'start']} />} />
            <ListItemWrapper values={test} extra={<Controller names={['stop', 'start']} />} />
            <ListItemWrapper values={test} extra={<Controller names={['stop', 'start']} />} />
            <ListItemWrapper values={test} extra={<Controller names={['stop', 'start']} />} />
        </ListWrapper>
    )
}
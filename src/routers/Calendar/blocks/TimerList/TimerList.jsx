import { ListWrapper, ListItemWrapper } from './styled';

const test = {
    color: 'red',
    title: 'Clean the office',
    log: '00:00:00',
    status: 'on going'
}

export default function TimerList() {
    return (
        <ListWrapper filled>
            <ListItemWrapper values={test} />
            <ListItemWrapper values={test} />
            <ListItemWrapper values={test} />
            <ListItemWrapper values={test} />
        </ListWrapper>
    )
}
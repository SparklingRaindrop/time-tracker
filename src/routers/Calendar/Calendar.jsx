import TimerList from './blocks/TimerList';
import GridCalendars from './blocks/GridCalendars';
import { Main } from '../../components';

export default function Calendar() {
    return (
        <Main>
            <GridCalendars />
            <TimerList />
        </Main>
    )
}
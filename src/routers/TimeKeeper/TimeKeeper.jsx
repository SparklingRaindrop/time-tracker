import { Main } from '../../components';
import OnGoingTimerList from './blocks/OnGoingTimerList';
import StopWatch from './blocks/StopWatch';

export default function TimeKeeper() {
    return (
        <Main>
            <StopWatch />
            <OnGoingTimerList />
        </Main>
    )
}
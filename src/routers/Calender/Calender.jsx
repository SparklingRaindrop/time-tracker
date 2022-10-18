import { Wrapper } from './styled';
import TimerList from './blocks/TimerList';
import GridCalender from './GridCalender';

export default function Calender() {
    return (
        <Wrapper>
            <GridCalender />
            <TimerList />
        </Wrapper>
    )
}
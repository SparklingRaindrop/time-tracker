import useCalendar from '../../../hooks/useCalendar';
import Month from './Month';
import { Wrapper } from './styled';


export default function GridCalendars() {
    const { calendar, /* addCalendar */ } = useCalendar();

    return (
        <Wrapper>
            {
                calendar.map(data => <Month key={data.month + data.year} value={data} />)
            }
        </Wrapper>
    )
}
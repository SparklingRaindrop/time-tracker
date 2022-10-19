import useCalendar from '../../../../hooks/useCalendar';
import Month from './Month';
import { OuterWrapper } from './styled';


export default function GridCalendars() {
    const { calendar, /* addCalendar */ } = useCalendar();

    return (
        <OuterWrapper>
            {
                calendar.map(data => <Month key={data.month + data.year} value={data} />)
            }
        </OuterWrapper>
    )
}
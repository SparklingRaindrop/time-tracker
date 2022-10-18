import NavButton from './NavButton';
import { Wrapper } from './styled';

const navLinks = [{
    linkTo: '',
    icon: 'clock',
    title: 'Timekeeper'
}, {
    linkTo: 'calendar',
    icon: 'calendar',
    title: 'Calendar'
}, {
    linkTo: '',
    icon: 'businessBag',
    title: 'Tasks'
}];

export default function NavBar() {
    return (
        <Wrapper>
            {
                navLinks.map(link => <NavButton key={link.title} {...link} />)
            }
        </Wrapper>
    )
}
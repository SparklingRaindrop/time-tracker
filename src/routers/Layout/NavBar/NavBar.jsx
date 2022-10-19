import NavButton from './NavButton';
import { Wrapper } from './styled';

const navLinks = [{
    linkTo: 'timekeeper',
    icon: 'clock',
    title: 'Timekeeper'
}, {
    linkTo: 'calendar',
    icon: 'calendar',
    title: 'Calendar'
}, {
    linkTo: 'overview/projects',
    icon: 'businessBag',
    title: 'Overview'
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
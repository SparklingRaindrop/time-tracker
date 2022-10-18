import NavButton from './NavButton';
import { Wrapper } from './styled';

const navLinks = [{
    linkTo: '',
    icon: 'clock',
    title: 'Timekeeper'
}, {
    linkTo: 'calender',
    icon: 'calender',
    title: 'Calender'
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
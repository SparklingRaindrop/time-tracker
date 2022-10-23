import { forwardRef } from 'react';
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

export const Navbar = forwardRef((_, ref) => {
    return (
        <Wrapper ref={ref}>
            {
                navLinks.map(link => <NavButton key={link.title} {...link} />)
            }
        </Wrapper>
    )
});

Navbar.displayName = 'Navbar';
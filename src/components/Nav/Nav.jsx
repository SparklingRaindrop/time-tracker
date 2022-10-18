import { Wrapper } from './styled';

export default function Nav(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}
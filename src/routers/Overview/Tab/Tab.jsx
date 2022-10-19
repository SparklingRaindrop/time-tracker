import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Wrapper, TabLink } from './styled';

export default function Tab(props) {
    const { label, current, path } = props;
    const navigate = useNavigate();

    function handleOnClick() {
        navigate(path);
    }

    return (
        <Wrapper>
            <TabLink $current={current} onClick={handleOnClick}>
                {label}
            </TabLink>
        </Wrapper>
    )
}

Tab.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string,
    current: PropTypes.bool,
};
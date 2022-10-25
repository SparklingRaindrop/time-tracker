import PropTypes from 'prop-types';

import { List } from '../../../components';
import { Wrapper } from './styled';

export default function ListView(props) {
    const { children } = props;
    return (
        <Wrapper>
            <List separate>
                {children}
            </List>
        </Wrapper>
    )
}

ListView.propTypes = {
    children: PropTypes.node.isRequired,
};
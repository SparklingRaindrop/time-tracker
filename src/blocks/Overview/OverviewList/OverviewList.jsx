import PropTypes from 'prop-types';

import { List } from '../../../components';
import { Wrapper } from './styled';

export default function OverviewList(props) {
    const { children } = props;
    return (
        <Wrapper>
            <List separate>
                {children}
            </List>
        </Wrapper>
    )
}

OverviewList.propTypes = {
    children: PropTypes.node.isRequired,
};
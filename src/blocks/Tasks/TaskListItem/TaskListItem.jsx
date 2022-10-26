import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { ListItem } from '../../../components';
import { ColorMarker, Title } from '../../../components/ListView';
import { Content } from './styled';

export default function TaskListItem(props) {
    const { color, title, controller } = props;

    return (
        <ListItem>
            <Content>
                <ColorMarker $color={color} />
                <Title>
                    {title}
                </Title>
            </Content>
            {cloneElement(controller)}
        </ListItem>
    )
}

TaskListItem.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onGoingTotal: PropTypes.string,
    taskTotal: PropTypes.string,
    onClick: PropTypes.func,
    controller: PropTypes.element,
};
import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { ColorMarker, GreyText, ListItem, Title } from '../../../components/ListView';
import { Content } from './styled';

export default function ProjectListItem(props) {
    const { color, title, onGoingTotal, taskTotal, onClick, controller, current } = props;

    return (
        <ListItem onClick={onClick} $current={current}>
            <Content>
                <ColorMarker $color={color} />
                <Title>
                    {title}
                </Title>
                <GreyText>Task Total:{taskTotal}</GreyText>
                <GreyText>On-going Total:{onGoingTotal}</GreyText>
            </Content>
            {cloneElement(controller)}
        </ListItem>
    )
}

ProjectListItem.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onGoingTotal: PropTypes.string,
    taskTotal: PropTypes.string,
    onClick: PropTypes.func,
    controller: PropTypes.element,
    current: PropTypes.bool,
};
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Button } from './styled';

export default function IconButton(props) {
    const { name, className, onClick } = props;
    return (
        <Button className={className} onClick={onClick}>
            <Icon name={name} />
        </Button>
    )
}

IconButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};
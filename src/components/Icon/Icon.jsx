import PropTypes from 'prop-types';
import { path } from './path';
import { Svg } from './styled';

export default function Icon(props) {
    const { name } = props;

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            {
                path[name].map((path, index) =>
                    <path key={index} fillRule="evenodd" d={path} clipRule="evenodd" />
                )
            }
        </Svg>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired
};
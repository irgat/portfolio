import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const propTypes = {
    items: PropTypes.array.isRequired,
};

const defaultProps = {

};

class SocialBar extends React.Component {
    filterValidItems = (itemsList) => {
        return itemsList.filter(item => item.imagePath !== undefined);
    };

    render() {
        let validItems = this.filterValidItems(this.props.items);
        return (
            (validItems.length > 0) && <ul>
                {validItems.map((item, id) => (
                    <Icon
                        key={id}
                        {...item}
                    />
                ))}
            </ul>
        );
    }
}

SocialBar.propTypes = propTypes;
SocialBar.defaultProps = defaultProps;

export default SocialBar;

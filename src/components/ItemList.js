import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};

const defaultProps = {

};

class ItemList extends React.Component {
    onMouseOver = (e) => {
        console.log('onMouseOver:', e.target.id);
    };

    onMouseOut = (e) => {
        console.log('onMouseOut:', e.target.id);
    };

    filterValidItems = (items) => {
        return items.filter(item => (item.thumbnail !== undefined && item.name !== undefined));
    };

    render() {
        let validItems = this.filterValidItems(this.props.items);
        return (
            (validItems.length > 0) && <div>
                {validItems.map((item, index) => (
                    <Item
                        key={index}
                        id={item.name}
                        imagePath={item.thumbnail}
                        isSelected={item.name === this.props.selectedItem}
                        onClick={this.props.onClick}
                        onMouseOver={(item.name !== this.props.selectedItem) ? this.onMouseOver : undefined}
                        onMouseOut={(item.name !== this.props.selectedItem) ? this.onMouseOut : undefined}
                    />
                ))}
            </div>
        );
    }
}

ItemList.propTypes = propTypes;
ItemList.defaultProps = defaultProps;

export default ItemList;
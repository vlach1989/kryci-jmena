import React from 'react';
import _ from "lodash";

class Card extends React.PureComponent {
    /**
     * Place items randomly on empty spots in array
     * @param list {Array} list of items
     * @param item {string}
     * @param count {number} how many times should be item in the list
     * @return {Array}
     */
    placeItemsRandomly(list, item, count) {
        for (let i=0; i<count; i++) {
            let emptyIndex = this.getEmptyIndex(list);
            list[emptyIndex] = item;
        }
        return list;
    }

    /**
     * Get empty index in list
     * @param list {Array}
     * @return {number} index
     */
    getEmptyIndex(list) {
        const randomIndex = _.random(list.length - 1);
        if (!list[randomIndex]) {
            return randomIndex;
        } else {
            return this.getEmptyIndex(list);
        }
    }

    render() {
        const props = this.props;
        const options = props.options;
        const size = props.width * props.height;

        // Prepare array full of nulls
        let list = _.times(size, _.constant(null));

        _.forIn(options, (count, itemKey) => {
            list = this.placeItemsRandomly(list, itemKey, count);
        });

        return this.renderGrid(list, props.width);
    };

    renderGrid(items, itemsInRow) {
        let grid = [];
        let row = [];
        _.forEach(items, (item, index) => {
            row.push(item);
            if ((index + 1) % itemsInRow === 0) {
                grid.push(row);
                row = [];
            }
        });

        return (
            <div className="card">
                {_.map(grid, row => (
                        <div className="card-row">
                            {_.map(row, cell => (<div className={`cell ${cell}`}/>))}
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default Card;
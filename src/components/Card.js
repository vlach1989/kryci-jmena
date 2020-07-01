import React from 'react';
import _ from "lodash";

class Card extends React.PureComponent {
    getRandomItem(counts, setting, limits) {
        const item = _.sample(setting);
        if (counts[item] < limits[item]) {
            counts[item]++;
            return item;
        } else {
            return this.getRandomItem(counts, setting, limits);
        }
    }

    render() {
        const props = this.props;
        const options = props.options;
        const size = props.width * props.height;

        // TODO keys length should match card size
        const optionsKeys = Object.keys(options);


        let output = _.times(size, _.constant(null));
        let counts = {};
        _.each(optionsKeys, key => {
           counts[key] = 0;
        });

        for (let i=0; i < output.length; i++) {
            output[i] = this.getRandomItem(counts, optionsKeys, options);
        }

        return this.renderGrid(output, props.width);
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
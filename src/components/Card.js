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
        const optionsKeys = Object.keys(options);

        let output = _.times(size, _.constant(null));

        let counts = {};
        _.each(optionsKeys, key => {
           counts[key] = 0;
        });

        for (let i=0; i < output.length; i++) {
            if (!output[i]) {
                output[i] = this.getRandomItem(counts, optionsKeys, options);
            }
        }

        return (
            <div className="card">
                {_.map(output, item => <div className={`cell ${item}`}/>)}
            </div>
        );
    };
}

export default Card;
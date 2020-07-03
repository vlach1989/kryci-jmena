import React from 'react';
import _ from "lodash";
import Card from "./Card";

class Page extends React.PureComponent {
    render() {
        return (
            <div className="page">
                {this.renderCards(12)}
            </div>
        );
    };

    renderCards(count) {
        const props = this.props;

        let list = _.times(count, _.constant(null));
        return _.map(list, (value, index) => {
            const options = {...props.options};

           if (index % 2 === 0) {
               options.home -= 1;
               options.guest += 1;
           }

           return (
               <Card
                   width={props.width}
                   height={props.height}
                   options={options}
               />
           );
        });
    }
}

export default Page;
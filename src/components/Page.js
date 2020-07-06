import React from 'react';
import _ from "lodash";
import Card from "./Card";
import html2pdf from "html2pdf.js";

class Page extends React.PureComponent {
    componentDidMount() {
        var element = document.getElementById('page');
        html2pdf(element, {margin: 0});
    }

    render() {
        return (
            <div className="page" id="page">
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
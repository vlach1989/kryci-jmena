import React from 'react';
import html2pdf from "html2pdf.js";
import Page from "./Page";

class MapsGenerator extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onGenerate() {
        var element = document.getElementById('maps');
        html2pdf(element);
    }

    render() {
        return (
            <div className="maps-generator">
                <div className="form">
                    <button onClick={this.onGenerate}>Save to PDF</button>
                </div>
                <div className="maps" id="maps">
                    <Page
                        width={5}
                        height={5}
                        options={{
                            black: 1,
                            silver: 1,
                            home: 9,
                            guest: 8,
                            neutral: 6
                        }}
                    />
                </div>
            </div>
        );
    };
}

export default MapsGenerator;
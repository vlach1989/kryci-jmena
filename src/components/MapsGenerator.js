import React from 'react';
import html2pdf from "html2pdf.js";
import Page from "./Page";
import _ from "lodash";

class MapsGenerator extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            withSilver: 0,
            classic: 0,
            doubleBlack: 0
        }
    }

    onGenerate() {
        var element = document.getElementById('maps');
        html2pdf(element);
    }

    onCountChange(key, e) {
        this.setState({
            [key]: Number(e.target.value)
        });
    }

    render() {
        const withSilver = _.times(this.state.withSilver, _.constant(null));
        const classic = _.times(this.state.classic, _.constant(null));
        const doubleBlack = _.times(this.state.doubleBlack, _.constant(null));

        return (
            <div className="maps-generator">
                <div className="form">
                    <label>
                        Classic:
                        <input type="text" value={this.state.classic} onChange={this.onCountChange.bind(this, 'classic')}/>
                    </label>
                    <label>
                        With silver:
                        <input type="text" value={this.state.withSilver} onChange={this.onCountChange.bind(this, 'withSilver')}/>
                    </label>
                    <label>
                        Double black:
                        <input type="text" value={this.state.doubleBlack} onChange={this.onCountChange.bind(this, 'doubleBlack')}/>
                    </label>
                    <button onClick={this.onGenerate}>Save to PDF</button>
                </div>
                <div className="maps" id="maps">
                    {classic.map(item => (
                        <>
                            <Page
                                width={5}
                                height={5}
                                options={{
                                    black: 1,
                                    silver: 0,
                                    home: 9,
                                    guest: 8,
                                    neutral: 7
                                }}
                            />
                            <div className="html2pdf__page-break"/>
                        </>
                    ))}
                    {withSilver.map(item => (
                        <>
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
                            <div className="html2pdf__page-break"/>
                        </>
                    ))}
                    {doubleBlack.map(item => (
                        <>
                            <Page
                                width={5}
                                height={5}
                                options={{
                                    black: 2,
                                    silver: 0,
                                    home: 9,
                                    guest: 8,
                                    neutral: 6
                                }}
                            />
                            <div className="html2pdf__page-break"/>
                        </>
                    ))}
                </div>
            </div>
        );
    };
}

export default MapsGenerator;
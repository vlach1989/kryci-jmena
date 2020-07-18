import React from 'react';
import html2pdf from "html2pdf.js";
import _ from "lodash";
import words from "./words";
import classnames from 'classnames';

const STEP = 24;

class WordsGenerator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          text: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onGenerate() {
        var element = document.getElementById('words');
        html2pdf(element, {filename: 'slova.pdf'});
    }

    onChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        const allWordsList = _.uniq(this.state.text.toUpperCase().replace(/ /g,'').split(","));
        let listPerPage = [];

        for (let i=0; i < allWordsList.length; i+=STEP) {
            listPerPage.push(allWordsList.slice(i, i+STEP));
        }

        return (
            <div className="words-generator">
                <h2>Vytváření slov</h2>
                <p>Do pole níže zadej slova oddělená čárkou:</p>
                <textarea rows="8" onChange={this.onChange} value={this.state.text} placeholder="Sem zadej slova oddělená čárkou"/>
                <button onClick={this.onGenerate}>Ulož do PDF</button>
                <div className="words" id="words">
                    {listPerPage.map((page, index) =>
                        <>
                            <div className="word-page" id="page">
                                {page.map((word,index) => {
                                    const length = word.length;
                                    const classes = classnames(
                                        "word", {
                                            "smaller": length > 12
                                        }
                                    );

                                    return (
                                        <div key={index} className={classes}>
                                            <div>{word}</div>
                                        </div>
                                    );
                                }
                                )}
                            </div>
                            <div className="html2pdf__page-break"/>
                        </>
                    )}
                </div>
            </div>
        );
    };
}

export default WordsGenerator;
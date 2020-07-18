import React from 'react';
import html2pdf from "html2pdf.js";
import _ from "lodash";
import words from "./words";
import classnames from 'classnames';

const STEP = 24;

class WordsGenerator extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onGenerate() {
        var element = document.getElementById('words');
        html2pdf(element);
    }

    render() {
        const allWordsList = _.uniq(words.toUpperCase().replace(/ /g,'').split(","));
        let listPerPage = [];

        for (let i=0; i < allWordsList.length; i+=STEP) {
            listPerPage.push(allWordsList.slice(i, i+STEP));
        }

        return (
            <div className="words-generator">
                <h2>Vytváření slov</h2>
                <button onClick={this.onGenerate}>Ulož do PDF</button>
                <div className="words" id="words">
                    {listPerPage.map(page =>
                        <>
                            <div className="word-page" id="page">
                                {page.map(word => {
                                    const length = word.length;
                                    const classes = classnames(
                                        "word", {
                                            "smaller": length > 12
                                        }
                                    );

                                    return (
                                        <div className={classes}>
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
import React from 'react';
import "../styles/jumbo-header.css";

function JumboHeader () {
    return (
        <div className="header">
            <div className="jumbotron jumbotron-fluid" id="jumbo">
                <div className="container">
                    <h1 className="header">Employee Directory</h1>
                    <p className="lead">Use the search box to narrow your results.</p>
                </div>
            </div>
            
        </div>
    );
};

export default JumboHeader;
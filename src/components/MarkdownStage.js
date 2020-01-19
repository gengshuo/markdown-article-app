import React from 'react';
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'

const MarkdownStage = ({ source, display }) => {
    if (display) {
        return (
            <div className="markdown-area">
                <ReactMarkdown source={source} />
            </div>
        )
    }
    return null;
}

MarkdownStage.propTypes = {
    source: PropTypes.string,
    display: PropTypes.bool.isRequired,
};

export default MarkdownStage;

 
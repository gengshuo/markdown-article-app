import React,{useState} from 'react';
import PropTypes from "prop-types";
import MarkdownStage from './MarkdownStage'

import '../css/markdown-editor.scss'

const ContentEditor = ({display, ...rest_props}) => {
    if (display) {
        return (
            <div className="input-content">
                <textarea className="editor-input" {...rest_props}></textarea>
            </div>
        )
    }
    return null;
}

ContentEditor.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
};

const MarkdownEditor = ({ value, isPreview, onChange }) => {

    return (
        <div className="markdown-editor">
            <ContentEditor value={value} onChange={onChange} display={!isPreview} />
            <MarkdownStage source={value} display={isPreview} />
        </div>
    )
}

MarkdownEditor.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isPreview: PropTypes.bool.isRequired,
};

export default MarkdownEditor;

 
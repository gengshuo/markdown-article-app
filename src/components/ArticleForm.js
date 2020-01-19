import React, { useState } from 'react'
import PropTypes from "prop-types";
import MarkdownEditor from './MarkdownEditor'


const ActicleFrom = ({ 
    actionName, 
    onSubmit, 
    onSending, 
    onCancel, 
    defaultSubject, 
    defaultContent 
}) => {

    const [subject, setSubject] = useState(defaultSubject || "");
    const [content, setContent] = useState(defaultContent || "");
    const [showPreview, setShowPreview] = useState(false);

    const onCurrentSubmit = (e) => {
        onSubmit(e, { subject, content });
    }

    const toggleEditorView = (e) => {
        e.preventDefault();
        setShowPreview(!showPreview);
    }

    const onClickCancel = (e) => {
        e.preventDefault();
        if (onCancel) {
            onCancel(e);
            return;
        }
        history.back();
    }

    return (
        <form onSubmit={onCurrentSubmit}>
            <h1>Create A New Article</h1>
            <div className="field-group-subject">
                <h3>Subject</h3>
                <div className="input-subject">
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
            </div>
            <div className="field-group-content">
                <h3>Content <button onClick={toggleEditorView}>{showPreview ? "Reutrn to Editor" : "Preview"}</button></h3>
                <hr />
                <MarkdownEditor value={content} isPreview={showPreview} onChange={(e) => setContent(e.target.value)} />
                <hr />
            </div>
            {onSending ? <p>Data Sending...Please wait</p> : <><button onClick={onClickCancel}>Cancel</button> | <button type="submit">{actionName}</button></>}
        </form>
    )
}

ActicleFrom.propTypes = {
    actionName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSending: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    defaultSubject: PropTypes.string,
    defaultContent: PropTypes.string,
};

export default ActicleFrom;
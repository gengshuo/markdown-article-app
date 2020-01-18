import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { withRouter, useParams } from "react-router-dom";
import {
    getByID as getArticleByID,
    create as createArticle,
    update as updateArticle
} from '../data_operator/Article'

export default withRouter(({ history }) => {

    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [selectedTab, setSelectedTab] = useState("editor");
    const [isLoading, setIsLoading] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const { id } = useParams();

    if (typeof id !== 'undefined') {
        useEffect(() => {

            const abortController = new AbortController();
            const signal = abortController.signal;

            setIsDataLoading(true);
            setIsEditing(true);
            getArticleByID(id, response => {
                setSubject(response.data.subject);
                setContent(response.data.content);
                setSelectedTab("editor")
                setIsDataLoading(false);
            }, console.log, signal);

            return function cleanup () {
                abortController.abort();
            };

        }, []);
    }

    const openEditor = () => {
        setSelectedTab("editor");
    }

    const openPreview = () => {
        setSelectedTab("preview");
    }

    const onClickCreate = () => {
        const data = { subject, content };
        setIsLoading(true);
        createArticle(data, response => {
            if (response.result === "success") {
                // Delay for loading text displaying...
                setTimeout(() => {
                    alert("The article is created successfully!");
                    history.push("/");
                    setIsLoading(false);
                }, 500);
            };
        }, console.log);
    }

    const onClickSave = () => {
        const data = { id, subject, content };
        setIsLoading(true);
        updateArticle(data, response => {
            if (response.result === "success") {
                // Delay for loading text displaying...
                setTimeout(() => {
                    alert(`The article (#${id}) is updated successfully!`);
                    history.push(`/article/${id}/show`);
                    setIsLoading(false);
                }, 500);
            };
        }, console.log);
    }

    const onClickCancel = () => {
        history.push("/");
    }

    const SubmitButton = () => {
        if (isEditing) return <button onClick={onClickSave}> Save </button>;
        else return <button onClick={onClickCreate}> Create </button>;
    }

    return (
        <React.Fragment>
            <div style={{ display: isDataLoading ? "none" : "" }}>
                <h2>Subject</h2>
                <div>
                    <input
                        type='text'
                        style={{ width: '150px' }}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <h2>Content</h2>
                <div style={{ display: selectedTab === "editor" ? "" : "none" }}>
                    <textarea
                        style={{ width: '500px', height: '300px' }}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div style={{ display: selectedTab !== "editor" ? "" : "none" }}>
                    <ReactMarkdown source={content} />
                </div>
                <div style={{ display: isLoading ? "none" : "" }}>
                    <hr />
                    <button onClick={openEditor}>Editor</button> | <button onClick={openPreview}>Preview</button>
                    <hr />
                    <button onClick={onClickCancel}>Cancel</button> | <SubmitButton />
                    <hr />
                </div>
                <p style={{ display: isLoading ? "" : "none" }}>{isEditing ? "Saving" : "Creating"}...</p>
            </div>
            <p style={{ display: isDataLoading ? "" : "none" }}>Loading...</p>
        </React.Fragment>
    );
})
import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'

import MarkdownStage from './MarkdownStage'
import ArticleForm from './ArticleForm'

import {
    getByID as getArticleByID,
    update as updateArticle
} from '../data_operator/Article'

export default withRouter(({ history }) => {

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [onEditing, setOnEditing] = useState(false);
    const [onSending, setOnSending] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

        getArticleByID(id, response => {
            setArticle(response);
            setIsLoading(false);
        }, console.log, signal);

        return function cleanup() {
            abortController.abort();
        };

    }, []);

    const onSubmit = function (e, data) {
        e.preventDefault();
        data = { id, ...data };
        setOnSending(true);
        updateArticle(data, response => {
            if (typeof response.id !== "undefined") {
                // Delay for loading text displaying...
                setTimeout(() => {
                    setIsLoading(false);
                    alert(`The article (#${id}) is updated successfully!`);
                    location.reload();
                }, 500);
            };
        }, console.log);
    }

    const onClickEdit = () => {
        setOnEditing(true);
    }

    const onClickCancel = () => {
        setOnEditing(false);
    }

    const EditForm = () => (
        <ArticleForm
            actionName="Update"
            onSubmit={onSubmit}
            onSending={onSending}
            onCancel={onClickCancel}
            defaultSubject={article.subject}
            defaultContent={article.content}
        />
    )

    const Content = () => {
        if (isLoading) return <p>Loading...</p>;
        else {
            return (
                <div>
                    <h2>{article.subject} </h2>
                    <button onClick={onClickEdit}>Edit</button> | <button onClick={() => history.push(`/`)}>Return to List</button>
                    <hr />
                    <MarkdownStage source={article.content} display={true} />
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            {onEditing ? <EditForm /> : <Content />}
        </React.Fragment>
    );
})
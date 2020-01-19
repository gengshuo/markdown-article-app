import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ArticleForm from './ArticleForm'
import { 
    getList as getArticleList, 
    create as createArticle 
} from '../data_operator/Article'

export default () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [onSending, setOnSending] = useState(false)
    const [openFrom, setOpenForm] = useState(false)

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getArticleList(response => {
            setArticles(response.data);
            setIsLoading(false);
        }, console.log, signal);

        return function cleanup () {
            abortController.abort();
        };

    }, []);

    const DataList = () => {
        if (isLoading) return <p>Loading...</p>;
        else {
            let items = [];

            for (let i = 0, len = articles.length; i < len; i++)
                items.push(<li key={`arcticle_item_${i}`}><Link to={`/article/${articles[i].id}/show`}>{articles[i].subject}</Link></li>)

            return <ul>{items}</ul>
        }
    }

    const onSubmit = function (e, data) {
        e.preventDefault();
        setOnSending(true);
        createArticle(data, response => {
            if (response.result === "success") {
                // Delay for loading text displaying...
                setTimeout(() => {
                    alert("The article is created successfully!");
                    location.reload();
                    setOnSending(false);
                }, 500);
            };
        }, console.log);
    }

    const onClickCancel = (e) => {
        setOpenForm(false);
    }

    const onClickCreate = (e) => {
        setOpenForm(true);
    }

    const NewForm = () => (
        <ArticleForm
            actionName="Create"
            onSubmit={onSubmit}
            onSending={onSending}
            onCancel={onClickCancel}
        />
    )

    const Content = () => (
        <div>
            <h1>Article List</h1>
            <button onClick={onClickCreate}>New Article</button>
            <DataList />
        </div>
    )

    return (
        <React.Fragment>
            {openFrom ? <NewForm /> : <Content />}
        </React.Fragment>
    );
}
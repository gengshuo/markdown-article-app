import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import { getList as getArticleList } from '../data_operator/Article'

export default () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <React.Fragment>
            <h1>Article List</h1>
            <div>
                <NavLink to="/article/new">Add a new article</NavLink>
            </div>
            <DataList />
        </React.Fragment>
    );
}
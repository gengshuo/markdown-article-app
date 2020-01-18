import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { withRouter, useParams } from 'react-router-dom'
import { getByID as getArticleByID } from '../data_operator/Article'

export default withRouter(({ history }) => {

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

        getArticleByID(id, response => {
            setArticle(response.data);
            setIsLoading(false);
        }, console.log, signal);

        return function cleanup () {
            abortController.abort();
        };

    }, []);

    const onClickEdit = () => {
        history.push(`/article/${id}/edit`);
    }

    const Content = () => {
        if (isLoading) return <p>Loading...</p>;
        else {
            return (
                <React.Fragment>
                    <div>
                        <h2>{article.subject}</h2>
                    </div>
                    <hr/>
                    <button onClick={onClickEdit}>Edit</button> | <button onClick={()=>history.push(`/`)}>Return to List</button>
                    <hr/>
                    <ReactMarkdown source={article.content} />
                </React.Fragment>
            )
        }
    }

    return <Content />;
})
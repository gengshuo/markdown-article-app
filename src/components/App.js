import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'
import ArticleDetail from './ArticleDetail'

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ArticleList} />
                <Route exact path='/article/new' component={ArticleForm} />
                <Route path='/article/:id/show' component={ArticleDetail} />
                <Route path='/article/:id/edit' component={ArticleForm} />
            </Switch>
        </Router>
    )
}

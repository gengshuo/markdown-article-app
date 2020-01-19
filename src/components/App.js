import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ArticleList from './ArticleList'
import ArticleDetail from './ArticleDetail'

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ArticleList} />
                <Route path='/article/:id/show' component={ArticleDetail} />
            </Switch>
        </Router>
    )
}

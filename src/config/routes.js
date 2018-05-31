import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import { ArticlesType, ArticlesList, Article, About } from '../containers'
import { HOME, ARTICLES_LIST, ARTICLE, ABOUT } from '../constants/routes'

export default () => (
  <React.Fragment>
    <Route path={HOME} component={App}>
      <IndexRoute component={ArticlesType} />
    </Route>
    <Route path={ARTICLES_LIST} component={ArticlesList} />
    <Route path={ARTICLE} component={Article} />
    <Route path={ABOUT} component={About} />
  </React.Fragment>
)

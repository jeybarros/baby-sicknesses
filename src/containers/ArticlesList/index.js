import { connect } from 'react-redux'
import ArticlesList from '../../pages/ArticlesList'
import { getArticles, getArticle, getArticleSearch, getAbout } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onGetArticleClick: articleId => dispatch(getArticle(articleId)),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})  

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)

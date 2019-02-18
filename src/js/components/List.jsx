import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  articles: state.articles,
  error:state.error.msg
});

const ConnectedList = ({ articles, error }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
        <p>{error}</p>  
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
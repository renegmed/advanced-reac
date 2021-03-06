import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: api.getArticles() ,
            authors: api.getAuthors() ,
        };
        console.log(this.state);
    }
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],  // this is a function
    };
    render() {
        return (
             <ArticleList 
                articles={this.state.articles}
                articleActions={this.articleActions}
             />
        );
    }
}
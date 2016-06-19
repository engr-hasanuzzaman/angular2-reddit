import { Component } from "angular2/core";
import {Article} from "./article";
// decoretor
@Component({
    selector: 'article',
    inputs: ['article'],
    host:{
        class: 'row'
    },
    templateUrl: '/app/templates/article.component.html'
})

export class ArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.votes += 1;
        return false;
    }
    voteDown(): boolean {
        this.article.votes -= 1;
        return false;
    }
}

// end of article component
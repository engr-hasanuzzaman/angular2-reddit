/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { Article } from "./article";
import { ArticleComponent } from "./article.component";
//import { ArticleComponent };
// declare article component


// decoretor
@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: 'app/templates/reddit.component.html'
})

// class declare immediate next to component decorator
// is the component class
class Reddit {
    articles: Article[];

    constructor(){
        this.articles = [
            new Article('Google', 'https://www.google.com/', 'comment 1', 20 ),
            new Article('Facebook', 'https://www.facebook.com/', 'comment 1', 19 ),
            new Article('Twitter', 'https://www.twitter.com/', 'comment 1', 15 ),
            new Article('Stack Overflow', 'https://www.stackoverflow.com/', 'comment 1', 20 ),
            ]
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement, comment: HTMLInputElement): void{
        this.articles.push(new Article(title.value, link.value, comment.value, 0));
        title.value = '';
        link.value = '';
        comment.value = '';
    }
}

bootstrap(Reddit);
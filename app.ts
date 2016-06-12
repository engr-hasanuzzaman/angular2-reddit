/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
//import { ArticleComponent };
// declare article component
// decoretor
@Component({
    selector: 'article',
    inputs: ['article'],
    host:{
        class: 'row'
    },
    template: `
<div class="four wide column center aligned votes">
<div class="ui statistic">
<div class="value">
{{ article.votes }}
</div>
<div class="label">
Points
</div>
</div>
</div>
<div class="twelve wide column">
<a class="ui large header" href="{{ article.link }}">
{{ article.title }}
</a>
<ul class="ui big horizontal list voters">
<li class="item">
<a href (click)="voteUp()">
<i class="arrow up icon"></i>
upvote
</a>
</li>
<li class="item">
<a href (click)="voteDown()">
<i class="arrow down icon"></i>
downvote
</a>
</li>
</ul>
</div>
`
})

class ArticleComponent {
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

class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}

// end of article component

// decoretor
@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
<form class="ui large form segment">
<h3 class="ui header">Add a Link</h3>
<div class="field">
<label for="title">Title:</label>
<input name="title">
</div>
<div class="field">
<label for="link">Link:</label>
<input name="link">
</div>
</form>
    <!-- start adding here -->
<div class="ui grid posts">
<article
*ngFor="#article of articles"
    [article]="article">
</article>
</div>
<!-- end adding here -->
`
})

// class declare immediate next to component decorator
// is the component class
class Reddit {
    articles: Article[];

    constructor(){
        this.articles = [
            new Article('Google', 'https://www.google.com/', 20 ),
            new Article('Facebook', 'https://www.facebook.com/', 19 ),
            new Article('Twitter', 'https://www.twitter.com/', 15 ),
            new Article('Stack Overflow', 'https://www.stackoverflow.com/', 20 ),
            ]
    }
}

bootstrap(Reddit);
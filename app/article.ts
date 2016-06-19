export class Article {
    title: string;
    link: string;
    votes: number;
    comment: string;

    constructor(title: string, link: string, comment: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.comment = comment;
    }
}
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article(title, link, comment, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                    this.comment = comment;
                }
                return Article;
            }());
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.js.map
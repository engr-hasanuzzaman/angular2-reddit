/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
// decoretor
@Component({
    selector: 'my-reddit',
    template: `
<ul>
    <li *ngFor="#name of names">Hello {{ name }}</li>
</ul>
`
})

// class declare immediate next to component decorator
// is the component class
class Reddit {
    names: string[];

    constructor(){
        this.names = ['sumon', 'santo', 'shila', 'sumy', 'salma'];
    }
}

bootstrap(Reddit);
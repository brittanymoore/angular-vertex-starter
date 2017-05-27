import { Component } from '@angular/core';

@Component({
    selector:'app',
    template:`<div>{{message}}</div>`
})
export class AppComponent {
    private message: string = "Hello, World!";
}
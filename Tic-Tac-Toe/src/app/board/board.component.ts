import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})

export class BoardComponent {
    squares: any[];
    xIsNext: boolean;
    winner: string;

    constructor() {}

    ngOnInit() {
        this.newGame();
    }

    newGame() {
        this.squares = Array(9).fill(null)
        this.winner = null;
        this.xIsNext = true;
    }

    get player() {
        return this.xIsNext ? 'o' : 'x';
    }

    makeMove(idx: number) {
        if(!this.squares[idx]) {
            
        }
    }
}
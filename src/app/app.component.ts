import { Component } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searched: string = '';
  typingTimer: any;
  typingTimeout = 1000;
  products: Product[] = [
    {
      name: "Laptop",
      image: "/assets/laptop.jpg",
      price: "$275"
    },
    {
      name: "Playstation",
      image: "/assets/PS4.png",
      price: "300$"
    },
    {
      name: "Football",
      image: "/assets/football.jpg",
      price: "75$"
    },
    {
      name: "Basketball",
      image: "/assets/basketball.jpg",
      price: "50$"
    }
  ]
  productsToDisplay: Product[] = this.products;
  isSearching: boolean = false;

  onSearchChanged(){
    if (this.searched !== ""){
      this.productsToDisplay = [];
      clearTimeout(this.typingTimer);
      this.isSearching = true;
      this.typingTimer = setTimeout(() => {
        this.productsToShow(this.searched);
        this.isSearching = false;
      }, this.typingTimeout);
    }
    else{
      this.productsToDisplay = this.products;
    }

  }

  private productsToShow(searchWord: string){
    this.products.forEach(product => {
      var score = this.getWordDistance(searchWord.toLowerCase(),product.name.toLowerCase());
      if(score <= 5 ){
        this.productsToDisplay.push(product);
      }
    })
  }

  private getWordDistance(word1: string, word2: string): number{
    const numberOfRows: number = word2.length + 1;
    const numberOfColumns: number = word1.length + 1;
    const levenshteinGraph: number[][] = new Array(numberOfRows).fill([]).map(() => new Array(numberOfColumns).fill(0));

    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        if (Math.min(i, j) === 0) {
          levenshteinGraph[i][j] = Math.max(i, j);
        } else {
          const characterOfWord1: string = word1.charAt(j - 1);
          const characterOfWord2: string = word2.charAt(i - 1);
          const deleteCost: number = levenshteinGraph[i - 1][j] + 1;
          const insertionCost: number = levenshteinGraph[i][j - 1] + 1;
          const replaceCost: number = levenshteinGraph[i - 1][j - 1] + (characterOfWord1 !== characterOfWord2 ? 1 : 0);
          const minimumCost: number = Math.min(deleteCost, insertionCost, replaceCost);
          levenshteinGraph[i][j] = minimumCost;
        }
      }
    }
    return levenshteinGraph[numberOfRows - 1][numberOfColumns - 1];
  }
}

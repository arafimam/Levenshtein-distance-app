# SearchProduct Application

This Application uses the Levenshtein-distance algorithm to find related words and display the product.
<img width="480" alt="image" src="https://github.com/arafimam/Levenshtein-distance-app/assets/86128944/d50b5bd3-a1bb-4232-9ccf-e66946a1d360">

Here is the basic UI of the app:
<img width="944" alt="image" src="https://github.com/arafimam/Levenshtein-distance-app/assets/86128944/5713c239-0eaa-4de9-a07b-cd5041e2a3b0">

Product List:
<img width="118" alt="image" src="https://github.com/arafimam/Levenshtein-distance-app/assets/86128944/dc357909-fc3d-4d5c-b6d5-a82242a83006">

The algorithm is used during the search. For example when we search "ltop" the algorithm finds that the closest word to "ltop" is Laptop and displays only that product. 
A loader is shown when the algorithm runs:
<img width="956" alt="image" src="https://github.com/arafimam/Levenshtein-distance-app/assets/86128944/2f1a5279-492c-401b-9dc7-6fb8066def1c">

and then only shows the related product:
<img width="949" alt="image" src="https://github.com/arafimam/Levenshtein-distance-app/assets/86128944/8147bc00-d530-4a2e-9cfc-ef04c07f3567">

# How to test:
1. Clone the application
2. Install the angular CLI
3. run ng serve

# Future Prospects
1. Looking to speed up the search process for a large number of words (products in this context)
2. A full stack application that utilizes this algorithm



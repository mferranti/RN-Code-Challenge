# RN-Code-Challenge


## Instructions:

Please clone the repository, complete the exercise, and submit a Pull Request for us to review! If you have any questions, you can reach out directly here or leave comments on your PR which we will respond to. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README. 

* npm install
* react-native run-ios

## Delivery Steps: 

1. Create a branch from `master` named `base` and push all the third-party code needed (Libraries, Frameworks, etc.).
2. Create a branch from `base` named `code-challenge` and push your own code (Remember to update the Readme file providing any instructions on how to run the project if needed).
3. Create a Pull Request from `code-challenge` to `base` for us to review.


## Please answer the following questions once you finish codding:

A) Describe the strategy used to consume the API endpoints and the data management.

* I used redux as state container because this was a requirement. I created 2 reducers, one for the cocktail list and another for the individual drink data. In these reducers i declared the action creators and the properly reducer (redux with ducks). To making api calls i used Axios and ReduxAxiosMiddleware to fill in a simple way the reducers from api responses. This middleware create automatically the actions LOAD, LOAD_SUCCESS and LOAD_FAIL for every api call.
The action creator are called in the Screen components on componentDidMount and if it's needed the data is passed to children as props.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
* I used react-navigation because is simple the requirements hasn't a very complex routing features. I don't think that the amount of users affect the decision of the router library. I would change the routing if the required features warrant it. For example if i need a better perfomance with routing i would use react-native-navigation perhaps, because it uses the native modules instead of JS bridge.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
* Yes, i use one of the benefits of FlatList. FlatList doesn't render all items in the same time, it render a item if it is in screen or if it is close. So, in renderItem of FlatList i call to a component CocktailIngredients who call an action creator on componentDidMount to fetch the individual drink data. If you don't scroll to much only will called a few of cocktails instead of all list of drinks.

D) Would you like to add any further comments or observations?
* Here is my todo-list:
* Better aproximation to wireframe design (Fonts, icons, etc)
* Filter feature of the list (this should not be hard)
* Add tests. I haven't experience with testing in React Native but i think jest seems simple to this task
* Only tested with ios simulator (Iphone X). Check if it works fine in Android.

## Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.


## Requirements:

1. Use the React Native CLI to create the application (The Expo CLI is not allowed).
2. Use Redux as the state container over other options like React Context in order to manage the data flow on the app.


## Features:

**1. Cocktails list:**

For each row of the list it will display the Cocktail name, photo and ingredients (See wireframe 1). 
In the case where there are more than 2 ingredients, add a label that reads "y X ingredientes más" where `X` is the amount of extra ingredients.

The API endpoint that has the list of drinks with Name and Photo is: 

http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

This returns a JSON list of cocktails, and the information needed in order to populate each row of the list.

```
{
 	strDrink,           → Cocktail name
     	strDrinkThumb,  → Photo URL
      	idDrink       → Cocktail ID
}
```

You'll need to decide the approach to get the ingredients data that is not present on this endpoint. You can comment that approach and the implications inside the code and what can be done to improve this.

Wireframe 1:

![screen shot 2018-02-02 at 12 53 57](https://user-images.githubusercontent.com/263229/35742087-40b1ce26-0818-11e8-91d7-5c2ea0d4a6aa.png)




**2. Cocktail detail:**

Once the user taps on a row from the list mentioned in the previous feature it will push a new screen with the selected cocktail’s details, where it will show it’s name, photo, ingredients (with the quantity on each case next to it) and instructions (See wireframe 2).

The endpoint to be used for this is the following:
 
http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink} → Cocktail ID
I.g.: http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

The endpoint returns a JSON with the cocktails info, the needed properties are:
```
{
	strInstructions,  → instructions
	strDrink,         → cocktail name
	strDrinkThumb,    → photo URL
	strIngredient1,   → ingredient 1
	...
	strIngredientN    → ingredient N
}
```

Wireframe 2

![screen shot 2018-02-02 at 12 53 37](https://user-images.githubusercontent.com/263229/35742155-63205b1c-0818-11e8-8b4b-608a46eaa718.png)
	
  
  
  
**3. Bonus Points: (Optional)**

A) Implement a filter by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.

B) Include test coverage for the core features.



Thank you and looking forward to seeing your great work!




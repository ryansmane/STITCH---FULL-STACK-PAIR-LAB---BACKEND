# 👨‍💻 Pair Project
## Collaborators
### Ryan Zimmer
### Jade Kang
## Project Description
- Build an api that gathers information for outfit selections
## Plan for the Day
### Daisy and Jade will be building the following:
- Download dependencies (mongoose, express)
- Set up local host connection and mongo database connection
- Define 4 models/1 controller: shirt, pants, jacket, outfit
- 

-to communicate.
## Items in detail
### Recipe schema:
    - Title
    - Description
    - Instructions
    - Ingredients
### Controller
    - It's the recipe controller:
    	- GET all recipes
        - GET individual recipes/:title
        - POST recipe to save a new recipe
        - PUT recipe to update a recipe (recipe/:title)
        - DELETE recipe to delete a recipe (recipe/:title)
### Handlebars
- New Handlebar
  ```
  <h2>Add a new Recipe:</h2>
  	<form action="/recipes" method="post" accept-charset="utf-8">
  		<label for="title">Title</label>
      	<input type="text" id="title" name="title" >
      	<input type="submit" value="Add to do">
      </form>
  ```
- Show Handlebar
  ```<h1>{{title}}</h1>
  	{{#if complete}}
      	<p>Cook!</p>
      {{else}}
      	<p>Haven't tried yet!</p>
      {{/if}}
      	<form action="/todos/{{_id}}?_method=delete" method="post">
      		<input type="submit" value="Remove">
      	</form>
  ```
- Edit Handlebar
  ```
  <h2>Edit My Recipe:</h2>
  		<form action="/todos/{{this._id}}?_method=put" method="POST">
  			<p>
              	<label>Title:</label>
                  <input type="text" value="{{this.title}}" name="title" />
              </p>
  			<p>
              	<label>Complete:</label>
     		 {{#if complete}}
     			 <input type="checkbox" name="complete" checked />
      	{{else}}
     			 <input type="checkbox" name="complete" />
      	{{/if}}
  			</p>
  			<input type="submit" value="Update" />
  		</form>
  ```
- Delete Handlebar
  ```
  <form action="/recipes/{{_id}}?_method=delete" method="post">
  <input type="submit" value="Remove"></form>
  ```
- Index Handlebar
  ```
  <h1>Yummy!</h1>
  <ul>
  {{#each todos}}
  <li>
      <a href='todos/{{this._id}}'>{{this.title}}</a>
      <a href='todos/{{this._id}}/edit'>Edit</a>
  </li>
  {{/each}}</ul> <a href='todos/new'>New</a>
  ```


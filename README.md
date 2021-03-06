## GoogleBooksReact

Google books react is a creat-react-app application that searches Google books for a book's title and returns information about the book.

The app opens with a search engine and a proxy search "A Madness of Angels(American title: "Electric Blue Angels")" by Kate Griffin.
![google-react-start](google-books-react/client/src/images/readme/openning.png)

If the user enters in a title, for example Terry Pratchet's the Light Fantastatic, the app returns a short synopsis of the book and the option to save the book. If this option is selected, the book is saved in a Mongo database.
![google-react-search](google-books-react/client/src/images/readme/search.png)
![google-react-results](google-books-react/client/src/images/readme/results.png)

Finally, if the user wishes to revisit the particulars of the chosen book, he or she can click on it and the database will return the information.
![google-react-resume](google-books-react/client/src/images/readme/resume.png)

This app, while simple, is a great introduction to create-react-app. It teaches:

* basic react state and setState
* basic event handlers and componentDidMount
* basic routing and API calls
* Mongodb and Mongoose
* basic react Ui, className and component styling

In all it offers a strong base on which to build larger more complex react apps.

##Where to Find

This app is deployed on Heroku at https://shrouded-inlet-36558.herokuapp.com/

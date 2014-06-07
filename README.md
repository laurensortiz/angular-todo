# Up and Running - Front End Developer Test


## App initialization
Run the following commands in order to start the application

* npm install
* bower install
* grunt serve

Open your browser on http://127.0.0.1:9000

All the code is fully commented on the /app folder.

## App's big picture
This app uses html5 local storage and uses a polyfill for the browsers that don't support this feature, it also uses cookies for user's session.

It fully relies on client side technologies, it is not using anything for the backend. Nevertheles the requirements for this test give "extra points" for creating a backend service I didn't do it because I think it goes out of the scope of a front end developer test.

## User Credentials

email: test@test.com
pwd:   123456

When the user authenticates on /login the app makes an ajax request to /fake-user/user.json. If the data returned from the .json file is the same as the one from the login form, the app creates a cookie using Angular Cookie service.


## Tech Stack


* ###Angular.js
  MV* framework of choice.

* ###Twitter Bootstrap
  Styling all the application.

* ###HTML5 Local Storage
  Used for storing all the ToDo's items / lists

* ###Angular-UI
  Included it for reusing directives and drag n drop functionalities.

* ###Head.js
  Async loading of vendor scripts before Angular and Require are called

* ###Require.js
  AMD functionality

* ###Yeoman Angular Generator
  Project generator, has useful scaffolding functionalities

* ###Grunt.js
  Task runner
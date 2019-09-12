## Articles list
 
### Installation
Run `yarn` and `yarn start`
 
### Requirements
- [x] displaying list of articles
- [x] filtering articles by the category
- [x] sorting articles by the publish date

### Author's assumptions
- [x] when none filters are checked - all articles are displayed
- [x] changing the filter persists the sort order
- [x] it is possible to display part of the articles when some of the requests are likely to fail, but I consider it misleading from the user perspective and prefer to re-fetch all of the articles

### Frameworks and libraries
- The application is built with React.js. 
- It uses Redux with redux-thunk middleware to manage the state conveniently. 
- Requests are made with axios. 
- None UI library was used - all styles were created by the author. 
- In order to keep the project clean - eslint with AirBnB configuration was used.

### Possible improvements
- Adding tests.
- Extracting some pieces of code to separate reusable components (Button, Icon, Checkbox)
- Redux-logger should be hidden for production build
- Some kind of a mechanism for retrying failed requests could be useful for such an error prone backend
- Adding a loader when the request is ongoing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run project

`git clone` project https://github.com/jiangtt18/subscription.<br />
`npm install` to install all package dependencies.<br />
`npm start` to run app in the development mode.<br />
open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Features
- [x] The app should display the existing subscription information upon load 
- [x] Changing any of the subscription details (plan or seats) should show the price of the updated subscription
- [x] The update button should be disabled unless previewing a subscription that is different from the existing subscription. 
- [x] Clicking on the 'Update' button should update the subscription 
- [x] A successful submission should display a confirmation screen showing both the previous and updated subscription details. The updated details that differ from the previous subscription should be highlighted.


## Notes
This is a purely frontend project (no backend and database)<br />
Data is mocked through JSON rather than call API end points

# Future Directions
Better input Form Validation. Currently input is restricted to non negative number.<br />
Set a max val for seats<br />
Format price in a more readable way.($200,000,000,000)<br />
Enhance CSS (textoverflow...)<br />
Enhance UI/UX by providing better error message + polishing empty state components

    

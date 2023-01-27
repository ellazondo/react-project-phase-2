# Fashion for the weather

## Demo

Use these photos as an example of how the app should work:\

### Home Page
This is a simple starting page that lets you know you have arrived at Fasion for the Weather.\
The Navbar give you the options of Home / Weather / Outfit Inspo\

![Screen Shot 2023-01-27 at 9 28 51 AM](https://user-images.githubusercontent.com/102162069/215110758-4cdddc89-c2f8-41b2-92ea-b565ac2e64db.png)

### Weather Page
Once you click on Weather it takes you to a Weather App that renders the current date, location and temperature.\
You also have the ability to search a different city of your choice.\
Depending on the current temperature, a condidtional map will map through the db.json and render whichever temperature matches to that of the current temperature.\

![Screen Shot 2023-01-27 at 9 11 40 AM](https://user-images.githubusercontent.com/102162069/215109932-a8a20d8a-8b3e-4ff8-bba5-24972e8ed4bd.png)


### Outfit Inspo Page
This page allows you to see all of the outfits listed in the db.json. Each data item is rendered as a photo, title, and suggested temperature.\
You are able to search through all of the data based on the desired temperature.\

![Screen Shot 2023-01-27 at 9 32 31 AM](https://user-images.githubusercontent.com/102162069/215111686-a2e6afc3-fd9f-47fa-a017-bdafd3327a0d.png)

### Bottom of Outfit Inspo Page
At the bottom of this page you have the opportunity to add your own outfit based on the temperature you think is appropriate.\

![Screen Shot 2023-01-27 at 9 43 03 AM](https://user-images.githubusercontent.com/102162069/215114027-90fdacc9-5d78-4db0-ad39-1dd927875ea5.png)



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server --watch db.json`

Launches the json database.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

This will start the react server. you will be prompted with a message in the terminal that says there is already a server running and would you like to start on a different server y/n, your response is 'y'.\



# Weather Dashboard App

## Overview

The **Weather Dashboard App** is a React-based web application that allows users to view the weather conditions for multiple cities. The app supports toggling between Celsius and Fahrenheit for temperature display and features a simple, responsive UI built with Material-UI. Users can dynamically add and remove cities, and the app persists the list of cities using local storage.

## Features

- **Add/Remove Locations**: Users can add new cities and view weather information for each one.
- **Temperature Unit Toggle**: Toggle between Celsius and Fahrenheit units.
- **Weather Information**: Displays temperature, weather description, humidity, and wind speed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **LocalStorage**: Saves the list of cities locally so they persist on page reload.

## Prerequisites

Before you can run this project, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

## Setting Up the Project

1. **Clone the Repository**  
   Clone this repository to your local machine by running:

   ```bash
   git clone https://github.com/your-username/weather-dashboard-app.git

   ```

2. **Navigate to the Project Directory**
   Change into the project directory:

   ```bash
   cd weather-dashboard-app

   ```

3. **Install Dependencies**
   Install the necessary packages by running:

   ```bash
   npm install

   ```

4. **Get an OpenWeatherMap API Key**
   To fetch weather data, you will need an API key from OpenWeatherMap. You can sign up for free at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

5. **Create an Environment File**
   In the root directory of the project, create a `.env` file and add your OpenWeatherMap API key like this:

   ```bash
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key

   ```

6. **Run the Application**
   Start the development server by running:
   
   ```bash
   npm start
   ```

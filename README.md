# 🌦️ Weather Report React

A responsive weather application built with **React** that allows users to search for any city and view real-time weather information using the **OpenWeather API**.

The application uses **Axios** for API requests and provides a clean, responsive interface with weather icons, loading states, and user-friendly error handling.

## 🚀 Live Demo

**Live Demo:** Add your GitHub Pages URL here

## 📸 Features

* 🌍 Search weather by city name
* 🌡️ Display current temperature
* 🌤️ Real-time weather conditions
* 💧 Humidity information
* 💨 Wind speed
* 🌡️ Feels-like temperature
* 🔵 Atmospheric pressure
* 🖼️ Dynamic weather icons from OpenWeather
* ⏳ Loading indicator while fetching data
* ⚠️ Error handling for invalid city names and API failures
* 📱 Fully responsive design
* 🎨 Modern glassmorphism-style UI
* 🌍 Atmospheric Earth background
* ⌨️ Search using the button or Enter key

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Axios**
* **OpenWeather API**
* **HTML5**
* **CSS3**
* **Flexbox**
* **CSS Grid**
* **Media Queries**
* **Google Fonts**

## 📂 Project Structure

```text
weather-report-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── earth-background.jpg
│   │
│   ├── components/
│   │   ├── WeatherCard.js
│   │   └── WeatherSearch.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🔑 API Configuration

This project uses the **OpenWeather API** to retrieve current weather information.

Create a `.env` file in the project root:

```env
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

The `.env` file should **not** be committed to GitHub.

Make sure `.gitignore` contains:

```text
.env
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd weather-report-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env` file and add your OpenWeather API key:

```env
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

### 5. Start the development server

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🔄 Application Flow

```text
User enters city
        ↓
React captures user input
        ↓
Axios sends GET request
        ↓
OpenWeather API
        ↓
Weather JSON response
        ↓
React extracts required data
        ↓
Weather state updated
        ↓
Weather information displayed
```

## 🧠 React Concepts Practiced

This project demonstrates practical usage of:

* React functional components
* `useState`
* Props
* Controlled form inputs
* Event handling
* Conditional rendering
* Async/Await
* Axios API requests
* Environment variables
* Dynamic API URLs
* Error handling
* Loading states
* Responsive CSS

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Responsive behavior is implemented using **CSS Grid, Flexbox, and Media Queries**.

## 🎯 Project Objective

The objective of this project was to build a real-world React application that consumes an external API and dynamically displays weather information based on user input.

It provides hands-on experience with **API integration, React state management, asynchronous operations, component-based architecture, responsive design, and error handling**.

## 🔮 Future Enhancements

Possible future improvements include:

* 📍 Map-based location selection
* 📅 Multi-day weather forecast
* 🌅 Sunrise and sunset information
* 🌡️ Celsius/Fahrenheit toggle
* 📍 Current location detection
* 🌦️ Weather-based dynamic backgrounds
* ⭐ Favorite cities
* 🌙 Dark/light theme

## 👨‍💻 Author

**Kabilan Baskaran**

Built as part of my journey in learning and developing modern React applications.

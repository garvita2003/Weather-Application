# Weather Application 🌤️

## 📌 Introduction

**Weather Application** is a modern, responsive React-based weather forecasting application that provides real-time weather information for any city worldwide. Built with cutting-edge web technologies, this application allows users to search for weather data by city name and displays comprehensive weather details including current conditions, temperature, humidity, wind speed, and a 6-day weather forecast. The app integrates with the RapidAPI Visual Crossing Weather API to fetch accurate, up-to-date meteorological data and uses Tailwind CSS for a beautiful, glassmorphic UI design.

**Key Features:**
- ✅ Real-time weather data for any city worldwide
- ✅ Current temperature and weather conditions display
- ✅ 6-day extended weather forecast
- ✅ Weather parameters: temperature, humidity, wind speed, heat index
- ✅ Dynamic background images based on weather conditions
- ✅ Search functionality with city lookup
- ✅ Responsive design for all devices
- ✅ Beautiful glassmorphic UI with Tailwind CSS
- ✅ Weather condition-specific icons
- ✅ Current date and time display
- ✅ Real-time weather updates
- ✅ Error handling for invalid cities

---

## 🔄 Process / Flow

**User Interaction Flow:**
1. User opens the Weather Application
2. Application loads with default city (Lucknow)
3. RapidAPI Weather API fetches current weather data
4. Weather data is processed and displayed on the UI
5. Background image updates based on weather conditions
6. User enters a city name in the search bar
7. Press Enter to trigger search
8. API fetches data for the new city
9. UI updates with new weather information
10. Background and weather icons update accordingly
11. 6-day forecast cards display next weather conditions

**Interpret Weather Icons**
1. ☀️ Sun = Clear/Sunny weather
2. ☁️ Cloud = Cloudy conditions
3. 🌧️ Raindrop = Rainy/Showers
4. ⛈️ Storm = Thunderstorm
5. ❄️ Snowflake = Snow
6. 🌫️ Fog = Foggy conditions
7. 💨 Wind = Windy conditions

---

## 🛠️ Technology Used

| Component | Technology |
|-----------|-----------|
| **Frontend Framework** | React.js with JSX |
| **Styling** | Tailwind CSS |
| **HTTP Client** | Axios |
| **Weather API** | RapidAPI - Visual Crossing Weather |
| **State Management** | React Context API & Hooks |
| **Build Tool** | Create React App (Vite alternative) |
| **Icons** | Custom SVG/PNG weather icons |
| **Real-time Updates** | useEffect for data fetching |

---

## 🎓 Skills Gained

**Frontend Development:**
- ✅ React functional components and JSX
- ✅ React Hooks (useState, useEffect, useContext)
- ✅ Component composition and reusability
- ✅ Props passing and component communication
- ✅ Conditional rendering based on data
- ✅ List rendering with `.map()`
- ✅ Event handling and form submission

**Tailwind CSS Styling:**
- ✅ Utility-first CSS approach
- ✅ Responsive design with Tailwind breakpoints
- ✅ Glassmorphic design patterns
- ✅ Flexbox and grid layouts
- ✅ Hover and focus states
- ✅ Shadow and border customization
- ✅ Color and spacing utilities

**State Management:**
- ✅ React Context API setup and usage
- ✅ Custom context providers
- ✅ Global state distribution
- ✅ useState hook for local state
- ✅ useEffect for side effects
- ✅ useContext for consuming context

**API Integration:**
- ✅ Axios HTTP client configuration
- ✅ GET requests with parameters
- ✅ API key management
- ✅ Error handling and validation
- ✅ Data transformation and parsing
- ✅ Async/await patterns
- ✅ Response data manipulation

**Functional Programming:**
- ✅ Arrow functions
- ✅ Array methods (map, filter, slice)
- ✅ Destructuring assignment
- ✅ Template literals
- ✅ Conditional logic
- ✅ Object operations

**Data & Logic Processing:**
- ✅ JSON parsing and handling
- ✅ String pattern matching for conditions
- ✅ Dynamic icon/image selection
- ✅ Date and time formatting
- ✅ Conditional background switching

---

## 📂 Project Structure

```
Weather-Application/
├── public/
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # App icon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
│
├── src/
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles (empty, using Tailwind)
│   │
│   ├── Context/
│   │   └── index.jsx           # State context and API logic
│   │
│   ├── Utils/
│   │   └── useDate.jsx         # Custom hook for date/time
│   │
│   ├── components/
│   │   ├── BackgroundLayout.jsx  # Dynamic background component
│   │   ├── WeatherCard.jsx       # Main weather display card
│   │   ├── MiniCard.jsx          # 6-day forecast card
│   │   └── index.jsx             # Component exports
│   │
│   ├── assets/
│   │   ├── icons/              # Weather condition icons
│   │   │   ├── sun.png
│   │   │   ├── cloud.png
│   │   │   ├── rain.png
│   │   │   ├── snow.png
│   │   │   ├── storm.png
│   │   │   ├── fog.png
│   │   │   └── windy.png
│   │   │
│   │   └── images/             # Background images
│   │       ├── Clear.jpg
│   │       ├── Cloudy.jpeg
│   │       ├── Rainy.jpg
│   │       ├── Snow.jpg
│   │       ├── Stormy.jpg
│   │       ├── Sunny.jpeg
│   │       └── fog.png
│   │
│   ├── App.test.js             # App component tests
│   ├── setupTests.js           # Test configuration
│   └── reportWebVitals.js      # Performance monitoring
│
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock file
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── .gitignore                  # Git ignore file
└── README.md                   # Documentation
```

---

## 📸 Demonstration

**Current Weather Display:**
![Screenshot 2023-09-09 233948](https://github.com/garvita2003/Weather-Application/assets/102051676/7dd33a3c-39f5-4f88-8bf9-b0ad2993a96f)

**Weather Forecast View:**
![Screenshot 2023-09-09 232852](https://github.com/garvita2003/Weather-Application/assets/102051676/98d403cd-7775-4563-8406-0c3857b38734)

**City Search Interface:**
![Screenshot 2023-09-09 232907](https://github.com/garvita2003/Weather-Application/assets/102051676/c87ac9f9-b209-4285-a266-6d393d35b72b)

**Rainy Weather Background:**
![Screenshot 2023-09-09 232921](https://github.com/garvita2003/Weather-Application/assets/102051676/5c4bd7d7-a2be-4302-a19f-c0e1f081dd1e)

---

## ⚙️ Setup Instructions

### Prerequisites:
- Node.js (v14 or higher) and npm installed
- RapidAPI account (free tier available)
- Visual Crossing Weather API key from RapidAPI
- Code editor (VSCode recommended)
- Git installed on your system

### Step-by-Step Installation:

**1. Clone the Repository**
```bash
git clone https://github.com/garvita2003/Weather-Application.git
cd Weather-Application
```

**2. Install Dependencies**
```bash
npm install
```

**3. Get RapidAPI Key**
- Visit [RapidAPI](https://rapidapi.com/)
- Sign up for a free account
- Search for "Visual Crossing Weather"
- Subscribe to the API (free tier available)
- Copy your API key

**4. Create Environment Variables (Optional)**
```bash
# Create .env.local file in root directory
# Add your API key (or update directly in Context/index.jsx)
REACT_APP_API_KEY=your_rapidapi_key_here
```

**5. Update API Key in Code**
```javascript
// In src/Context/index.jsx, update the headers:
headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
}
```

**6. Install Tailwind CSS (if not already configured)**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**7. Start Development Server**
```bash
npm start
```

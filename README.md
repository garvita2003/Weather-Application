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

**Data Fetching Flow:**
1. User searches for a city
2. `setPlace()` updates the search location
3. `useEffect` hook triggers `fetchWeather()`
4. Axios makes GET request to RapidAPI
5. Weather data received in JSON format
6. State variables updated with new data
7. React components re-render with updated values
8. Context API distributes data to all components

**Weather Condition Processing:**
1. API returns condition string (e.g., "Partly cloudy")
2. String checked against keywords (cloud, rain, storm, etc.)
3. Matching icon and background image selected
4. UI displays corresponding weather visual
5. Weather forecast cards populate with 6-day data

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

**Language Composition:**
- JavaScript: 85.8%
- HTML: 11.6%
- CSS: 2.6%

**Core Libraries & APIs:**
- `axios` - HTTP requests and API calls
- `react` - UI component framework
- `react-dom` - DOM rendering
- `tailwindcss` - Utility-first CSS framework
- `RapidAPI Visual Crossing` - Weather data source

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

## 🌦️ Weather Information Displayed

### Current Weather Card
- **Location**: City name and address
- **Temperature**: Current temperature in Celsius
- **Weather Condition**: Text description (e.g., "Partly Cloudy")
- **Wind Speed**: Speed in km/hr
- **Humidity**: Moisture percentage
- **Heat Index**: "Feels like" temperature
- **Date & Time**: Current date and time
- **Weather Icon**: Visual representation of conditions

### 6-Day Forecast
- **Day of Week**: Which day the forecast is for
- **Temperature**: High/Low temperature prediction
- **Weather Icon**: Condition icon for that day
- **Time**: Specific time of forecast (24-hour format)

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

**Snow Weather Display:**
![Screenshot 2023-09-09 232835](https://github.com/garvita2003/Weather-Application/assets/102051676/c2e390bb-0a18-4717-8b09-54e50b3ff6b6)

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

The application will open at `http://localhost:3000`

**8. Build for Production**
```bash
npm run build
```

---

## 🎮 How to Use

1. **Open the Application**
   - Navigate to http://localhost:3000 (or hosted URL)

2. **View Default Weather**
   - App loads with default city (Lucknow)
   - Current weather and 6-day forecast display

3. **Search for a City**
   - Click the search bar at the top
   - Type the name of the city you want
   - Press Enter key to search

4. **View Weather Details**
   - **Main Card**: Shows current temperature, conditions, humidity, wind speed
   - **Background**: Changes based on weather (sunny, rainy, cloudy, snowy, etc.)
   - **Forecast Cards**: Display next 6 days' weather

5. **Interpret Weather Icons**
   - ☀️ Sun = Clear/Sunny weather
   - ☁️ Cloud = Cloudy conditions
   - 🌧️ Raindrop = Rainy/Showers
   - ⛈️ Storm = Thunderstorm
   - ❄️ Snowflake = Snow
   - 🌫️ Fog = Foggy conditions
   - 💨 Wind = Windy conditions

6. **Check Date & Time**
   - Current date displayed on weather card
   - Real-time updates every minute
   - Time in 12-hour format with AM/PM

---

## 📊 API Integration Details

**API Endpoint**: 
```
https://visual-crossing-weather.p.rapidapi.com/forecast
```

**Request Parameters**:
- `aggregateHours`: 24 (daily forecast)
- `location`: City name (user input)
- `contentType`: json (response format)
- `unitGroup`: metric (Celsius, km/hr)
- `shortColumnNames`: 0 (descriptive column names)

**Response Data Structure**:
```javascript
{
  "locations": {
    "cityName": {
      "address": "Full address",
      "values": [
        {
          "datetime": "YYYY-MM-DD",
          "temp": 25.5,           // Temperature in Celsius
          "humidity": 65,         // Humidity percentage
          "wspd": 15,             // Wind speed in km/hr
          "heatindex": 28,        // Heat index
          "conditions": "Partly cloudy"  // Weather condition
        }
      ]
    }
  }
}
```

**Request Headers**:
```javascript
headers: {
    'X-RapidAPI-Key': 'your_api_key',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
}
```

---

## 💡 Code Highlights

### Context API Setup
```javascript
const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Lucknow');
    const [location, setLocation] = useState('');

    return (
        <StateContext.Provider value={{weather, setPlace, values, location, place}}>
            {children}
        </StateContext.Provider>
    );
};
```

### API Call with Axios
```javascript
const fetchWeather = async() => {
    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregateHours: '24',
            location: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames: 0
        },
        headers: {
            'X-RapidAPI-Key': 'YOUR_KEY',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const thisData = Object.values(response.data.locations)[0];
        setLocation(thisData.address);
        setValues(thisData.values);
        setWeather(thisData.values[0]);
    } catch (error) {
        alert('This place does not exist');
    }
};
```

### Weather Icon Selection Logic
```javascript
useEffect(() => {
    if(iconString){
        if(iconString.toLowerCase().includes('cloud')){
            setIcon(cloud);
        } else if(iconString.toLowerCase().includes('rain')){
            setIcon(rain);
        } else if(iconString.toLowerCase().includes('clear')){
            setIcon(sun);
        } else if(iconString.toLowerCase().includes('storm')){
            setIcon(storm);
        }
        // ... more conditions
    }
}, [iconString]);
```

### Custom Date Hook
```javascript
export const useDate = () => {
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    const time = today.toLocaleDateString('en', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric'
    });

    return { time };
};
```

### Search Functionality
```javascript
const submitCity = () => {
    setPlace(input);  // Update place state
    setInput('');     // Clear input field
};

// Handle Enter key press
const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        submitCity();
    }
};
```

### Dynamic Background Selection
```javascript
useEffect(() => {
    if(weather.conditions){
        let imagesString = weather.conditions;
        if(imagesString.toLowerCase().includes('clear')){
            setImage(Clear);
        } else if(imagesString.toLowerCase().includes('rain')){
            setImage(Rainy);
        }
        // ... more conditions
    }
}, [weather]);
```

---

## 🎨 UI/UX Features

**Glassmorphic Design:**
- Semi-transparent card backgrounds
- Backdrop blur effect with Tailwind
- Modern, clean aesthetic
- Premium look and feel

**Responsive Layout:**
- Mobile-first design approach
- Flexbox and grid layouts
- Adapts to all screen sizes
- Touch-friendly interface

**Visual Feedback:**
- Dynamic background changes with weather
- Icon updates based on conditions
- Smooth transitions and animations
- Real-time data updates

**User Experience:**
- Intuitive search interface
- Clear weather information hierarchy
- Easy-to-read temperature display
- Organized forecast layout

**Accessibility:**
- Semantic HTML structure
- Alt text for images
- Proper color contrast
- Keyboard navigation support

---

## 🐛 Troubleshooting

### API Key Issues
**Problem**: "Invalid API Key" error
- **Solution**: Verify API key in Context/index.jsx
- Check RapidAPI dashboard for active subscription
- Ensure key is copied completely without spaces

### City Not Found Error
**Problem**: "This place does not exist" message
- **Solution**: Try city name in different formats
- Use full city name (e.g., "New York" instead of "NY")
- Check spelling for special characters
- Some small towns may not be available

### No Data Displaying
**Problem**: Weather information not showing
- **Solution**: Check browser console for errors (F12)
- Verify internet connection
- Clear browser cache
- Restart development server with `npm start`

### Styling Issues
**Problem**: Tailwind CSS not applying
- **Solution**: Ensure tailwind.config.js includes src folder
- Rebuild CSS with `npm run build`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Performance Issues
**Problem**: App runs slowly
- **Solution**: Check API response time
- Optimize image sizes in assets folder
- Use React DevTools to check re-renders
- Consider lazy loading for images

### Background Images Not Loading
**Problem**: Background images missing
- **Solution**: Verify asset paths in BackgroundLayout.jsx
- Check if all image files exist in src/assets/images/
- Ensure file extensions are correct (jpg, jpeg, png)
- Try rebuilding the project

---

## 🚀 Performance Optimization

**Current Optimizations:**
- Context API for efficient state management
- useEffect dependencies prevent unnecessary re-renders
- Date update optimized to 1-minute intervals
- Icons loaded as static imports for caching
- Background images cached by browser

**Further Optimization Opportunities:**
- Lazy loading for images
- Code splitting with React.lazy()
- Memoization of components with React.memo()
- Service Workers for offline support
- API response caching

---

## 🔮 Future Enhancements

- ✨ Multiple location tracking and favorites
- 📍 Geolocation-based weather (GPS)
- 🌍 Different language support (i18n)
- 📱 Progressive Web App (PWA) capabilities
- 📊 Weather history and trends graph
- ⚠️ Weather alerts and notifications
- 🎨 Theme customization (dark/light mode)
- 📈 Air quality index (AQI) display
- 🌡️ Feel-like temperature accuracy
- 📸 Weather-based photo suggestions

---

## 🔗 API Resources

| Resource | Link |
|----------|------|
| RapidAPI | https://rapidapi.com/ |
| Visual Crossing Weather API | https://rapidapi.com/visual-crossing/api/visual-crossing-weather |
| Axios Documentation | https://axios-http.com/ |
| React Documentation | https://react.dev/ |
| Tailwind CSS Docs | https://tailwindcss.com/docs |

---

## 📚 Useful Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Eject configuration (not reversible)
npm run eject

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

---

## 📝 Notes

- The application uses 6-hour aggregated data (24-hour forecast)
- All temperatures are displayed in Celsius
- Wind speeds are in kilometers per hour (km/hr)
- RapidAPI free tier has rate limits (typically 100 requests/month)
- Weather data updates when city search is performed
- Background images load asynchronously

---

## 👩‍💻 Developer

Created by **Garvita Kesarwani** | [GitHub Profile](https://github.com/garvita2003)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Visual Crossing for accurate weather data
- RapidAPI for API marketplace
- React community for excellent documentation
- Tailwind CSS for utility-first styling
- Axios for HTTP client functionality

---

**Last Updated:** June 2026 | **Version:** 1.0.0

*Experience accurate, real-time weather forecasts with a modern, beautiful interface!* ☀️🌧️

import { BrowserRouter,Routes, Route } from "react-router-dom";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import LoginSignup from "./Components/WeatherApp/auth/LoginSignup";
import SignUp from "./Components/WeatherApp/auth/SignUp";
import AuthDetails from "./Components/WeatherApp/auth/AuthDetails";
import Blog from "./Components/WeatherApp/Blog/Blog";


function App() {
  
return (
  <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<LoginSignup />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/AuthDetails" element={<AuthDetails />}/>
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="/Blog" element={<Blog />}/>
        </Routes>
      </BrowserRouter>
  </div>
);
  
}
export default App;
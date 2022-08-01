
import "./App.css";

import { ImageContainer } from "./components/imageContainer";
import { Logo } from "./components/logo";

// 1.Create any state needed
// 2.Fetch data from server
// 3.Use the data to make the render dyanmic
// 4.Split into components

function App() {

  

  return (
    <div className="App">
      <Logo />

      <ImageContainer />
    </div>
  );
}

export default App;

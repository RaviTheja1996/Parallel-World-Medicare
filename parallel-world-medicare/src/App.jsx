import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <h1>Welcome to App component</h1> */}
    </main>
  );
}

export default App;

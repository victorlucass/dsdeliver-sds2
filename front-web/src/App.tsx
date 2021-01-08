import "./App.css";
import NavbarApp from "./templates/navbar/app-navbar";
import HomeApp from "./templates/home/app-home";

function App() {
  return (
    <body>
      <header>
        <NavbarApp />
      </header>

      <main>
        <HomeApp />
      </main>

      <footer></footer>
    </body>
  );
}

export default App;

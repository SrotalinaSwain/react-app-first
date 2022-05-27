import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Srota$ouls
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Steps:
         1. npm install gh-pages --save-dev

         2.Add properties to package.json file.
            "homepage": "https://SrotalinaSwain.github.io/react-app-first"

         3.Add properties to"scripts" in package.json file: 

         "predeploy": "npm run build",
         "deploy": "gh-pages -d build"

         4.Run these on command line:
          
          git init
          git remote add origin https://github.com/SrotalinaSwain/react-app-first.git
          npm run deploy

         5.For master file :

          git add .
          git commit -m "Your awesome message"
          git push origin master


          #HappyCoding
        </a>
      </header>
    </div>
  );
}

export default App;

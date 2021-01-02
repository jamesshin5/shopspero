import React, {useEffect, useState} from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import Main from './components/Main';
import './App.css';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( ()=> {
    const imgs = [
      "./images/staff/andrew-cheng-min.jpg", 
      "./images/staff/dorcascheung-min.jpg",
      "./images/staff/estheryou-min.jpg",
      "./images/staff/jamesshin-min.jpg",
      "./images/staff/jasminechen-min.jpg",
      "./images/staff/jenny-min.jpg",
      "./images/staff/justinpark-min.jpg",
      "./images/staff/matthewflores-min.jpg",
      "./images/staff/rachelsoo-min.jpg",
      "./images/staff/rebeccasoo-min.jpg",
      "./images/home-image-0.png",
      "./images/home-image-1.png",
      "./images/home-image-2.png",
      "./images/home-image-3.png",
      "./images/design-photos/abide-main-2.jpg",
      "./images/design-photos/abide-overlay.jpg",
      "./images/design-photos/abide-window.jpg",
      "./images/design-photos/bay-area-horizontal.jpg",
      "./images/design-photos/bay-area-main.jpg",
      "./images/design-photos/bear-graphic.jpg",
      "./images/design-photos/bear-right.jpg",
      "./images/design-photos/berkeley-horizontal.jpg",
      "./images/design-photos/berkeley-vertical.jpg",
      "./images/design-photos/blessed-horizontal.jpg",
      "./images/design-photos/blessed-main.jpg",
      "./images/design-photos/bottle-graphic.jpg",

      "./images/design-photos/girl-hat-back.jpg",
      "./images/design-photos/girl-hat-flyer.jpg",
      "./images/design-photos/girl-hat-top.jpg",

      "./images/design-photos/hope-longsleeve.jpg",

      "./images/design-photos/macron-hoodie-guy.jpg",
      "./images/design-photos/macron-hoodie-girl.jpg",

      "./images/design-photos/mountain-graphic.jpg",
      "./images/design-photos/mountain-mover-right.jpg",
      
      "./images/design-photos/three-stickers-drawing.jpg",
      "./images/design-photos/walk-on-water-main.jpg",
      "./images/design-photos/water-left.jpg",
  ];
    cacheImages(imgs);
  }, [])

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function(resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);

    setIsLoading(false);
  }

  return (
    <div>
      {isLoading ? 
        <div className="loading-container">
          <div className="loading">
            <PuffLoader size={50} color={"#dac4af"} />
          </div>
        </div>
      :
      <Router basename={process.env.PUBLIC_URL}>
        <Main />
      </Router>
      }
    </div>
  );
}

export default App;



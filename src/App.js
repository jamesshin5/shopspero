import '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { HashRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import './App.css'
import PuffLoader from 'react-spinners/PuffLoader'
import { ourFireStore } from './firebaseApp'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import picture1 from './images/staff/andrewcheng-min.jpg'
import picture2 from './images/staff/dorcascheung-min.jpg'
import picture3 from './images/staff/estheryou-min.jpg'
import picture4 from './images/staff/jamesshin-min.jpg'
import picture5 from './images/staff/jasminechen-min.jpg'
import picture6 from './images/staff/jenny-min.jpg'
import picture7 from './images/staff/justinpark-min.jpg'
import picture8 from './images/staff/matthewflores-min.jpg'
import picture9 from './images/staff/rachelsoo-min.jpg'
import picture10 from './images/staff/rebeccasoo-min.jpg'
import picture11 from './images/home-image-0.png'
import picture12 from './images/home-image-1.png'
import picture13 from './images/home-image-2.png'
import picture14 from './images/home-image-3.png'
import picture15 from './images/design-photos/abide-main-2.jpg'
import picture16 from './images/design-photos/abide-overlay.jpg'
import picture17 from './images/design-photos/abide-window.jpg'
import picture18 from './images/design-photos/bay-area-horizontal.jpg'
import picture19 from './images/design-photos/bay-area-main.jpg'
import picture20 from './images/design-photos/bear-graphic.jpg'
import picture21 from './images/design-photos/bear-right.jpg'
import picture22 from './images/design-photos/berkeley-horizontal.jpg'
import picture23 from './images/design-photos/berkeley-vertical.jpg'
import picture24 from './images/design-photos/blessed-horizontal.jpg'
import picture25 from './images/design-photos/blessed-main.jpg'
import picture26 from './images/design-photos/bottle-graphic.jpg'

import picture27 from './images/design-photos/girl-hat-back.jpg'
import picture28 from './images/design-photos/girl-hat-flyer.jpg'
import picture29 from './images/design-photos/girl-hat-top.jpg'

import picture30 from './images/design-photos/hope-longsleeve.jpg'

import picture31 from './images/design-photos/macron-hoodie-guy.jpg'
import picture32 from './images/design-photos/macron-hoodie-girl.jpg'

import picture33 from './images/design-photos/mountain-graphic.jpg'
import picture34 from './images/design-photos/mountain-mover-right.jpg'

import picture35 from './images/design-photos/three-stickers-drawing.jpg'
import picture36 from './images/design-photos/walk-on-water-main.jpg'
import picture37 from './images/design-photos/water-left.jpg'
import picture38 from './images/home-bgimage.png'

import picture39 from './images/ambassadors/ambassador-chaerin.jpg'
import picture40 from './images/ambassadors/ambassador-grace.jpg'
import picture41 from './images/ambassadors/ambassador-joy.jpg'
import picture42 from './images/ambassadors/ambassador-yasmin.jpg'

import picture43 from './images/about-image-1.jpg'
import picture44 from './images/design-photos/redeemed-left.jpg'
import picture45 from './images/design-photos/redeemed-right.jpg'
import picture46 from './images/about-sticker.jpg'
import picture47 from './images/design-photos/hope-iris.jpg'

import picture48 from './images/paintFooter.png'

import picture49 from './images/sliderimage1.jpg'
import picture50 from './images/sliderimage2.jpg'
import picture51 from './images/sliderimage3.jpg'
import picture52 from './images/sliderimage4.jpg'
import picture53 from './images/sliderimage5.jpg'
require('dotenv').config()

const fetchUser = async () => {
    const docRef = await getDocs(collection(ourFireStore, 'User'))
    // const docAddRef = await addDoc(collection(ourFireStore, 'User'), {
    //     first: 'Alan',
    //     middle: 'Mathison',
    //     last: 'Turing',
    //     born: 1912,
    // })
    docRef.forEach((doc) => console.log(doc.data()))
    return docRef
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // const fetchedDoc = fetchUser()
        // console.log('fetchedDoc', fetchedDoc)
    }, [])

    useEffect(() => {
        //Adding testing here

        const imgs = [
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6,
            picture7,
            picture8,
            picture9,
            picture10,

            picture11,
            picture12,
            picture13,
            picture14,
            picture15,
            picture16,
            picture17,
            picture18,
            picture19,
            picture20,

            picture21,
            picture22,
            picture23,
            picture24,
            picture25,
            picture26,
            picture27,
            picture28,
            picture29,
            picture30,

            picture31,
            picture32,
            picture33,
            picture34,
            picture35,
            picture36,
            picture37,

            picture38,

            picture39,
            picture40,
            picture41,
            picture42,
            picture43,
            picture44,
            picture45,
            picture46,
            picture47,

            picture48,
            picture49,
            picture50,
            picture51,
            picture52,
            picture53,
        ]
        //setting src property forces browser to load images
        imgs.forEach((image) => {
            new Image().src = image
        })
        if (isLoading === true) {
            setIsLoading(false)
        }
    }, [isLoading])

    return (
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading">
                        <PuffLoader size={50} color={'#dac4af'} />
                    </div>
                </div>
            ) : (
                <Router basename={process.env.PUBLIC_URL}>
                    <Main />
                </Router>
            )}
        </div>
    )
}

export default App

import React from "react";
import { NavLink } from 'react-router-dom'
import { Image, Box } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image0 from "../images/home-image-0.png"
import image1 from "../images/home-image-1.png"
import image2 from "../images/home-image-2.png"
import image3 from "../images/home-image-3.png"
import image4 from "../images/home-image-4.png"

const images = [
    image0, image1, image2, image3, image4
]


const HomePagePanel = ({ deviceType }) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };
    return (
        <Carousel
            ssr
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            centerMode
        >
            {images.slice(0, 5).map(image => {
                return (
                    <Box w="350px" >
                        <Image
                            draggable={false}
                            style={{ width: "90%", height: "100%" }}
                            src={image}
                            alt="home-images"
                            mt="10%"
                        />
                    </Box>
                );
            })}
        </Carousel>
        // <Carousel
        //     ssr
        //     deviceType={deviceType}
        //     itemClass="image-item"
        //     responsive={responsive}
        //     infinite={true}
        //     centerMode
        // >
        //     <Box w="300px" position="relative" textAlign="center">
        //         <Image
        //             style={{ width: "90%", height: "100%" }}
        //             src={image0}
        //             alt="home-images"
        //         />
        //     </Box>
        //     <Box w="300px" position="relative" textAlign="center">
        //         <Image
        //             style={{ width: "90%", height: "100%" }}
        //             src={image1}
        //             alt="home-images"
        //         />
        //     </Box>
        //     <Box w="300px" position="relative" textAlign="center">
        //         <Image
        //             style={{ width: "90%", height: "100%" }}
        //             src={image2}
        //             alt="home-images"
        //         />
        //     </Box>
        //     <Box w="300px" position="relative" textAlign="center">
        //         <Image
        //             style={{ width: "90%", height: "100%" }}
        //             src={image3}
        //             alt="home-images"
        //         />
        //     </Box>
        //     <Box w="300px" position="relative" textAlign="center">
        //         <Image
        //             style={{ width: "90%", height: "100%" }}
        //             src={image4}
        //             alt="home-images"
        //         />
        //     </Box>
        // </Carousel>
    );
}

export default HomePagePanel;

// const slideData = [
//     {
//         index: 0,
//         headline: "New Fashion Apparel",
//         button: "Shop now",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
//     },
//     {
//         index: 1,
//         headline: "In The Wilderness",
//         button: "Book travel",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
//     },
//     {
//         index: 2,
//         headline: "For Your Current Mood",
//         button: "Listen",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg"
//     },
//     {
//         index: 3,
//         headline: "Focus On The Writing",
//         button: "Get Focused",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
//     }
// ];

// // =========================
// // Slide
// // =========================

// class Slide extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.handleMouseLeave = this.handleMouseLeave.bind(this);
//         this.handleSlideClick = this.handleSlideClick.bind(this);
//         this.imageLoaded = this.imageLoaded.bind(this);
//         this.slide = React.createRef();
//     }

//     handleMouseMove(event) {
//         const el = this.slide.current;
//         const r = el.getBoundingClientRect();

//         el.style.setProperty(
//             "--x",
//             event.clientX - (r.left + Math.floor(r.width / 2))
//         );
//         el.style.setProperty(
//             "--y",
//             event.clientY - (r.top + Math.floor(r.height / 2))
//         );
//     }

//     handleMouseLeave(event) {
//         this.slide.current.style.setProperty("--x", 0);
//         this.slide.current.style.setProperty("--y", 0);
//     }

//     handleSlideClick(event) {
//         this.props.handleSlideClick(this.props.slide.index);
//     }

//     imageLoaded(event) {
//         event.target.style.opacity = 1;
//     }

//     render() {
//         const { src, button, headline, index } = this.props.slide;
//         const current = this.props.current;
//         let classNames = "slide";

//         if (current === index) classNames += " slide--current";
//         else if (current - 1 === index) classNames += " slide--previous";
//         else if (current + 1 === index) classNames += " slide--next";

//         return (
//             <li
//                 ref={this.slide}
//                 className={classNames}
//                 onClick={this.handleSlideClick}
//                 onMouseMove={this.handleMouseMove}
//                 onMouseLeave={this.handleMouseLeave}
//             >
//                 <div className="slide__image-wrapper">
//                     <img
//                         className="slide__image"
//                         alt={headline}
//                         src={src}
//                         onLoad={this.imageLoaded}
//                     />
//                 </div>

//                 <article className="slide__content">
//                     <h2 className="slide__headline">{headline}</h2>
//                     <button className="slide__action btn">{button}</button>
//                 </article>
//             </li>
//         );
//     }
// }

// // =========================
// // Slider control
// // =========================

// const SliderControl = ({ type, title, handleClick }) => {
//     return (
//         <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
//             <svg className="icon" viewBox="0 0 24 24">
//                 <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//             </svg>
//         </button>
//     );
// };

// // =========================
// // Slider
// // =========================

// export default class Slider extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { current: 0 };
//         this.handlePreviousClick = this.handlePreviousClick.bind(this);
//         this.handleNextClick = this.handleNextClick.bind(this);
//         this.handleSlideClick = this.handleSlideClick.bind(this);
//     }

//     handlePreviousClick() {
//         const previous = this.state.current - 1;

//         this.setState({
//             current: previous < 0 ? this.props.slides.length - 1 : previous
//         });
//     }

//     handleNextClick() {
//         const next = this.state.current + 1;

//         this.setState({
//             current: next === this.props.slides.length ? 0 : next
//         });
//     }

//     handleSlideClick(index) {
//         if (this.state.current !== index) {
//             this.setState({
//                 current: index
//             });
//         }
//     }

//     render() {
//         const { current, direction } = this.state;
//         const { slides, heading } = this.props;
//         const headingId = `slider-heading__${heading
//             .replace(/\s+/g, "-")
//             .toLowerCase()}`;
//         const wrapperTransform = {
//             transform: `translateX(-${current * (100 / slides.length)}%)`
//         };

//         return (
//             <div className="slider" aria-labelledby={headingId}>
//                 <ul className="slider__wrapper" style={wrapperTransform}>
//                     <h3 id={headingId} class="visuallyhidden">
//                         {heading}
//                     </h3>

//                     {slides.map((slide) => {
//                         return (
//                             <Slide
//                                 key={slide.index}
//                                 slide={slide}
//                                 current={current}
//                                 handleSlideClick={this.handleSlideClick}
//                             />
//                         );
//                     })}
//                 </ul>

//                 <div className="slider__controls">
//                     <SliderControl
//                         type="previous"
//                         title="Go to previous slide"
//                         handleClick={this.handlePreviousClick}
//                     />

//                     <SliderControl
//                         type="next"
//                         title="Go to next slide"
//                         handleClick={this.handleNextClick}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }
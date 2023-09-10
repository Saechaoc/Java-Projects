import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";
import { Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Carousel.css";

const responsive = {
  0: {
    items: 1,
  },
  720: { items: 1 },
  1024: { items: 1 },
};

const items = mainCarouselData.map((item, index) => {
  const style = { height: "100%", width: "100%" };
  return (
    <img
      className="cursor-pointer aspect-h-1 aspect-w-1 carousel-container"
      role="presentation"
      src={item.image}
      alt=""
      style={style}
    />
  );
});

const MainCarousel = () => {
  return (
    <div className="carousel-container -z-10">
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlayInterval={100}
        infinite
      />
    </div>
  );
};

export default MainCarousel;

// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button, Link } from "@mui/material";
// import { mainCarouselData } from "./MainCarouselData";

// function MainCarousel() {
//   return (
//     <Carousel>
//       {mainCarouselData.map((item, i) => (
//         <CarouselItem key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// }

// function CarouselItem(props) {
//   return (
//     <Paper>
//       <Link href={props.item.path}>
//         <img
//           src={props.item.image}
//           alt=""
//           style={{ width: "100%", height: "100%", zIndex: 1 }}
//         />
//       </Link>
//     </Paper>
//   );
// }

// export default MainCarousel;

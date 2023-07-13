import h1 from "../Assets/Images/House1.svg";
import h2 from "../Assets/Images/House.png";
import h3 from "../Assets/Images/House2.svg";


export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  export const productData = [
    {
      id: 1,
      imageurl: h1,
      name: "Atoll Park Site",
      location: "Kardesier sokak Edremit Kyrenia. Cyprus",
    },
    {
      id: 2,
      imageurl: h2,
      name: "Atoll Park Site",
      location: "Kardagar cokak Edema Kyrenia Cyprus",
    },
    {
      id: 1,
      imageurl: h3,
      name: "Atoll Park Site",
      location: "Kardagar cokak Edema Kyrenia Cyprus",
    },
  ]
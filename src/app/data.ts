export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number; width: number; height: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Burga pizza",
    desc: "This is burga pizza",
    img: "/images/bread.jpg",
    price: 20,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 2,
    title: "Hamburger pizza",
    desc: "This is hamburger pizza",
    img: "/images/hamburger.jpg",
    price: 20,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 3,
    title: "New Pizza",
    desc: "This is a new pizza",
    img: "/images/pizza_image.png",
    price: 10,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
                        
      },
    ],
  },
  {
    id: 4,
    title: "New Pizza",
    desc: "This is a new pizza",
    img: "/images/pizza4.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 5,
    title: "Greek Pizza",
    desc: "This is Greek pizza",
    img: "/images/pizza_full.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 6,
    title: "Greek Pizza",
    desc: "This is Greek pizza",
    img: "/images/pizza_full.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Burga pizza",
    desc: "This is burga pizza",
    img: "/images/bread.jpg",
    price: 20,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 2,
    title: "Burga pizza",
    desc: "This is burga pizza",
    img: "/images/bread.jpg",
    price: 20,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 3,
    title: "New Pizza",
    desc: "This is a new pizza",
    img: "/images/pizza_image.png",
    price: 10,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 4,
    title: "New Pizza",
    desc: "This is a new pizza",
    img: "/images/pizza_image.png",
    price: 10,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 5,
    title: "Greek Pizza",
    desc: "This is Greek pizza",
    img: "/images/pizza_full.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: 6,
    title: "Yummy Pizza",
    desc: "This is Yummy pizza",
    img: "/images/yummy_pizza.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
    title: "Burga pizza",
    desc: "This is burga pizza",
    img: "/images/bread.jpg",
    price: 20,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
        width: 30,
        height: 30,
      },
      {
        title: "Medium",
        additionalPrice: 4,
        width: 40,
        height: 40,
      },
      {
        title: "Large",
        additionalPrice: 6,
        width: 50,
        height: 50,
    },
  ],
  
};


type PizzaSize = {
  sizeTitle: string;
  width: number;
  height: number;
}[];

export const PizzaSizes: PizzaSize = [
  {
    sizeTitle: "Small",
    width: 30,
    height: 30,
  }
]

type Strengths = {
  id: number;
  img: string;
  name: string;
  desc: string;
}[];


export const OurStrength: Strengths = [
  {
    id: 1,
    img: "/images/all-kinds-of-foods.png",
    name: "All Kinds of Foods",
    desc: "Lorem Ipsum is simply dummy test of the printing and type setting industry."
  },
  {
    id: 2,
    img: "/images/fresh-foods.png",
    name: "All Kinds of Foods",
    desc: "Lorem Ipsum is simply dummy test of the printing and type setting industry."
  },
  {
    id: 3,
    img: "/images/best-taste.png",
    name: "All Kinds of Foods",
    desc: "Lorem Ipsum is simply dummy test of the printing and type setting industry."
  },
  {
    id: 4,
    img: "/images/on-time-delivery.png",
    name: "All Kinds of Foods",
    desc: "Lorem Ipsum is simply dummy test of the printing and type setting industry."
  }
];


type Client = {
  id: number;
  img: string;
  name: string;
  text: string;
}[];


export const Clients: Client = [
  {
    id: 1,
    img: "/images/client-1.jpg",
    name: "John Doe",
    text: "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap"
  },
  {
    id: 2,
    img: "/images/client-2.jpg",
    name: "John Doe",
    text: "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap"
  },
  {
    id: 3,
    img: "/images/client-3.jpg",
    name: "John Doe",
    text: "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap"
  },
  {
    id: 4,
    img: "/images/client-4.jpg",
    name: "John Doe",
    text: "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap"
  }
]


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
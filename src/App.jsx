import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Tatiya from "./assets/image.png";
import {useState} from "react";
import {products} from "./components/products.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiple, setMultiply] = useState(2);
  const [fruit, setFruit] = useState("");

  const articles = [
    { title: "Article 1", content: "This is the content of article 1" },
    { title: "Article 2", content: "This is the content of article 2." },
    { title: "Article 3", content: "This is the content of article 3." },
  ];

  const links = [
    { name: "Home", link: "https://www.youtube.com/" },
    { name: "About", link: "https://chatgpt.com/" },
    { name: "Contact", link: "https://sites.google.com/view/classrooms-workspace/" },
  ];

  return (
    <div>
      <Navbar links={links} />
      <h1 className="my-heading">Learning React!!</h1>

      <Content articles={articles} />

      <img src={Tatiya} alt="This is Tatiya" height={600} width={700} className="image" />

      <h1>Body Count is {count}</h1>
      <div className="centered">
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>

      <h1>Multiple is {multiple}</h1>
      <div className="centered">
        <button onClick={() => setMultiply(multiple * 2)}>Multiply</button>
      </div>

      <h1>My Fruit is {fruit}</h1>
      <div className="centered">
        <input
          type="text"
          placeholder="Enter a Fruit"
          onChange={(e) => setFruit(e.target.value)}
        />
      </div>

      <h1 className="my-heading">Our Products</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

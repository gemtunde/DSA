import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPages] = useState(1);

  useEffect(() => {
 fetchProducts();
  }, [])

  const fetchProducts = async () => {
  let {data}= await axios.get("https://dummyjson.com/products");
  console.log(data);
  setProducts(data.products);

  }

  const paginationHandler = (currentPage) => {
    if(currentPage => 1 && currentPage <= products.length / 10 && currentPage !== page){
 setPages(currentPage)}
  }
  return (
    <div className="App">
     <h2>Pagination</h2>
      {
        products.length > 0 && (
          <div className='products'>
            {
              products.slice(page * 10 - 10,page * 10).map((product, index) => <ProductCard key={index} product={product} />
              )
            }
          </div>
        )
      }
       {products.length > 0 && (
          <div className='pagination'>
            <span  
              className={page >1 ? "" : "pagination__disabled"}
             onClick={()=>paginationHandler(page - 1)} > Prev </span>
            {
             [...Array(products.length / 10)].map((_,index) =>
              <span
              className={page === index + 1 ? "pagination__current" : ""}
               onClick={()=>paginationHandler(index + 1)} 
               key={index}>{index + 1}
              </span>)
              }
            <span 
            className={page < products.length/10 ? "" : "pagination__disabled"}
              onClick={()=>paginationHandler(page + 1)} > Next </span>
          </div>
        )}
    </div>
  );
}

export default App;

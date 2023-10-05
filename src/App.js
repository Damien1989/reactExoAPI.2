import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const dbJson = "http://localhost:3000/products";
  console.log(dbJson);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("start in useEffect");
    fetch(dbJson) //GET //recupération de donnees
      .then((response) => response.json()) //traitement des donnees
      .then((data) => {
        setProducts(data);
      }) //explotation des donnees
      .catch((err) => {
        //recupération de l'erreur
        console.log(err);
      });
  }, []);

  
  const deleteProduct = async (id) => {
    console.log('delete', id)

    fetch(`http://localhost:3000/products/${id}`, {
      method:'DELETE'}
      )
      .then(re =>console.log('suppression réussie'))
      .catch(err => console.log(err))
  }
  return (
    <div className="App">

    {products.map((product) => (<ul>
          <li key={product.id}> 
            <p>
              {product.title}<br/>
              {product.brand}
              </p>
              <img src={product.thumbnail} alt="img du produit"></img>
              <button onClick={()=>{deleteProduct(product.id)}}>x</button>
            </li>           
        </ul>)
    )}

    </div>
  );
}

export default App;
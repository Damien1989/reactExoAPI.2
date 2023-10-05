import deleteProduct from "../App";

function Produits ({ produit }, { deleteProduct }) {
    return (
        <div>
        <ul>
          <li key={produit.id}> 
            <p>
              {produit.title}<br/>
              {produit.brand}
              </p>
              <img src={produit.thumbnail} alt="img du produit"></img>
              <button onClick={deleteProduct}>x</button>
            </li>           
        </ul>
      </div>
    );
} 
export default Produits;
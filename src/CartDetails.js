import { useFetchData } from "./useFetchData";

const CartDetails = () => {
  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
  } = useFetchData("https://fakestoreapi.com/carts");

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useFetchData("https://fakestoreapi.com/products");

  if (cartLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  if (cartError || productsError) {
    return <div>Error: {cartError || productsError}</div>;
  }

  if (!cartData || !productsData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Cart Details</h1>
      {cartData.map((cart) => (
        <div key={cart.id} style={{
            marginBottom: "80px",
          }}>
          <h3>Cart ID: {cart.id}</h3>
          <ul style={{ listStyleType: "none" }}>
            {cart.products.map((product) => {
              const productDetails = productsData.find(
                (p) => p.id === product.productId
              );
              return (
                productDetails && (
                  <li key={product.productId} style={{
                    marginBottom: "20px",
                  }}>
                    <div style={{ display: "flex", width: "100%",  }}>
                      <div
                        style={{
                          display: "flex",
                          width: "70%",
                          margin: "20px",
                        }}
                      >
                        <div>
                          <img
                            src={productDetails.image}
                            alt={productDetails.title}
                            style={{
                              width: "100px",
                              height: "100px",
                              margin: "20px",
                            }}
                          />
                        </div>
                        <div style={{
                              width: "80%",
                              height: "100px",
                              margin: "20px",
                            }}>
                          <h4>{productDetails.title}</h4>
                          <p>{productDetails.description}</p>
                          <p>Price: ${productDetails.price}</p>
                        </div>
                      </div>
                      <div style={{ display:'flex', justifyContent:'center', alignContent:'center', marginTop: '18px'}}>
                        <p>Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;

import ProductDetails from "./ProductDetails";
import { useFetchData } from "./useFetchData";

const CartDetails = () => {
  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
  } = useFetchData("https://fakestoreapi.com/carts");

  if (cartLoading) {
    return <div>Loading...</div>;
  }

  if (cartError) {
    return <div>Error: {cartError}</div>;
  }

  if (!cartData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Cart Details</h1>
      {cartData.map((cart) => (
        <div
          key={cart.id}
          style={{
            marginBottom: "80px",
          }}
        >
          <h3>Cart ID: {cart.id}</h3>
          <ul style={{ listStyleType: "none" }}>
            {cart.products.map((product) => {
              return (
                <li
                  key={product.productId}
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ display: "flex", width: "100%" }}>
                    {/* product Details */}
                    <ProductDetails prod_id={product.productId} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: "18px",
                      }}
                    >
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;

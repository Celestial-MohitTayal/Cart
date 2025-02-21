import { useFetchData } from "./useFetchData";

const ProductDetails = ({ prod_id }) => {
  const {
    data: productDetails,
    loading: productsLoading,
    error: productsError,
  } = useFetchData(`https://fakestoreapi.com/products/${prod_id}`);

  if (productsLoading) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>Error: {productsError}</div>;
  }

  if (!productDetails) {
    return <div>No data available</div>;
  }

  return (
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
      <div
        style={{
          width: "80%",
          height: "100px",
          margin: "20px",
        }}
      >
        <h4>{productDetails.title}</h4>
        <p>{productDetails.description}</p>
        <p>Price: ${productDetails.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

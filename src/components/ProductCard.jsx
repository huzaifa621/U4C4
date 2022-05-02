import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <h2>{item.title}</h2>
        <div>
          <img style={{ width: "250px" }} src={item.image} alt="pic" />
        </div>
        <h3 style={{ color: "gray" }}>{item.brand}</h3>
        <h4>Price: {item.price}</h4>
      </Flex>
    </>
  );
};

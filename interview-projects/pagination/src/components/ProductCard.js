

const ProductCard = ({product}) => {
  return (
    <div className="products__single">
        {product.title}
        <img src={product.images[0]} alt={product.title} />
        </div>
  )
}

export default ProductCard
const VehicleCard = ({ brand, model, price, color, category, image }) => {
  return (
    <div className="card vehicle-card">
      <div className="img-wrapper">
        <img src={image.url} alt="vehicle" />
      </div>

      <div className="info-wrapper flex-col">
        <h3>Brand: {brand}</h3>
        <p>Model: {model}</p>
        <p>Price: {price}</p>
        <p>Color: {color}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  )
}

export default VehicleCard

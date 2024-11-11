const VehicleCard = ({ brand, model, price, color, category, image }) => {
  return (
    <div className="card vehicle-card">
      <img src={image.url} alt="vehicle" />

      <div className="info-wrapper flex-col">
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>{price}</p>
        <p>{color}</p>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default VehicleCard

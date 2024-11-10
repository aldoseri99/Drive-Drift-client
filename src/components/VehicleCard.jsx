const VehicleCard = ({ onClick, brand, model, price, color, category, image }) => {
  return (
    <div onClick={onClick} className="card vehicle-card">
      <div className="img-wrapper">
        <img src={image} alt="vehicle image" />
      </div>
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

export default GameCard

const VehicleCard = ({ brand, model, price, color, category, image }) => {
  return (
    <div className="card vehicle-card">
      <div className="img-wrapper">
        <img src={image.url} alt={`${brand} ${model}`} />
      </div>
      <div className="info-wrapper flex-col">
        {brand} {model}
      </div>
    </div>
  );
};

export default VehicleCard;
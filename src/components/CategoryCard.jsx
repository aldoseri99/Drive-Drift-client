const CategoryCard = ({ name, image }) => {
  return (
    <div className="card vehicle-card">
      <div className="img-wrapper">
        <img src={image.url} alt={`${name} `} />
      </div>
      <div className="info-wrapper flex-col">
        {name}
      </div>
    </div>
  )
}

export default CategoryCard

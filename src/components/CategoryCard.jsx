const CategoryCard = ({ category }) => {
  return (
    <div className="card vehicle-card">
      <div className="img-wrapper">
        <img src={category.image.url} alt={`${category.name} `} />
      </div>
      <div className="info-wrapper flex-col">
        {category.name}
      </div>
    </div>
  )
}

export default CategoryCard

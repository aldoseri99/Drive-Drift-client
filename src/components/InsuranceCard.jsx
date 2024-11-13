const InsuranceCard = ({ price, type, terms }) => {
  return (
    <div className="card insurance-card">
      <div>Type: {type}</div>
      <div>
        Terms and Conditions: <br />
        {terms}
      </div>
      <div>Price: {price} BD</div>
    </div>
  )
}
export default InsuranceCard

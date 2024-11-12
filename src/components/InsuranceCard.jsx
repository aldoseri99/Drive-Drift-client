const InsuranceCard = ({ price,type,terms }) => {
  return (
    <div className="card insurance-card">
      <div>
        type:{type}
      </div>
      <div>
        Terms:{terms}
      </div>
      <div>
        price: {price} BD
      </div>
    </div>
  );
};
export default InsuranceCard;
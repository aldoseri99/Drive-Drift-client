import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InsuranceCard from "./InsuranceCard";
import Search from './Search'

const ViewInsurances = () => {
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    const getInsurances = async () => {
      try {
        const res = await axios.get("http://localhost:3001/insurance");
        setInsurances(res.data);
      } catch (err) {
        console.error("Error fetching insurances:", err);
      }
    };
    getInsurances();
  }, []);

  return (
    <div className="viewInsurances">
      <h2>View All Insurances</h2>
    
      <section className="container-grid">
        {insurances.map((insurance) => (
            <InsuranceCard
              type={insurance.insuranceType}
              terms={insurance.termsAndConditions}
              price={insurance.price}
            />
        ))}
      </section>
    </div>
  );
};

export default ViewInsurances;
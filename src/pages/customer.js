import CustomerGenderChart from "../components/charts/customer/CustomerGenderChart";
import CustomerRangeAge from "../components/charts/customer/CustomerRangeAge";

const PageCustomer = () => {
    return <div>
      <h1>Charts Customer Page</h1>
      <CustomerGenderChart/>
      <CustomerRangeAge/>
      </div>;
  };
  export default PageCustomer;
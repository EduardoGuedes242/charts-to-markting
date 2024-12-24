import CustomerGenderChart from "../components/charts/customer/CustomerGenderChart";
import CustomerRangeAge from "../components/charts/customer/CustomerRangeAge";
import CustomerSourceChannelDonut from "../components/charts/customer/CustomerSourceChannelDonut";

const PageCustomer = () => {
    return <div>
      <h1>Charts Customer Page</h1>
      <CustomerGenderChart/>
      <CustomerRangeAge/>
      <CustomerSourceChannelDonut/>
      </div>;
  };
  export default PageCustomer;
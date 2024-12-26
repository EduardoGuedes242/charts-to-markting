import CustomerGenderChart from "../components/charts/customer/CustomerGenderChart";
import CustomerRangeAge from "../components/charts/customer/CustomerRangeAge";
import CustomerSourceChannelDonut from "../components/charts/customer/CustomerSourceChannelDonut";
import React from "react";

const PageCustomer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Charts Customer Page</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <CustomerGenderChart />
        <CustomerRangeAge />
        <CustomerSourceChannelDonut />
      </div>
    </div>
  );
};

export default PageCustomer;

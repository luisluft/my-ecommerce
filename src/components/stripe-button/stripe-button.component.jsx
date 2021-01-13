import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I8ydvDu42mb8sIJ56c02p76KdENYGCBDea3pO80kRWuLhJkJrFyAA2lOe0EmmuHYmteNufoI4gbVHtUAZLEP1Mh00YuNgKsNa";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Luft Clothing Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;

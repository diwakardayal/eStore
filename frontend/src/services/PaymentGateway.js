import { URL } from "../endpoint.tsx";

export default async function displayRazorpay(amount) {
  const data = await fetch(`${URL}/api/razorpay`, {
    method: "POST",
  })
    .then((t) => t.json())
    .catch((e) => {
      console.log(e);
      alert(`${e} - err`);
    });

  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: amount,
    name: "eTicket formulaPub",
    description: "",
    image: `${URL}/logo.png`,
    order_id: data.id,
    handler: function (response) {
      window.location.assign("/Success");
      // alert("PAYMENT ID ::" + response.razorpay_payment_id);
      // alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "LazyIdli",
      email: "LazyIdli@gmail.com",
      contact: "7204323015",
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.open();
}

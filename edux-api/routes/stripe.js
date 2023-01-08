const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JyxfhSIbp0z6g8KKP8qCkXSvxOsCnjzYO10LPv1eBCqb98fDqaK94h8UxDW5V8g8M9Ntkcn7Fti4YtCY949XYTn001mxVocnb"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
      description: "Ecommerce Shop",
    },
    (stripeErr, stripeRes) => {
      console.log(stripeErr);
      if (stripeErr) {
        res.status(500).send(stripeErr);
      } else {
        res.status(200).send(stripeRes);
      }
    }
  );
});

module.exports = router;

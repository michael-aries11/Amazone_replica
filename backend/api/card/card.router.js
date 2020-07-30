const router = require("express").Router();
const passport = require('passport');



// const { checkToken } = require("../../auth/token_validation");
const {
  getAllCards,
  addCard,
  updateCard,
  deleteCard,
  getCardDetails
} = require("./card.controller");

let checkAuth = passport.authenticate('jwt', { session: false });
// router.get("/", checkToken, getUsers);
 router.get("/getAllCards/:id", getAllCards);
 router.get("/getCardDetails/:cardid", getCardDetails);

 router.post("/updateCard", updateCard);
 router.post("/addCard" ,addCard);
 router.post("/deleteCard",deleteCard);
 
// router.patch("/", checkToken, updateCard);
// router.delete("/", checkToken, deleteCard);

module.exports = router;
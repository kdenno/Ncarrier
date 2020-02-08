const ControlData = require("../models/controldata");
exports.getIndex = (req, res, next) => {
    const truckData = ControlData.getControlData();
    console.log(truckData);
  
   
      res.render("users/ncarrier", { pageTitle: "Ncarrier", controldata: truckData, path: "/" });
   
  };
  exports.getTerms = (req, res, next) => {
      res.render("users/terms", {pageTitle: "Terms"});

  }
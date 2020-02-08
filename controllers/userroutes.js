exports.getIndex = (req, res, next) => {
   
      res.render("users/ncarrier", { pageTitle: "Ncarrier", path: "/" });
   
  };
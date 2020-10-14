module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("blog-simple");
  });
  app.get("/africa", function (req, res) {
    res.render("africa");
  });
  app.get("/asia", function (req, res) {
    res.render("asia");
  });
  app.get("/australia", function (req, res) {
    res.render("australia");
  });
  app.get("/europe", function (req, res) {
    res.render("europe");
  });
  app.get("/northamerica", function (req, res) {
    res.render("northamerica");
  });
  app.get("/southamerica", function (req, res) {
    res.render("southamerica");
  });
  app.get("/africa", function (req, res) {
    res.render("africa");
  });
  app.get("*", function (req, res) {
    res.render("blog-simple");
  });
};

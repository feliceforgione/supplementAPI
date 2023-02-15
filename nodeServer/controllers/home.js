module.exports = {
  getIndex: (req, res) => {
    if (req.session.viewCount == null) {
      req.session.viewCount = 0;
    } else {
      req.session.viewCount++;
    }
    //res.send("hello" + req.session.viewCount);
    res.render("index.ejs", { pageViews: req.session.viewCount });
  },
};

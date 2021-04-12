module.exports = (req, res) => {
  const name = req.query || "no name";

  res.status(200).send(`Hello, ${name}`);
};

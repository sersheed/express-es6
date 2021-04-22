const getInternal = (req, res, next) => {
  console.log("EHERE");
  res.send("Hit index router");
};

export default { getInternal };

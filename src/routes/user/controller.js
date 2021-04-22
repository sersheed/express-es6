const getUser = (req, res, next) => {
  res.send("This is the user GET route");
};

const editUser = (req, res, next) => {
  res.send("EDIT route");
};

export default { getUser, editUser };

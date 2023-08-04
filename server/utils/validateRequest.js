export const validateRequestBody = (req, res, next) => {
  if (!req.body.type) {
    console.log("Error: missing type data in the body");
    res.status(400).send({
      message: "missing type data",
    });
  }

  if (!req.body.weight) {
    console.log("Error: missing weight data in the body");
    res.status(400).send({
      message: "missing weight data",
    });
  }

  if (!req.body.port) {
    console.log("Error: missing port data in the body");
    res.status(400).send({
      message: "missing port data",
    });
  }

  next();
};

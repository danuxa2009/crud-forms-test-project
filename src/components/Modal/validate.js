const validate = ({ name }) => {
  const errors = {};
  if (!name) {
    errors.name = "Required";
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less";
  } else if (name.trim() === "") {
    errors.name = "That's an error";
  }
  return errors;
};

export default validate;

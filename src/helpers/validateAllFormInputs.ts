import validateFormInput from "./validateFormInput";

const validateAllFormInputs = (fields: {
  [key: string]: string | number | null | undefined;
}): [{ [key: string]: string | undefined }, boolean] => {
  let isOk = true;
  const errors: { [key: string]: string | undefined } = {};
  Object.keys(fields).forEach(
    (key) => {
      const validateValue = validateFormInput(key, fields[key]);
      errors[key] = validateValue;
      if (isOk && validateValue) isOk = false;
    },
    [{}]
  );
  return [errors, isOk];
};
export default validateAllFormInputs;

const validateFormInput = (
  field: string,
  value: string | number | null | undefined
): string | undefined => {
  switch (field) {
    case "name":
      const val = value?.toString();
      if (!val || val?.length === 0) return "Shouldn't be empty";
      return;
    case "amount":
      if (value && +value === 0) return "Shouldn't be 0";
      if (!value) return "Shouldn't be empty";
      return;
    default:
      return;
  }
};
export default validateFormInput;

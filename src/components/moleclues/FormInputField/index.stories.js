import FormInputField from ".";

export default {
  title: "Moleclues/FormField",
  component: FormInputField,
};

export const DefaultField = (args) => <FormInputField {...args} />;
DefaultField.args = {
  label: "Book Name",
};

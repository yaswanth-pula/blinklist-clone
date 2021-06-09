import FormInputField from ".";

export default {
  title: "Moleclues/FormInputField",
  component: FormInputField,
};

const Template = (args) => <FormInputField {...args} />;

export const NormalField = Template.bind({});
NormalField.args = {
  label: "Book Name",
};

export const FieldWithError = Template.bind({});
FieldWithError.args = {
  label: "Book Name",
  isError: true,
  errorText: "cannot be empty",
};

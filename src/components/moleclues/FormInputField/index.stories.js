import FormInputField from ".";

export default {
  title: "Moleclues/FormInputField",
  component: FormInputField,
};

const Template = (args) => <FormInputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Field Label",
  isError: false,
  errorText: "cannot be empty",
};

import SelectField from "./";

export default {
  title: "Atoms/SelectField",
  component: SelectField,
};

const Template = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
};

export const WithError = Template.bind({});
WithError.args = {
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
  isError: true,
  errorText: "cannot be empty",
};

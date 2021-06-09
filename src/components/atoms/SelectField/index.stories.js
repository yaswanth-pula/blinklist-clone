import SelectField from "./";

export default {
  title: "Atoms/SelectField",
  component: SelectField,
};

const Template = (args) => <SelectField {...args} />;
const mockChangeHandler = () => {};

export const Default = Template.bind({});
Default.args = {
  changeHandler: mockChangeHandler,
  value: "",
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
};

export const WithError = Template.bind({});
WithError.args = {
  changeHandler: mockChangeHandler,
  value: "",
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
  isError: true,
  errorText: "cannot be empty",
};

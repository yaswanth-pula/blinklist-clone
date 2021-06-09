import InputField from "./";

export default {
  title: "Atoms/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const TextInputField = Template.bind({});
TextInputField.args = {
  type: "text",
  value: "",
};

export const NumberInputField = Template.bind({});
NumberInputField.args = {
  type: "number",
  value: "",
};

import InputField from "./";

export default {
  title: "Atoms/InputField",
  component: InputField,
};

export const Default = (args) => <InputField {...args} />;

Default.args = {
  type: "text",
  value: "",
  changeHandler: null,
};

export const Number = (args) => <InputField {...args} />;

import SelectField from "./";

export default {
  title: "Atoms/SelectField",
  component: SelectField,
};

export const Default = (args) => <SelectField {...args} />;

Default.args = {
  value: "",
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
};

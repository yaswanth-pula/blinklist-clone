import SelectField from "./";

export default {
  title: "Atoms/SelectField",
  component: SelectField,
  parameters: {
    controls: {
      include: ["options", "isError", "errorText", "changeHandler"],
    },
  },
  argTypes: {
    changeHandler: { table: { disable: true }, action: "changed" },
    isError: { control: "boolean" },
    errorText: { control: "text" },
  },
};

const Template = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Science", "History", "Econmics", "Health & Nutrition"],
  errorText: "cannot be empty",
};

import InputField from "./";

export default {
  title: "Atoms/InputField",
  component: InputField,
  parameters: {
    controls: {
      include: ["type", "placeholder", "changeHandler", "maxLength"],
    },
  },
  argTypes: {
    changeHandler: { table: { disable: true }, action: "changed" },
    type: { control: "select" },
    maxLength: { control: "number" },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter your input",
  maxLength: 10,
};

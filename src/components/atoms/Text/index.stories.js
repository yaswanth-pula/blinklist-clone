import Text from "./";

export default {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    controls: { exclude: ["customClass"] },
  },
  argTypes: {
    variant: {
      options: [
        "textHeader",
        "textCardTitle",
        "textCardAuthor",
        "textCardStat",
        "textInputLabel",
        "textInputError",
        "textFormHeader",
      ],
      control: "select",
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Text Content",
  variant: "textHeader",
};

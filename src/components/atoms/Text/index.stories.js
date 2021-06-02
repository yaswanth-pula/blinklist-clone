import Text from "./";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Header = Template.bind({});
Header.args = {
  content: "My Library",
  variant: "text_header",
};

export const CardTitle = Template.bind({});
CardTitle.args = {
  content: "Beyond Entrepreneurship 2.0",
  variant: "text_card_title",
};

export const CardAuthor = Template.bind({});
CardAuthor.args = {
  content: "Erica keswin",
  variant: "text_card_author",
};

export const CardStatText = Template.bind({});
CardStatText.args = {
  content: "13 minute read",
  variant: "text_card_stat",
};

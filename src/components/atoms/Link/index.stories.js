import Link from ".";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

export default {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    controls: {
      include: ["text", "variant", "clickHandler", "endIcon"],
    },
  },
  argTypes: {
    clickHandler: { table: { disable: true }, action: "clicked" },
    variant: {
      options: ["navLink", "exploreCardButton", "libraryCardButton"],
      control: "select",
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "My Library",
  variant: "navLink",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Explore",
  variant: "navLink",
  endIcon: <KeyboardArrowDownRoundedIcon />,
};

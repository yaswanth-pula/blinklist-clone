import Link from ".";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "My Library",
  href: "#",
  variant: "navLink",
};
Primary.storyname = "Simple Link";

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Explore",
  href: "#",
  variant: "navLink",
  endIcon: <KeyboardArrowDownRoundedIcon />,
};

export const AsButton = Template.bind({});
const buttonHandler = () => {
  console.log("Account Button Clicked");
};
AsButton.args = {
  text: "+ Add to Library",
  clickHandler: buttonHandler,
  variant: "cardButton",
};

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
};
Primary.storyname = "Simple Link";

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Explore",
  href: "#",
  endIcon: <KeyboardArrowDownRoundedIcon />,
};

export const AsButtonClick = Template.bind({});
const buttonHandler = () => {
  console.log("Account Button Clicked");
};
AsButtonClick.args = {
  text: "Account",
  clickHandler: buttonHandler,
};

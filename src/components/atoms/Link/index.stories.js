import Link from ".";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "My Library",
  href: "#",
  variant: "navLink",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Explore",
  href: "#",
  variant: "navLink",
  endIcon: <KeyboardArrowDownRoundedIcon />,
};

export const ExploreCardButton = Template.bind({});
const buttonHandler = () => {
  console.log("Account Button Clicked");
};
ExploreCardButton.args = {
  text: "+ Add to Library",
  clickHandler: buttonHandler,
  variant: "exploreCardButton",
};

export const LibraryCardButton = Template.bind({});
LibraryCardButton.args = {
  text: "Mark As Done",
  clickHandler: buttonHandler,
  variant: "libraryCardButton",
};

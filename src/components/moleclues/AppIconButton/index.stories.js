import AppIconButton from "./";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";

export default {
  title: "Moleclues/AppIconButton",
  component: AppIconButton,
};

const Template = (args) => <AppIconButton {...args} />;

export const CloseIconButton = Template.bind({});

CloseIconButton.args = {
  children: <CloseIcon />,
};

export const HamburgerIconButton = Template.bind({});
HamburgerIconButton.args = {
  children: <MoreHorizIcon />,
};

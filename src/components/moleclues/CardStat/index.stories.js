import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CardStat from "./";

export default {
  title: "Moleclues/CardStat",
  component: CardStat,
};

const Template = (args) => <CardStat {...args} />;

export const BookReadTime = Template.bind({});
BookReadTime.args = {
  textContent: "15 Minutes Read",
  icon: <AccessTimeIcon />,
};

export const BookReaderCount = Template.bind({});
BookReaderCount.args = {
  textContent: "2.3k reads",
  icon: <PersonOutlineIcon />,
};

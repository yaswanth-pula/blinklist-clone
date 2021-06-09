import AccessTimeIcon from "@material-ui/icons/AccessTime";
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

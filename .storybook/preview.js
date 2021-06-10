const decoratorStyle = {
  padding: "3em",
  fontFamily: `"CeraPRO-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif`,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

export const decorators = [
  (Story) => (
    <div style={decoratorStyle}>
      <Story />
    </div>
  ),
];

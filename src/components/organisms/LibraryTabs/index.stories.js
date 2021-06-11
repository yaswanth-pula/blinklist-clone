import LibraryTabs from "./";

export default {
  title: "Organisms/LibraryTabs",
  component: LibraryTabs,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  argTypes: {
    informParent: {
      action: "changed",
    },
  },
};

export const Default = (args) => <LibraryTabs {...args} />;

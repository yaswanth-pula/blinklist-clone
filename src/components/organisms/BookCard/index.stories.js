import BookCard from "./";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const LibraryBookCard = Template.bind({});

LibraryBookCard.args = {
  bookInfo: {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  },
};

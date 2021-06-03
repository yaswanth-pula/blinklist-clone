import BookCard from "./";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const DefaultBookCard = Template.bind({});

DefaultBookCard.args = {
  bookInfo: {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  },
};

export const LibraryReadingBookCard = Template.bind({});

LibraryReadingBookCard.args = {
  bookInfo: {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    status: "reading",
  },
  variant: "library",
};

export const LibraryFinishedBookCard = Template.bind({});

LibraryFinishedBookCard.args = {
  bookInfo: {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    status: "finished",
  },
  variant: "library",
};

export const ExploreBookCard = Template.bind({});

ExploreBookCard.args = {
  bookInfo: {
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "15",
    readersCount: "2.1k",
    url:
      "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    status: "finished",
  },
  variant: "explore",
};

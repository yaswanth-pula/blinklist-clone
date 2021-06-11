import React from "react";
import BookCard from "./";
import {
  BOOK_STATUS_FINISHED,
  BOOK_STATUS_FRESH,
  BOOK_STATUS_READING,
} from "../../../utils/config";
import { Default } from "../../moleclues/FormInputField/index.stories";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
  argTypes: {
    parentUpdate: {
      action: "clicked",
      table: { disable: true },
    },
  },
};

const Template = (args) => <BookCard {...args} />;
const sampleBookInfo = {
  title: "Lives of the Stoics",
  author: "Ryan Holiday, Stephen Hansel",
  readTime: "15",
  readersCount: "2.1k",
  url:
    "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
};

export const DefaultBookCard = Template.bind({});
DefaultBookCard.argTypes = {
  variant: {
    control: { table: { disable: true } },
  },
};
DefaultBookCard.args = {
  bookInfo: sampleBookInfo,
};

export const LibraryReadingBookCard = Template.bind({});

LibraryReadingBookCard.args = {
  bookInfo: { ...sampleBookInfo, status: BOOK_STATUS_READING },
  variant: "library",
};

export const LibraryFinishedBookCard = Template.bind({});

LibraryFinishedBookCard.args = {
  bookInfo: { ...sampleBookInfo, status: BOOK_STATUS_FINISHED },
  variant: "library",
};

export const ExploreBookCard = Template.bind({});

ExploreBookCard.args = {
  bookInfo: { ...sampleBookInfo, status: BOOK_STATUS_FRESH },
  variant: "explore",
};

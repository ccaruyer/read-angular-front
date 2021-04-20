import { Book } from "./book";

export interface BookFormData {
    toUpdate: boolean;
    book: Book;
}
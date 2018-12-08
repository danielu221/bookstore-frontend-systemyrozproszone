import {Book} from './book';
export class HistoryItemDetail {
    id: number;
    orderId: number;
    bookId: string;
    units: number;
    totalPrice: number;
    book: Book;
}
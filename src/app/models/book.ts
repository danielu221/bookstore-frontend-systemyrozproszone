export class Book {
  isbn: string;
  title: string;
  author: string;
  dateOfRelease: number;
  numberOfCopies: number;
  availableCopies: number;
  isReserved?: boolean;
  reservationId?: number;
}

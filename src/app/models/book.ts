export class Book {
  id: string;
  title: string;
  author: string;
  dateOfRelease: number;
  availableCopies: number;
  unitPrice: number;
  isbn?: string;
  isReserved?: boolean;
  reservationId?: number;
}

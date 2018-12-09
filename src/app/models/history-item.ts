import {HistoryItemDetail} from './history-item-detail';

export class HistoryItem {
    id: number;
    userId: number;
    orderDate: string;
    totalPrice: number;
    status:string;
    orderDetails: HistoryItemDetail[];
}
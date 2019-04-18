import { Moment } from "moment";

export interface IFeed {
    FeedUrl: string;
    FeedTitle: string;
    FeedLastRead: Moment
}
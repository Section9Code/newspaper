import { IFeed } from "../models/feed";

import lowdb = require('lowdb');
import adapter = require('lowdb/adapters/FileSync');

export abstract class DBOperations<t> {
    protected collection: string | undefined;

    // Setup the connection to the database
    private adapter = new adapter('feeds.db.json');
    private db = lowdb(this.adapter);

    constructor() {
        this.db.defaults({ feeds: [] }).write();
    }

    public add(item: t) {
        this.db.get('feeds')
            .push(item)
            .write();
    }

}

export class FeedOperations extends DBOperations<IFeed> {
    constructor() {
        super();
        this.collection = 'feeds';
    }
}
import PouchDB from 'pouchdb';

const db = new PouchDB('bills')

export default class Bill {

    all() {
        return db.allDocs({ include_docs: true });
    }

    create(obj) {
        return db.put({
            _id: new Date().toISOString(),
            value: 25.00,
            ...obj
        });
    }

}
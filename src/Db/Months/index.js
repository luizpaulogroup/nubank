import PouchDB from 'pouchdb';

const db = new PouchDB('months')

export default class Month {

    all() {
        return db.allDocs({ descending: false, include_docs: true });
    }

    generate() {

        const months = [
            { id: 1, name: "Janeiro", prefix: "JAN" },
            { id: 2, name: "Fevereiro", prefix: "FEV" },
            { id: 3, name: "Março", prefix: "MAR" },
            { id: 4, name: "Abril", prefix: "ABR" },
            { id: 5, name: "Maio", prefix: "MAI" },
            { id: 6, name: "Junho", prefix: "JUN" },
            { id: 7, name: "Julho", prefix: "JUL" },
            { id: 8, name: "Agosto", prefix: "AGO" },
            { id: 9, name: "Setembro", prefix: "SET" },
            { id: 10, name: "Outubro", prefix: "OUT" },
            { id: 11, name: "Novembro", prefix: "NOV" },
            { id: 12, name: "Dezembro", prefix: "DEZ" },
        ]

        months.map(month => {
            setTimeout(async () => {
                month._id = new Date().toISOString();
                await db.put(month)
            }, 2000)
        })

    }

    destroy() {
        return db.destroy();
    }

}
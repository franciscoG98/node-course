const db = {
    'user': [
        { id: '1', name: 'carlos' },
        { id: '2', name: 'Juan' },
    ]
};

async function list (table) {
    return db[table]
}

async function get(table, id) {
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert (table, data) {
    if(!db[table]) {
        db[table] = [];
    }
    
    db[collection].push(data)
}

async function remove (table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
}

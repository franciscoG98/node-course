const store = require('../../../store/dummy');

const TABLA = 'user';

function lista () {
    return store.list(TABLA)
}

module.exports = {
    lista,
}

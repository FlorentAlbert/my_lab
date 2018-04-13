function notFound(req, res) {
    res.status(404).render('errors/error', {
        message: 'No such page',
        status: 404,
        stack: ''
    });
}

module.exports = notFound;
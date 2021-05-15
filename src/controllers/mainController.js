let games = require('../database/data');

let mainController = {
    games,

    renderHome: (req, res) => {
        let title = 'Game Central';
        res.render('index',{'title':title,'games':games});
    },
};

module.exports = mainController;
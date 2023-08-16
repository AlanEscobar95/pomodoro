const breaksCtrl = {};

breaksCtrl.renderBreak = (req, res) => {
    res.render('breaks/break');
};

breaksCtrl.renderShortBreak = (req, res) => {
    res.render('breaks/short-break');
};

breaksCtrl.renderLongBreak = (req, res) => {
    res.render('breaks/long-break');
};

module.exports = breaksCtrl;
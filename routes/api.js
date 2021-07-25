'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => { 
      const {text, locale} = req.body;
      let keys = Object.keys(req.body);
      
      if(text === '') return res.json({ error: 'No text to translate' });
      if(keys.length < 2) return res.json({ error: 'Required field(s) missing' });
      if(locale != 'american-to-british' && locale != 'british-to-american') return res.json({ error: 'Invalid value for locale field' });
      
      let x = translator.validate(req.body);
      
      res.json(x);
    });
};
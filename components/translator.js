const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

//format the data for ease of use
let data = {
  ...americanOnly,
  ...americanToBritishSpelling
}

class Translator {

  americanToBritish(str){
    const text = str; 
     
    //translate words
    for(let key in data){ 
      let regex = new RegExp(`\\b${key}\\b`, 'gi');
      str = str.replace(regex,`<span class="highlight">${data[key]}</span>`);
    } 
    //translate time
    let timeReg = /(0?[1-9]|1[0-2]).([0-5][0-9])/;
    if(str.match(timeReg)){
      let time = str.match(timeReg)[0].replace(':', '.');
      str = str.replace(timeReg, `<span class="highlight">${time}</span>`)
    }
 
    //translate titles separately using a loop in order to preserve case
    str = str.split(' ');
    for(let key in americanToBritishTitles){
      for(let i = 0; i < str.length; i++){
        //if(key.match(str[i].toLowerCase())) 
        if(str[i].toLowerCase().match(key))
        str[i] = `<span class="highlight">${str[i].replace('.', '')}</span>`;
      }
    }

    let response = {
      text,
      translation: text == str.join(' ').replace( /(<([^>]+)>)/ig, '') 
      ? 
      'Everything looks good to me!':
      str.join(' ')
    }

    return response;
  }

  britishToAmerican(str){
    const text = str; 
    
    //translate words; iterate through 2 databases for most words because to british english can be either key or its value
    for(let key in americanToBritishSpelling){ 
      let regex = new RegExp(`\\b${americanToBritishSpelling[key]}\\b`, 'gi');
      str = str.replace(regex,`<span class="highlight">${key}</span>`); 
    } 
    for(let key in britishOnly){
      let regex = new RegExp(`\\b${key}\\b`, 'gi');
      str = str.replace(regex,`<span class="highlight">${britishOnly[key]}</span>`);
    }
    //translate time
    let timeReg = /(0?[1-9]|1[0-2]).([0-5][0-9])/;
    if(str.match(timeReg)){
      let time = str.match(timeReg)[0].replace('.', ':');
      str = str.replace(timeReg, `<span class="highlight">${time}</span>`)
    }
    
    //translate titles 
    str = str.split(' ');
    for(let key in americanToBritishTitles){
      for(let i = 0; i < str.length; i++){
        if(americanToBritishTitles[key]===str[i].toLowerCase()) 
        str[i] = `<span class="highlight">${str[i]+'.'}</span>`;
      }
    }
    
    let response = {
      text,
      translation: text == str.join(' ').replace( /(<([^>]+)>)/ig, '') ? 
      'Everything looks good to me!':
      str.join(' ')
    }
    
    return response;
  }

  validate(data){
    const text = data.text;
    const locale = data.locale;
    
    return locale === 'american-to-british' ? 
    this.americanToBritish(text) :
    this.britishToAmerican(text)
  }
}

module.exports = Translator;
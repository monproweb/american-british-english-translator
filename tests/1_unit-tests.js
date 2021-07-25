const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translate = new Translator()

suite('Unit Tests', () => {
  test('Translate "Mangoes are my favorite fruit." to British English', () => {
    let str = "Mangoes are my favorite fruit.";
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Mangoes are my favourite fruit.');
  });

  test('Translate "I ate yogurt for breakfast." to British English', () => {
    let str = 'I ate yogurt for breakfast.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'I ate yoghurt for breakfast.');
  });

  test("Translate We had a party at my friend's condo. to British English", () => {
    let str = "We had a party at my friend's condo.";
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), "We had a party at my friend's flat.");
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
    let str = 'Can you toss this in the trashcan for me?';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Can you toss this in the bin for me?');
  });

  test('Translate "The parking lot was full." to British English', () => {
    let str = 'The parking lot was full.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'The car park was full.');
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
    let str = 'Like a high tech Rube Goldberg machine.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Like a high tech Heath Robinson device.');
  });

  test('Translate "To play hooky means to skip class or work." to British English', () => {
    let str = 'To play hooky means to skip class or work.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'To bunk off means to skip class or work.');
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
    let str = 'No Mr. Bond, I expect you to die.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'No Mr Bond, I expect you to die.');
  });

  test('Translate "Dr. Grosh will see you now." to British English', () => {
    let str = 'Dr. Grosh will see you now.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Dr Grosh will see you now.');
  });

  test('Translate "Lunch is at 12:15 today." to British English', () => {
    let str = 'Lunch is at 12:15 today.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Lunch is at 12.15 today.');
  });

  test('Translate "We watched the footie match for a while." to American English', () => {
    let str = 'We watched the footie match for a while.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'We watched the soccer match for a while.');
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
    let str = 'Paracetamol takes up to an hour to work.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Tylenol takes up to an hour to work.');
  });

  test('Translate "First, caramelise the onions." to American English', () => {
    let str = 'First, caramelise the onions.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'First, caramelize the onions.');
  });

  test('Translate "I spent the bank holiday at the funfair." to American English', () => {
    let str = 'I spent the bank holiday at the funfair.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'I spent the public holiday at the carnival.');
  });

  test('Translate "I had a bicky then went to the chippy." to American English', () => {
    let str = 'I had a bicky then went to the chippy.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'I had a cookie then went to the fish-and-fish-and-chip shop.');
  });

  test(`Translate 'I've just got bits and bobs in my bum bag.' to American English`, () => {
    let str = `I've just got bits and bobs in my bum bag.`;
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), `I've just got odds and ends in my fanny pack.`);
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
    let str = 'The car boot sale at Boxted Airfield was called off.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'The swap meet at Boxted Airfield was called off.');
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', () => {
    let str = 'Have you met Mrs Kalyani?';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Have you met Mrs. Kalyani?');
  });

  test(`Translate 'Prof Joyner of King's College, London.' to American English`, () => {
    let str = `Prof Joyner of King's College, London.`;
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), `Prof. Joyner of King's College, London.`);
  });

  test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
    let str = 'Tea time is usually around 4 or 4.30.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation.replace( /(<([^>]+)>)/ig, ''), 'Tea time is usually around 4 or 4:30.');
  });

  test('Highlight translation in "Mangoes are my favorite fruit."', () => {
    let str = 'Mangoes are my favorite fruit.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('Highlight translation in "I ate yogurt for breakfast."', () => {
    let str = 'I ate yogurt for breakfast.';
    const test = translate.americanToBritish(str);
    assert.equal(test.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test('Highlight translation in "We watched the footie match for a while."', () => {
    let str = 'We watched the footie match for a while.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
    let str = 'Paracetamol takes up to an hour to work.';
    const test = translate.britishToAmerican(str);
    assert.equal(test.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
  });
});
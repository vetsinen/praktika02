const getWordsFromSentence = require('./palabras');

test.skip ('dumb test', function () {
    expect(getWordsFromSentence('мама мыла раму')).
        toStrictEqual(['мама','мыла','раму'])
})

test.skip ('test2', function () {
    expect(getWordsFromSentence('мама,мыла,раму')).
    toStrictEqual(['мама','мыла','раму'])
})
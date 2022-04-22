//Mixed Message Generator

// creating object to store messages

const randomNum = (num) => {
    return Math.floor(Math.random() * num)
};

const mixedMessages = {
        _start: ['Do not forget: ', 'Remember: ', 'Some insparation: '],
        _quote: ['Change the world by being yourself.', 'Every moment is a fresh beginning.', 'Die with memories, not dreams.', 'Aspire to inspire before we expire.', 'What we think, we become.', 
        'If you tell the truth you do not have to remember anything.', 'Simplicity is the ultimate sophistication.', 'Everything you can imagine is real.', 'Whatever you do, do it well.', 
        'Tough times never last but tough people do.'],
        _end: ['Today is a good day!', 'Tomorrow will be better!', 'Yesterday is gone!', 'Live today!', 'Embrace this day!']
};


        let result = [];
        for( let prop in mixedMessages) {
            let index = randomNum(mixedMessages[prop].length);

            switch(prop){
                case '_start':
                    result.push(mixedMessages[prop][index]);
                    break
                case '_quote':
                    result.push(mixedMessages[prop][index]);
                    break
                case '_end':
                    result.push((mixedMessages[prop][index]))
                    break
                default:
                    result.push('oops, something went wrong') 
            }
        };


        /*let start = mixedMessages._start[randomNum(mixedMessages._start.length)]
        let quote = mixedMessages._quote[randomNum(mixedMessages._quote.length)]
        let end = mixedMessages._end[randomNum(mixedMessages._end.length)]
        console.log(`${start} ${quote} ${end}`);*/
        const generator = (insp) => {
            const sent = insp.join('')
            console.log(sent);
};

generator(result);

// random sentence selector

const sentence = {
    wordOne: ['I ', 'Love ', 'You'],
    wordTwo: ['Love ', 'is ', 'Hate '],
    wordThree: ['Me', 'all around', 'You']
};

let final = [];
for(let word in sentence) {
        let index = randomNum(sentence[word].length);

        switch(word) {
                case 'wordOne':
                  final.push(sentence[word][index]);
                  break
                case 'wordTwo':
                  final.push(sentence[word][index]);
                  break
                case 'wordThree':
                  final.push(sentence[word][index]);
                  break
                default:
                  final.push('That is not right');
        }
};

generator(final);

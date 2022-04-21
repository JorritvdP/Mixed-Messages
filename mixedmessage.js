//Mixed Message Generator

// creating object to store messages

/*const start = ['Do not forget: ', 'Remember: ', 'Some insparation: '];
const quote = ['Change the world by being yourself.', 'Every moment is a fresh beginning.', 'Die with memories, not dreams.', 'Aspire to inspire before we expire.', 'What we think, we become.', 
                'If you tell the truth you do not have to remember anything.', 'Simplicity is the ultimate sophistication.', 'Everything you can imagine is real.', 'Whatever you do, do it well.', 
                'Tough times never last but tough people do.'];
const end = ['Today is a good day!', 'Tomorrow will be better!', 'Yesterday is gone!', 'Live today!', 'Embrace this day!'];*/


let mixedMessages = {
        _start: ['Do not forget: ', 'Remember: ', 'Some insparation: '],
        _quote: ['Change the world by being yourself.', 'Every moment is a fresh beginning.', 'Die with memories, not dreams.', 'Aspire to inspire before we expire.', 'What we think, we become.', 
        'If you tell the truth you do not have to remember anything.', 'Simplicity is the ultimate sophistication.', 'Everything you can imagine is real.', 'Whatever you do, do it well.', 
        'Tough times never last but tough people do.'],
        _end: ['Today is a good day!', 'Tomorrow will be better!', 'Yesterday is gone!', 'Live today!', 'Embrace this day!']
};


const i = Math.floor(Math.random() * 3);
const j = Math.floor(Math.random() * 10);
const k = Math.floor(Math.random() * 5);

const generator = () => {
        let start = mixedMessages._start[i]
        let quote = mixedMessages._quote[j]
        let end = mixedMessages._end[k]
        console.log(`${start} ${quote} ${end}`);
};

generator()

// random sentence selector

const sentence = {
    wordOne: ['I', 'Love', 'You'],
    wordTwo: ['Love', 'is', 'Hate'],
    wordThree: ['Me', 'all around', 'You']
};

const test = () => {
    let result = [];
    let count = 0;
    let j= Math.floor(Math.random()*3);
    
}

//Mixed Message Generator

// creating object to store messages

const start = ['Do not forget: ', 'Remember: ', 'Some insparation: ', ];
const quote = ['Change the world by being yourself.', 'Every moment is a fresh beginning.', 'Die with memories, not dreams.', 'Aspire to inspire before we expire.', 'What we think, we become.', 
                'If you tell the truth you do not have to remember anything.', 'Simplicity is the ultimate sophistication.', 'Everything you can imagine is real.', 'Whatever you do, do it well.', 
                'Tough times never last but tough people do.'];
const end = ['Today is a good day!', 'Tomorrow will be better!', 'Yesterday is gone!', 'Live today!', 'Embrace this day!'];


const mixedMessagesFactory = (start, quote, end) => {
    return {
        start: start,
        quote: quote,
        end: end,
    }
};


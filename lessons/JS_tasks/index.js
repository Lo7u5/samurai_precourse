let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 1,
    balance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    transaction: [{
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 27)
    },
    {
        title: 'Withdrawal Initiated',
        amount: -2490,
        date: new Date(2022, 3, 25)
    },
    {
        title: 'Order Revenue',
        amount: 126,
        date: new Date(2022, 2, 1)
    },
    {
        title: 'Amazon, Order #3213',
        amount: -290,
        date: new Date(2022, 2, 1)
    },
    {
        title: 'Order Revenue',
        amount: 126,
        date: new Date(2022, 2, 1)
    },
    {
        title: 'Order Revenue',
        amount: 126,
        date: new Date(2022, 2, 1)
    }
    ]
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 2,
    balance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    transaction: [{
        title: 'Withdrawal Initiated',
        amount: -2490,
        date: new Date(2022, 3, 28)
    },
    {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 27)
    },
    {
        title: 'AppStore, Order #3213',
        amount: -290,
        date: new Date(2022, 3, 27)
    },
    {
        title: 'Order Revenue',
        amount: 132,
        date: new Date(2022, 3, 1)
    },
    {
        title: 'Order Revenue',
        amount: 1126,
        date: new Date(2022, 3, 1)
    }
    ]
};

let card3 = {
    type: 'Debit',
    networkType: 'mastercard',
    currencyType: 3,
    balance: 3263.65,
    number: 5543259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    transaction: [{
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 27)
    },
    {
        title: 'Withdrawal Initiated',
        amount: -2490,
        date: new Date(2022, 3, 25)
    },
    {
        title: 'Order Revenue',
        amount: 423,
        date: new Date(2022, 3, 12)
    },
    {
        title: 'Amazon, Order #3213',
        amount: -290,
        date: new Date(2022, 2, 29)
    },
    {
        title: 'Order Revenue',
        amount: 925,
        date: new Date(2022, 2, 19)
    },
    {
        title: 'Withdrawal Initiated',
        amount: -1290,
        date: new Date(2022, 2, 5)
    }
    ]
};

let cards = [card1, card2, card3]

for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    if (card.networkType === 'mastercard') {
        var imgType = './assets/mastercard.png'
    } else if (card.networkType === 'visa') {
        var imgType = './assets/visa.png'
    }
    document.write('<div>')
    document.write('<div>')
    document.write('<span>',card.type + ' Card','</span>')
    document.write('<div>',"<img src='" + imgType + "' alt=''/>",'<span>',card.networkType,'</span>','</div>')
    document.write('<div>','<h2>','"Current Balance"','</h2>',card.currencyType,card.balance,'</div>')
    document.write('<div>',card.number,card.expirationMonth,card.expirationYear,'</div>')
    document.write('</div')
        document.write('<div>')
    document.write('<h2>','History Transactions','</h2>')
    document.write('<ul')
    for (let j = 0; j < card.transaction.length; j++) {
        let transaction = card.transaction[j]
        let cssClass = transaction.amount > 0 ? "income":"outcome"
        document.write('<li>',transaction.title,',', transaction.date,',', "<span class='" + cssClass + "'>", transaction.amount,'</span>', '</li>')
    }    
    document.write('</ul>')
    document.write('</div')
    document.write('</div>')

}
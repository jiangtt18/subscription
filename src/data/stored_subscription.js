export const curSubs = {
    chat: {type: 'chat', plan: 'basic', name: 'Basic', seats: 2, price: 100},
    mailing: {type: 'mailing', plan: 'basic', name: 'Basic', seats: 2, price: 200}
};

export const subCost = {
    chat: {
        basic: {name: 'Basic', cost: 50, currency: '$'},
        premium: {name: 'Premium', cost: 100, currency: '$'},
        limited: {name: 'Limited', cost: 300, currency: '$'},
    },
    mailing: {
        basic: {name: 'Basic', cost: 100, currency: '$'},
        premium: {name: 'Premium', cost: 200, currency: '$'},
        limited: {name: 'Limited', cost: 500, currency: '$'},
    }
};

// to sort multiple products
export const product_priority = {chat:0, mailing:1};
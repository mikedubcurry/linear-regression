# linear-regression.js

exports a higher-order function to generate a time-series linear regression dataset

```

const { linReg, date } = require('...')

const data = [
    {
        date: "2015/01/01",
        value: 5
    },
    {
        date: "2015/06/01",
        value: 7
    },
    ...
];

const preprocessed = data.map(item => {
    return { x: new Date(item.date).getTime(), y: item.value }
});

const regression = linReg(preprocessed);

const trend = preprocessed.map(item => {
    return { date: date(item.x), value: regression(item.x) }
});

```

Runs in O(n²) time. Currently working on lowering the run time and possibly adding more types of regression

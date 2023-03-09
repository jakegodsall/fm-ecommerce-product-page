const formatToCurrency = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(value);
};

const formatToPercentage = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
    });

    return formatter.format(value);
};

export { formatToCurrency, formatToPercentage };

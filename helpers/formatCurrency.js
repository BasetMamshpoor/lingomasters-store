const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IRR',
        maximumFractionDigits: 0,
    }).format(value).replace("IRR", "");
};
export default formatCurrency;
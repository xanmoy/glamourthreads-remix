import React from 'react';

const CurrencyDisplay = ({ value }) => {
    // Custom logic to format the currency value
    const formattedValue = value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'INR', // Change this to your desired currency code
    });

    return React.createElement('span', null, formattedValue);
};

export default CurrencyDisplay;

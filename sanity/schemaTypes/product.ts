import CurrencyDisplay from '../serializers/currency';

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        // {
        //     name: 'price',
        //     title: 'Price',
        //     type: 'number',
        // },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Enter the price of the item',
            validation: Rule => Rule.required(),
            // Use the custom serializer
            options: {
                inputComponent: CurrencyDisplay
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'stripeProductId',
            title: 'Stripe Product ID',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
    ],
}
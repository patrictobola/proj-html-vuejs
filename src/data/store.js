import {reactive} from 'vue';
export const store = reactive({
    products: {
        men: {
            leatherJacket: {
                name: "Black Leather Jacket",
                imagePath: 'black_elegant_leather_jacket.jpg',
                tags: ['Men', 'Jackets', 'Jeans'],
                originalPrice: 235,
                finalPrice: 200
            },
            leatherSuit: {
                name: "Black Leather Suit",
                imagePath: 'black_leather_suit.jpg',
                tags: ['Men', 'Jackets'],
                originalPrice: null,
                finalPrice: 176
            },
            blueJacket: {
                name: "Blue Jacket & Stripe Tee",
                imagePath: 'blue_jacket_and_white_stripe_tee.jpg',
                tags: ['Men', 'Jackets', 'Suits'],
                originalPrice: null,
                finalPrice: 580
            },
            blackSuit: {
                name: "Modern Black Leather Suit",
                imagePath: 'modern_black_leather_suit.jpg',
                tags: ['Men', 'Jackets'],
                originalPrice: null,
                finalPrice: 96
            }
        }
    },
    collection: {
        winter: {
            imagePath: 'winter_collection_bg.jpg',
            text: 'Winter Collection',
            description: 'STYLISH AND WARM'
        },
        spring: {
            imagePath: 'spring_collection_bg.jpg',
            text: 'Spring Collection',
            description: 'BRIGHT AND COLORFUL'
        },
        autumn: {
            imagePath: 'autumn_collection_bg.jpg',
            text: 'Autumn Collection',
            description: 'RICH AND COMFORTABLE'
        },
    },
    bestSellers: {
        springDress: {
            name: 'Spring Printed Dress',
            imagePath: 'spring_printed_dress.jpg',
            tags: ['Dress', 'Women'],
            finalPrice: 47
        },
        modernLove: {
            name: 'Modern Love Tee',
            imagePath: 'modern_love_tee.jpg',
            tags: ['T-Shirts', 'Women'],
            finalPrice: 68
        },
        blackJacket: {
            name: 'Black Jacket',
            imagePath: 'black_leather_jacket.jpg',
            tags: ['Jackets', 'Women'],
            finalPrice: 47
        },
        leatherJacket: {
            name: "Black Leather Jacket",
            imagePath: 'black_elegant_leather_jacket.jpg',
            tags: ['Men', 'Jackets', 'Jeans'],
            originalPrice: 235,
            finalPrice: 200
        },
        hipsterTop: {
            name: 'Hipster Black Top',
            imagePath: 'hipster_black_top.jpg',
            tags: ['T-Shirts', 'Women'],
            finalPrice: 57
        },
    }
})
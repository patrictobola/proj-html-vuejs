import {reactive} from 'vue';
export const store = reactive({
    products: {
        men: {
            leatherJacket: {
                name: "Blue Leather Jacket",
                imagePath: '',
                tags: ['Men', 'Jackets', 'Jeans'],
                originalPrice: 235,
                finalPrice: 200
            },
            leatherSuit: {
                name: "Black Leather Suit",
                imagePath: '',
                tags: ['Men', 'Jackets'],
                originalPrice: null,
                finalPrice: 176
            },
            blueJacket: {
                name: "Blue Jacket & Stripe Tee",
                imagePath: '',
                tags: ['Men', 'Jackets', 'Suits'],
                originalPrice: null,
                finalPrice: 580
            },
            blackSuit: {
                name: "Modern Black Leather Suit",
                imagePath: '',
                tags: ['Men', 'Jackets'],
                originalPrice: null,
                finalPrice: 96
            }
        }
    }
})
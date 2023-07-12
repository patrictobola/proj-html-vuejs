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
    },
    websiteOffers: {
        discount: {
            offerTitle: '70% Off',
            imagePath: 'promo_box_1_bg.jpg',
            description: 'Un bel settanta percento di sconto giusto per riempire la casella' 
        },
        shipping: {
            offerTitle: 'Free Shipping',
            imagePath: 'promo_box_2_bg.jpg',
            description: 'Vogliamo parlare della spedizione gratuita giusto per riempire la casella?' 
        }
    },
    blog: {
        articles: [
            {
                imagePath: 'post_img_12-700x441.jpg',
                titleText: 'Questo è un titolo dinamico',
                date: 'July 12th, 2023',
                comments: 'n Comments',
                post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus suscipit placeat corporis?'
            },
            {
                imagePath: 'post_img_11-700x441.jpg',
                titleText: 'Questo è un titolo dinamico',
                date: 'July 12th, 2023',
                comments: 'n Comments',
                post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus suscipit placeat corporis?'
            },
            {
                imagePath: 'post_img_10-700x441.jpg',
                titleText: 'Questo è un titolo dinamico',
                date: 'July 12th, 2023',
                comments: 'n Comments',
                post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus suscipit placeat corporis?'
            },
        ]
    },
    webStore: {
        featured: {
            name: 'FEATURED',
            items: {
                blackJacket: {
                    imagePath: 'card_models/black_leather_jacket-120x156.jpg',
                    itemName: 'Black Jacket',
                    finalPrice: 125,
                },
                blackLeather: {
                    imagePath: 'card_models/black_elegant_leather_jacket-120x156.jpg',
                    itemName: 'Black Leather Jacket',
                    vote: 5,
                    originalPrice: 235,
                    finalPrice: 200,
                },
                hipsterTop: {
                    imagePath: 'card_models/hipster_black_top-120x156.jpg',
                    itemName: 'Hipster Black Top',
                    finalPrice: 57,
                }
            }
        },
        onSale: {
            name: 'ON SALE',
            items: {
                blackLeather: {
                    itemName: 'Black Leather Jacket',
                    imagePath: 'card_models/black_elegant_leather_jacket-120x156.jpg',
                    vote: 5,
                    originalPrice: 235,
                    finalPrice: 200,
                },
                blueJacket: {
                    itemName: 'Blue Leather Jacket',
                    imagePath: 'card_models/blue_leather_jacket-120x156.jpg',
                    originalPrice: 80,
                    finalPrice: 60,
                },
                modernBoots: {
                    itemName: 'Modern Leather Boots',
                    imagePath: 'products/brown_dress_shoes-200x260.jpg',
                    originalPrice: 50,
                    finalPrice: 30,
                }
            }
        },
        topRated: {
            name: 'TOP RATED',
            items: {
                leatherGloves: {
                    itemName: 'Leather Gloves',
                    imagePath: 'products/leather_gloves-120x156.jpg',
                    vote: 5,
                    finalPrice: 45,
                },
                blackLeather: {
                    itemName: 'Black Leather Jacket',
                    imagePath: 'card_models/black_elegant_leather_jacket-120x156.jpg',
                    vote: 5,
                    originalPrice: 235,
                    finalPrice: 200,
                },
                springDress: {
                    itemName: 'Spring Printed Dress',
                    imagePath: 'card_models/spring_printed_dress-120x156.jpg',
                    vote: 5,
                    finalPrice: 47,
                }
            }
        },
        latestReviews: {
            name: 'LATEST REVIEWS',
            items: {
                blackLeather: {
                    itemName: 'Black Leather Jacket',
                    imagePath: 'card_models/black_elegant_leather_jacket-120x156.jpg',
                    vote: 5,
                    originalPrice: 235,
                    finalPrice: 200,
                },
                leatherGloves: {
                    itemName: 'Leather Gloves',
                    imagePath: 'products/leather_gloves-120x156.jpg',
                    vote: 5,
                    finalPrice: 45,
                },
                springDress: {
                    itemName: 'Spring Printed Dress',
                    imagePath: 'card_models/spring_printed_dress-120x156.jpg',
                    vote: 5,
                    finalPrice: 47,
                }
            }
        },

    },
    logos: {
        authentic: {
            path: 'b_logotype_6.png',
            name: 'Authentic'
        },
        yard: {
            path: 'b_logotype_7.png',
            name: 'The Yard'
        },
        forest: {
            path: 'b_logotype_1.png',
            name: 'Forest'
        },
        badge: {
            path: 'b_logotype_2.png',
            name: 'Badge'
        },
        beardFashion: {
            path: 'b_logotype_3.png',
            name: 'Beard Fashion'
        },

    },
    tags: {
        black: {
            name: 'Black',
            id: 1
        },
        boots: {
            name: 'Boots',
            id: 2
        },
        brown: {
            name: 'Brown',
            id: 3
        },
        casual: {
            name: 'Casual',
            id: 4
        },
        d_g: {
            name: 'D&G',
            id: 5
        },
        fabric: {
            name: 'Fabric',
            id: 6
        },
        flowers: {
            name: 'Flowers',
            id: 7
        },
        grey: {
            name: 'Grey',
            id: 8
        },
        hat: {
            name: 'Hat',
            id: 9
        },
        hipster: {
            name: 'Hipster',
            id: 10
        },
        lines: {
            name: 'Lines',
            id: 11
        },
        multi: {
            name: 'Multi-Purpose',
            id: 12
        },
        newyork: {
            name: 'New York',
            id: 13
        },
        outdoors: {
            name: 'Outdoors',
            id: 14
        },
        red: {
            name: 'Red',
            id: 15
        },
        responsive: {
            name: 'Responsive',
            id: 16
        },
        summer: {
            name: 'Summer',
            id: 17
        },
        sweater: {
            name: 'Sweater',
            id: 18
        },
        travel: {
            name: 'Travel',
            id: 19
        },
        warm: {
            name: 'Warm',
            id: 20
        },
        white: {
            name: 'White',
            id: 21
        },
        winter: {
            name: 'Winter',
            id: 22
        },
    }
})
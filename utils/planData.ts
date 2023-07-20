export const planData = [
    {
        _id: '64a81e77036c19494f3e73a9',
        isTrial: true,
        title: "Trial",
        price: {
            monthly: 0
        },
        features: [
            {
                text:"10 AI Generated personalized pickup lines",
                isValid: true

            },
            {
                text:"Limited access to expert insight",
                isValid: true

            },
            {
                text: "Basic Customer support",
                isValid: true

            }
        ]
    },
    {
        _id: '64a81e9630af04c0c0fd6e90',
        title: "premium",
        isTrial: false,
        Price: {
            monthly:  9.99,
            annually: 83.99
        },
        features: [
            {
                text:"Unlimited AI Generated personalized pickup lines",
                isValid: true

            },
            {
                text:"Full access to expert insight",
                isValid: true

            },
            {
                text:"Priority access to new features",
                isValid: true

            },
            {
                text:"24/7 Customer support",
                isValid: true

            },
        ]
    },
    // {
    //     _id: '64a81ea807ca7c7d83d37fa3',
    //     planType: "premium",
    //     Price: 83.99,
    //     duration: 'yearly',
    //     features: [
    //         {
    //             text:"Unlimited AI Generated personalized pickup lines",
    //             isValid: true

    //         },
    //         {
    //             text:"Full access to expert insight",
    //             isValid: true

    //         },
    //         {
    //             text:"Priority access to new features",
    //             isValid: true

    //         },
    //         {
    //             text:"24/7 Customer support",
    //             isValid: true

    //         },
    //     ]
    // }
]
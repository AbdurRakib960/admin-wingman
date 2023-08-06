import PricingIcon from "./../components/CustomSvg/PricingIcon";
import CustomersIcon from "./../components/CustomSvg/CustomersIcon";
import Transaction from "./../components/CustomSvg/Transaction";
import FaqIcon from "../components/CustomSvg/FaqIcon";
import FooterIcon from "../components/CustomSvg/FooterIcon";

export const dateFilterOptions = [
    { value: "month", label: "This month" },
    { value: "hour", label: "Last hour" },
    { value: "week", label: "Last week" },
    { value: "year", label: "Last year" },
];

export const SideNav = [
   
    {
        id: 0,
        Icon: PricingIcon,
        url: "/pricing",
        title: "pricing",
    },
    {
        id: 1,
        Icon: FaqIcon,
        url: "/faq",
        title: "faq",
    },
    {
        id: 2,
        Icon: CustomersIcon,
        url: "/users",
        title: "users",
    },
    {
        id: 3,
        Icon: Transaction,
        url: "/transactions",
        title: "transaction",
    },
    {
        id: 4,
        Icon: FooterIcon,
        url: "/footer",
        title: "footer",
    },
    {
        id: 5,
        Icon: FooterIcon,
        url: "/card-action",
        title: "Card Action",
    },
];


export const subscriptionDetails = [
    {
        id: "6390ceb29546d67ea07cb695",
        title: "Freebie",
        price: {
            monthly: 23,
        },
        features: [
            {
                id: 1,
                text: "20,000+ of PNG & SVG graphics",
                isValid: true,
            },
            {
                id: 2,
                text: "Access to 100 million stock images",
                isValid: true,
            },
            {
                id: 3,
                text: "Upload custom icons and fonts",
                isValid: false,
            },
            {
                id: 4,
                text: "Access to 100 million stock images",
                isValid: false,
            },
            {
                id: 5,
                text: "Upload graphics & video in up to 4k",
                isValid: false,
            },
            {
                id: 6,
                text: "Unlimited Projects",
                isValid: false,
            },
            {
                id: 7,
                text: "Instant Access to our design system",
                isValid: false,
            },
            {
                id: 8,
                text: "Create teams to collaborate on designs",
                isValid: false,
            },
        ],
        isTrial: true,
    },
    {
        id: "6390e61c23d76ae991ca5544",
        title: "Professional",
        price: {
            annually: 2343,
            monthly: 23,
        },
        features: [
            {
                id: 1,
                text: "20,000+ of PNG & SVG graphics",
                isValid: true,
            },
            {
                id: 2,
                text: "Access to 100 million stock images",
                isValid: true,
            },
            {
                id: 3,
                text: "Upload custom icons and fonts",
                isValid: false,
            },
            {
                id: 4,
                text: "Access to 100 million stock images",
                isValid: false,
            },
            {
                id: 5,
                text: "Upload graphics & video in up to 4k",
                isValid: false,
            },
            {
                id: 6,
                text: "Unlimited Projects",
                isValid: false,
            },
            {
                id: 7,
                text: "Instant Access to our design system",
                isValid: false,
            },
            {
                id: 8,
                text: "Create teams to collaborate on designs",
                isValid: false,
            },
        ],
        isTrial: false,
    },
    {
        id: "6390e66823d76ae991ca554c",
        title: "Enterprise",
        price: {
            annually: 2343,
            monthly: 23,
        },
        features: [
            {
                id: 1,
                text: "20,000+ of PNG & SVG graphics",
                isValid: true,
            },
            {
                id: 2,
                text: "Access to 100 million stock images",
                isValid: true,
            },
            {
                id: 3,
                text: "Upload custom icons and fonts",
                isValid: false,
            },
            {
                id: 4,
                text: "Access to 100 million stock images",
                isValid: false,
            },
            {
                id: 5,
                text: "Upload graphics & video in up to 4k",
                isValid: false,
            },
            {
                id: 6,
                text: "Unlimited Projects",
                isValid: false,
            },
            {
                id: 7,
                text: "Instant Access to our design system",
                isValid: false,
            },
            {
                id: 8,
                text: "Create teams to collaborate on designs",
                isValid: false,
            },
        ],
        isTrial: false,
    },
];

export const tableHead = [
    "Name",
    "Product name",
    "Subscriber plan",
    "Purchase date",
    "Total Price",
];

export const customerTableHead = [
    "Name",
    "Email",
    "Join Date",
    "Customer Id",
];
export const productDetails = [
    {
        id: "1",
        title: "Total products",
        benefitPercent: 36,
        products: 120000,
        img: "/images/total-product.svg",
    },
    {
        id: "2",
        title: "Most Viewed Products",
        benefitPercent: 36,
        products: 8346,
        img: "/images/view-product.svg",
    },
    {
        id: "3",
        title: "Top Downloaded",
        benefitPercent: 36,
        products: 120000,
        img: "/images/total-product.svg",
    },
    {
        id: "4",
        title: "Trending Products",
        benefitPercent: 36,
        products: 120000,
        img: "/images/total-product.svg",
    },
];

export const customersTabTitles = [
    {
        title: "All Customers",
        value: "all",
    },
    {
        title: "Active",
        value: "active",
    },
    {
        title: "Banned",
        value: "banned",
    },
];
export const customersData = [
    {
        id: "1",
        name: "Chandra Sen",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "2",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmailjjjjjjjjjjjj.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "inactive",
    },
    {
        id: "3",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "banned",
    },
    {
        id: "4",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "5",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "inactive",
    },
    {
        id: "6",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "7",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "8",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "9",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "10",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "11",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "12",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
    {
        id: "13",
        name: "Chandra Kumari",
        email: "skibrahimibu420@gmail.com",
        subscription_type: "Professional",
        join_date: "15 May 2020",
        type: "active",
    },
];


export const transactionsData = [
    {
        id: "1",
        name: "Chandra Sen",
        product_name: "Professional Subscription ggggggggggggggg",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "2",
        name: "Chandra Kumari",
        product_name: "Buyout Licensce",
        plan: "Freebie",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "3",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "4",
        name: "Chandra Kumari",
        product_name: "Buyout Licensce",
        plan: "Freebie",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "5",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "6",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "7",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "8",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "9",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "10",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "11",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "12",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
    {
        id: "13",
        name: "Chandra Sen",
        product_name: "Professional Subscription",
        plan: "Professional",
        purchase_date: "15 May 2020",
        total_price: "$500",
    },
];
export const transactionsTableHead = [
    "User Name",
    "Email",
    "Plan",
    "Purchase date",
    "Plan End",
    "Plan left",
    "Is  expired",
];


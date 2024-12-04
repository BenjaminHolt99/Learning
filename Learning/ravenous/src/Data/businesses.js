// business.js (data file or within App.js)
import Images from '../Images/All_Images'

const businesses = [
    {
        imageSrc: Images.Image1,
        name: 'Best Restaurant',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipcode: '90210',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90,
    },

    {
        imageSrc: Images.Image2,
        name: 'Good Eats',
        address: '456 Elm St',
        city: 'Othertown',
        state: 'NY',
        zipcode: '10001',
        category: 'Mexican',
        rating: 4.0,
        reviewCount: 120,
    },
    {
        imageSrc: Images.Image3,
        name: 'Tasty Treats',
        address: '789 Oak St',
        city: 'Sometown',
        state: 'TX',
        zipcode: '73301',
        category: 'Bakery',
        rating: 5.0,
        reviewCount: 60,
    },
    // Add more businesses as needed
];


export default businesses;

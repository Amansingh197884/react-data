import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { usePopup } from './PopupContext';

import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css';

// Pinterest Hotlinking Block Bypass Helper
const getSafeImageUrl = (url) => {
  if (!url) return '';
  if (url.includes('i.pinimg.com')) {
    const cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&default=${encodeURIComponent(url)}`;
  }
  return url;
};

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const apartmentsData = [
  {
    id: 1,
    propertyId: 'TREJO-101',
    title: 'Trejo Urban Escape',
    location: 'Roma Norte, CDMX',
    city: 'Ciudad de México',
    price: '₹1.03 Cr*',
    beds: 3,
    baths: 3,
    garage: 2,
    area: '1,750 sqft',
    lotSize: '2,200 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'An ultra-modern sanctuary situated in prime central avenues, offering open-concept duplex units, smart automation, and private sky lounges.',
    image: 'https://i.pinimg.com/1200x/98/79/c9/9879c949ecbe7feafb49efac228d9a64.jpg',
    images: [
      'https://i.pinimg.com/1200x/98/79/c9/9879c949ecbe7feafb49efac228d9a64.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg'
    ],
    pricing: [
      { type: 'Executive Suite', bhk: '2 BHK', priceStd: '₹ 1.03 Cr', priceEarly: '₹ 95 Lakh', area: '1,100 Sq.Ft.', park: '1 Reserved Covered Parking' },
      { type: 'Sky Residence', bhk: '3 BHK', priceStd: '₹ 1.45 Cr', priceEarly: '₹ 1.35 Cr', area: '1,650 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Penthouse Loft', bhk: '4 BHK Duplex', priceStd: '₹ 2.10 Cr', priceEarly: '₹ 1.95 Cr', area: '2,400 Sq.Ft.', park: '2 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/77/89/3a/77893af9dbb718aa0831610996173a1a.jpg', title: 'Ground Urban Suite Plan', bhk: '2 BHK Suite', area: '1,100 Sq.Ft.', baths: '2 Baths', facing: 'East Facing', features: ['Open Living Pavilion', 'Balcony Deck', 'Utility Space'] },
      { id: 2, url: 'https://i.pinimg.com/736x/44/0d/18/440d1830e06ae38b25d08f4c9c1ef3cb.jpg', title: 'Sky Residence Layout', bhk: '3 BHK Premium', area: '1,650 Sq.Ft.', baths: '3 Baths', facing: 'North-East', features: ['Master Suite', 'Private Work Den', 'Italian Kitchen'] },
      { id: 3, url: 'https://i.pinimg.com/736x/d6/3b/b1/d63bb1296bf3e7b1a20bf7d5a5749f7b.jpg', title: 'Penthouse Loft Blueprint', bhk: '4 BHK Duplex', area: '2,400 Sq.Ft.', baths: '4 Baths', facing: 'Skyline View', features: ['Plunge Terrace', 'Double Height Lounge', 'Bar Counter'] }
    ]
  },
  {
    id: 2,
    propertyId: 'SKY-102',
    title: 'Skyline Luxury Suite',
    location: 'Polanco, CDMX',
    city: 'Ciudad de México',
    price: '₹1.80 Cr*',
    beds: 3,
    baths: 3,
    garage: 2,
    area: '2,100 sqft',
    lotSize: '2,800 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Bespoke high-floor residences overlooking tree-lined avenues with Italian marble flooring, soundproof double-glazed envelopes, and concierge services.',
    image: 'https://i.pinimg.com/736x/a1/9e/ce/a19eceebed7b7eb5e3b8c01a2882f6d9.jpg',
    images: [
      'https://i.pinimg.com/736x/a1/9e/ce/a19eceebed7b7eb5e3b8c01a2882f6d9.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg'
    ],
    pricing: [
      { type: 'Executive Suite', bhk: '2 BHK', priceStd: '₹ 1.80 Cr', priceEarly: '₹ 1.68 Cr', area: '1,350 Sq.Ft.', park: '2 Reserved Parkings' },
      { type: 'Signature Penthouse', bhk: '3 BHK Duplex', priceStd: '₹ 2.45 Cr', priceEarly: '₹ 2.25 Cr', area: '2,100 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Presidential Suite', bhk: '4 BHK', priceStd: '₹ 3.40 Cr', priceEarly: '₹ 3.15 Cr', area: '3,200 Sq.Ft.', park: '3 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/55/e8/cf/55e8cf65f5739cbaf9e55a30a7d57f12.jpg', title: 'Polanco Vista Suite Plan', bhk: '2 BHK Luxury', area: '1,350 Sq.Ft.', baths: '2 Baths', facing: 'North Facing', features: ['Avenue Balcony', 'Walk-in Wardrobe', 'En-suite Bath'] },
      { id: 2, url: 'https://i.pinimg.com/736x/89/4b/ef/894bef6a41f6a157e8fa194389df0b6a.jpg', title: 'Signature Duplex Blueprint', bhk: '3 BHK Duplex', area: '2,100 Sq.Ft.', baths: '3 Baths', facing: 'East Facing', features: ['Island Kitchen', 'Family Lounge', 'Covered Deck'] },
      { id: 3, url: 'https://i.pinimg.com/736x/a2/1e/8c/a21e8c75865b45fef8c728e23f9905c1.jpg', title: 'Presidential Sky Layout', bhk: '4 BHK Mansion', area: '3,200 Sq.Ft.', baths: '5 Baths', facing: '360 Skyline', features: ['Private Elevator', 'Butler Pantry', 'Sky Deck'] }
    ]
  },
  {
    id: 3,
    propertyId: 'LOFT-103',
    title: 'Royal Penthouse Loft',
    location: 'Santa Fe, CDMX',
    city: 'Ciudad de México',
    price: '₹2.10 Cr*',
    beds: 4,
    baths: 4,
    garage: 3,
    area: '3,100 sqft',
    lotSize: '3,800 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Sprawling duplex residences crafted for seamless entertaining, complete with infinity plunge pools, private elevators, and custom joinery.',
    image: 'https://i.pinimg.com/736x/15/77/65/1577655843ee1f4e15d05bf336b828af.jpg',
    images: [
      'https://i.pinimg.com/736x/15/77/65/1577655843ee1f4e15d05bf336b828af.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg'
    ],
    pricing: [
      { type: 'Penthouse Loft', bhk: '3 BHK', priceStd: '₹ 2.10 Cr', priceEarly: '₹ 1.95 Cr', area: '2,200 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Duplex Penthouse', bhk: '4 BHK Duplex', priceStd: '₹ 2.85 Cr', priceEarly: '₹ 2.65 Cr', area: '3,100 Sq.Ft.', park: '3 Covered Parkings' },
      { type: 'Grand Imperial', bhk: '5 BHK Villa', priceStd: '₹ 4.10 Cr', priceEarly: '₹ 3.80 Cr', area: '4,500 Sq.Ft.', park: '4 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/3f/ec/db/3fecdbda5ce9cbe26b88b7f8dfae7d6c.jpg', title: 'Loft Lower Level Blueprint', bhk: '3 BHK Loft', area: '2,200 Sq.Ft.', baths: '3 Baths', facing: 'West Facing', features: ['Double-Height Ceiling', 'Wine Nook', 'Terrace'] },
      { id: 2, url: 'https://i.pinimg.com/736x/1a/04/b8/1a04b8ce27318ec85244d2d415174317.jpg', title: 'Upper Duplex Deck Plan', bhk: '4 BHK Duplex', area: '3,100 Sq.Ft.', baths: '4 Baths', facing: 'Panoramic View', features: ['Private Plunge Pool', 'Master Jacuzzi', 'BBQ Lounge'] },
      { id: 3, url: 'https://i.pinimg.com/736x/6c/42/fa/6c42fa25a77b8f9e68c919fae33bca39.jpg', title: 'Grand Imperial Layout', bhk: '5 BHK Villa', area: '4,500 Sq.Ft.', baths: '5 Baths', facing: 'East-West', features: ['Cinema Hall', 'Servant Suite', 'Covered Deck'] }
    ]
  },
  {
    id: 4,
    propertyId: 'DUPLEX-104',
    title: 'Grand Haven Duplex',
    location: 'Condesa, CDMX',
    city: 'Ciudad de México',
    price: '₹2.90 Cr*',
    beds: 4,
    baths: 4,
    garage: 2,
    area: '3,800 sqft',
    lotSize: '4,500 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Nestled in shaded avenues, Grand Haven combines historic design aesthetics with cutting-edge residential automation and climate control.',
    image: 'https://i.pinimg.com/736x/6b/fb/a7/6bfba7811cc753decbaafd9f236e7201.jpg',
    images: [
      'https://i.pinimg.com/736x/6b/fb/a7/6bfba7811cc753decbaafd9f236e7201.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg'
    ],
    pricing: [
      { type: 'Duplex Loft', bhk: '3 BHK', priceStd: '₹ 2.90 Cr', priceEarly: '₹ 2.70 Cr', area: '2,600 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Royal Villa', bhk: '4 BHK Duplex', priceStd: '₹ 3.65 Cr', priceEarly: '₹ 3.40 Cr', area: '3,800 Sq.Ft.', park: '3 Covered Parkings' },
      { type: 'Presidential Duplex', bhk: '5 BHK', priceStd: '₹ 4.80 Cr', priceEarly: '₹ 4.45 Cr', area: '5,100 Sq.Ft.', park: '4 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/b2/87/40/b28740c5f0f353160e1d08e562858b97.jpg', title: 'Courtyard Level Blueprint', bhk: '3 BHK Duplex', area: '2,600 Sq.Ft.', baths: '3 Baths', facing: 'North Facing', features: ['Internal Garden', 'Chef Kitchen', 'Veranda'] },
      { id: 2, url: 'https://i.pinimg.com/736x/67/29/ce/6729ce6e9ca912ee0150d1ae0df6dbb5.jpg', title: 'Royal Villa Upper Plan', bhk: '4 BHK Duplex', area: '3,800 Sq.Ft.', baths: '4 Baths', facing: 'South-East', features: ['Double Master Suites', 'Sunken Terrace', 'Study Room'] },
      { id: 3, url: 'https://i.pinimg.com/736x/15/4c/83/154c832ffc9ebfbe3d87db1aa2e8a159.jpg', title: 'Grand Haven Presidential Floor', bhk: '5 BHK Mansion', area: '5,100 Sq.Ft.', baths: '6 Baths', facing: 'Park Facing', features: ['Private Elevator', 'Heated Pool', 'Staff Quarter'] }
    ]
  }
];

const featuredData = [
  {
    id: 101,
    propertyId: 'HORIZON-201',
    title: 'Aria Horizon Penthouse',
    location: 'Lomas de Chapultepec, CDMX',
    city: 'Ciudad de México',
    price: '₹3.20 Cr*',
    beds: 4,
    baths: 4,
    garage: 3,
    area: '4,100 sqft',
    lotSize: '5,000 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Custom glass elevations with panoramic hill contours, heated private swimming pools, and dedicated butler quarters.',
    image: 'https://i.pinimg.com/736x/02/ff/14/02ff14ae5d16c92ac14d586a8fc7d902.jpg',
    images: [
      'https://i.pinimg.com/736x/02/ff/14/02ff14ae5d16c92ac14d586a8fc7d902.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg'
    ],
    pricing: [
      { type: 'Horizon Suite', bhk: '3 BHK Duplex', priceStd: '₹ 3.20 Cr', priceEarly: '₹ 2.95 Cr', area: '2,900 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Sky Mansion', bhk: '4 BHK Duplex', priceStd: '₹ 4.15 Cr', priceEarly: '₹ 3.85 Cr', area: '4,100 Sq.Ft.', park: '3 Covered Parkings' },
      { type: 'Presidential Estate', bhk: '5 BHK Villa', priceStd: '₹ 5.10 Cr', priceEarly: '₹ 4.75 Cr', area: '5,400 Sq.Ft.', park: '4 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/4d/91/3c/4d913cc33400392330a84d436a599b82.jpg', title: 'Horizon Suite Level Blueprint', bhk: '3 BHK Duplex', area: '2,900 Sq.Ft.', baths: '3 Baths', facing: 'East Facing', features: ['Glass Enclosed Deck', 'Wine Cellar', 'Show Kitchen'] },
      { id: 2, url: 'https://i.pinimg.com/736x/2b/9c/de/2b9cde185a06c802492167d4dfbf3757.jpg', title: 'Sky Mansion Layout', bhk: '4 BHK Duplex', area: '4,100 Sq.Ft.', baths: '4 Baths', facing: 'North-East', features: ['Heated Plunge Pool', 'Private Cinema', 'Staff Quarters'] },
      { id: 3, url: 'https://i.pinimg.com/736x/71/6a/5f/716a5fa2b7373801f9ae1ad700aeae39.jpg', title: 'Presidential Estate Blueprint', bhk: '5 BHK Villa', area: '5,400 Sq.Ft.', baths: '6 Baths', facing: '360 Panorama', features: ['Private Elevator', 'Rooftop Garden', 'Spa Deck'] }
    ]
  },
  {
    id: 102,
    propertyId: 'GLASS-202',
    title: 'The Glass Pavilion Villa',
    location: 'Pedregal, CDMX',
    city: 'Ciudad de México',
    price: '₹2.60 Cr*',
    beds: 3,
    baths: 4,
    garage: 2,
    area: '3,900 sqft',
    lotSize: '4,800 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Volcanic stone foundations framed by floor-to-ceiling glass pavilions, direct garden connectivity, and internal courtyard reflection pools.',
    image: 'https://i.pinimg.com/736x/4f/90/66/4f906605cc5da8c659f0a6118ed0cda3.jpg',
    images: [
      'https://i.pinimg.com/736x/4f/90/66/4f906605cc5da8c659f0a6118ed0cda3.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg'
    ],
    pricing: [
      { type: 'Pavilion Villa', bhk: '3 BHK', priceStd: '₹ 2.60 Cr', priceEarly: '₹ 2.40 Cr', area: '2,500 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Glass Mansion', bhk: '4 BHK Duplex', priceStd: '₹ 3.50 Cr', priceEarly: '₹ 3.25 Cr', area: '3,900 Sq.Ft.', park: '3 Covered Parkings' },
      { type: 'Zen Master Compound', bhk: '5 BHK Estate', priceStd: '₹ 4.80 Cr', priceEarly: '₹ 4.45 Cr', area: '5,200 Sq.Ft.', park: '4 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/f9/59/3a/f9593aa716301ce6b12aeb7dfb489d70.jpg', title: 'Glass Pavilion Master Plan', bhk: '3 BHK Villa', area: '2,500 Sq.Ft.', baths: '3 Baths', facing: 'Garden Facing', features: ['Reflection Pool', 'Outdoor Dining Deck', 'Zen Garden'] },
      { id: 2, url: 'https://i.pinimg.com/736x/91/92/79/919279eef3ce942d93e7ebfa280455bb.jpg', title: 'Glass Mansion Blueprint', bhk: '4 BHK Duplex', area: '3,900 Sq.Ft.', baths: '4 Baths', facing: 'South Facing', features: ['Volcanic Stone Wall', 'Sky Lounge', '2 Car Garage'] },
      { id: 3, url: 'https://i.pinimg.com/736x/32/38/54/323854743288b209e767417e2e8e3a2b.jpg', title: 'Zen Compound Layout', bhk: '5 BHK Estate', area: '5,200 Sq.Ft.', baths: '5 Baths', facing: 'Valley View', features: ['Private Forest Trail', 'Sauna Suite', 'Concierge Room'] }
    ]
  },
  {
    id: 103,
    propertyId: 'SANCTUARY-203',
    title: 'Urban Sanctuary Suite',
    location: 'Juárez, CDMX',
    city: 'Ciudad de México',
    price: '₹1.95 Cr*',
    beds: 3,
    baths: 3,
    garage: 2,
    area: '1,950 sqft',
    lotSize: '2,400 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'High-yield boutique residences engineered with acoustic isolation, smart home ecosystem, and exclusive access to rooftop wellness facilities.',
    image: 'https://i.pinimg.com/1200x/ec/05/b2/ec05b2197739b15a9f8511c5314d57cc.jpg',
    images: [
      'https://i.pinimg.com/1200x/ec/05/b2/ec05b2197739b15a9f8511c5314d57cc.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg'
    ],
    pricing: [
      { type: 'Urban Loft', bhk: '2 BHK', priceStd: '₹ 1.95 Cr', priceEarly: '₹ 1.80 Cr', area: '1,400 Sq.Ft.', park: '1 Covered Parking' },
      { type: 'Sanctuary Suite', bhk: '3 BHK', priceStd: '₹ 2.50 Cr', priceEarly: '₹ 2.30 Cr', area: '1,950 Sq.Ft.', park: '2 Covered Parkings' },
      { type: 'Metropolitan Penthouse', bhk: '4 BHK Duplex', priceStd: '₹ 3.35 Cr', priceEarly: '₹ 3.10 Cr', area: '2,900 Sq.Ft.', park: '2 Covered Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/16/09/24/160924976c666016e3c3b55ce77864f7.jpg', title: 'Urban Loft Master Tier', bhk: '2 BHK Loft', area: '1,400 Sq.Ft.', baths: '2 Baths', facing: 'Avenue View', features: ['Acoustic Glazing', 'Smart Automation', 'Breakfast Bar'] },
      { id: 2, url: 'https://i.pinimg.com/736x/c5/d1/2b/c5d12b1897d266e771ae4469796695b2.jpg', title: 'Sanctuary Suite Layout', bhk: '3 BHK Residence', area: '1,950 Sq.Ft.', baths: '3 Baths', facing: 'North Facing', features: ['En-suite Bedrooms', 'Work Studio', 'Sky Deck Access'] },
      { id: 3, url: 'https://i.pinimg.com/736x/6f/a2/e5/6fa2e519aa67a21648a1c97a5a882a85.jpg', title: 'Metro Penthouse Blueprint', bhk: '4 BHK Duplex', area: '2,900 Sq.Ft.', baths: '4 Baths', facing: 'Skyline View', features: ['Rooftop Jacuzzi', 'Outdoor Bar', 'Master Lounge'] }
    ]
  },
  {
    id: 104,
    propertyId: 'MANSION-204',
    title: 'Presidential Duplex Mansion',
    location: 'Bosques de las Lomas, CDMX',
    city: 'Ciudad de México',
    price: '₹4.50 Cr*',
    beds: 5,
    baths: 6,
    garage: 4,
    area: '6,200 sqft',
    lotSize: '7,500 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: '6,000+ sq.ft. private residential compound with bespoke marble finishes, climate-controlled wine cellars, cinema room, and private garage arcade.',
    image: 'https://i.pinimg.com/1200x/f7/7e/d8/f77ed8c18f562a0eedd305c91bce8d06.jpg',
    images: [
      'https://i.pinimg.com/1200x/f7/7e/d8/f77ed8c18f562a0eedd305c91bce8d06.jpg',
      'https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg',
      'https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg',
      'https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg',
      'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg',
      'https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg'
    ],
    pricing: [
      { type: 'Signature Duplex', bhk: '4 BHK Duplex', priceStd: '₹ 4.50 Cr', priceEarly: '₹ 4.15 Cr', area: '4,200 Sq.Ft.', park: '3 Covered Parkings' },
      { type: 'Presidential Compound', bhk: '5 BHK Estate', priceStd: '₹ 5.90 Cr', priceEarly: '₹ 5.50 Cr', area: '6,200 Sq.Ft.', park: '5 Covered Parkings' },
      { type: 'Imperial Palace Estate', bhk: '6 BHK Mansion', priceStd: '₹ 7.20 Cr', priceEarly: '₹ 6.75 Cr', area: '8,000 Sq.Ft.', park: '6 Dedicated Parkings' }
    ],
    floorPlans: [
      { id: 1, url: 'https://i.pinimg.com/736x/31/54/d8/3154d852a36b4157833c87f98c40b8f0.jpg', title: 'Signature Duplex Floor Plan', bhk: '4 BHK Duplex', area: '4,200 Sq.Ft.', baths: '4 Baths', facing: 'Forest Facing', features: ['Private Wine Vault', 'Marble Gallery', 'Infinity Plunge Pool'] },
      { id: 2, url: 'https://i.pinimg.com/736x/5a/07/76/5a0776b29d47913ca6baecda938e553a.jpg', title: 'Presidential Compound Layout', bhk: '5 BHK Estate', area: '6,200 Sq.Ft.', baths: '6 Baths', facing: 'East-Facing', features: ['Private Elevator', 'Home Cinema', 'Driver Quarters'] },
      { id: 3, url: 'https://i.pinimg.com/736x/ab/f8/77/abf8774737270ad60c6d7083049104fa.jpg', title: 'Imperial Palace Master Blueprint', bhk: '6 BHK Mansion', area: '8,000 Sq.Ft.', baths: '7 Baths', facing: '360 Panoramic', features: ['Helipad Access Deck', 'Security Annex', 'Spa & Sauna Pavilion'] }
    ]
  }
];

export default function ApartmentsSection() {
  const navigate = useNavigate();
  let popupHandler;
  try {
    const popup = usePopup();
    popupHandler = popup?.openPopup;
  } catch (err) {
    popupHandler = () => alert('Inquiry form opened.');
  }

  const handleViewProject = (item) => {
    const slug = createSlug(item.title);
    navigate(`/property/${slug}`, { state: { property: item } });
  };

  return (
    <div className="aria-property-page">
      <div className="property-hero-wrapper container-fluid p-0">
        <header className="property-hero-banner">
          <div className="property-hero-overlay">
            <div className="property-hero-content text-center">
              <div className="property-breadcrumb-badge mb-3">
                <Link to="/" className="property-breadcrumb-link">HOME</Link>
                <span className="property-crumb-separator">/</span>
                <span className="property-gold-current">PROPERTIES</span>
              </div>
              <h1 className="property-hero-title">Exclusive Residences</h1>
              <p className="property-hero-tagline mt-2">Architectural Masterpieces & Curated Living Spaces</p>
            </div>
          </div>
        </header>
      </div>

      <section className="mt-4 mb-5 py-5">
        <div className="container-fluid px-3 px-md-5">
          <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
            <div className="header-text">
              <span className="aria-gold-sub d-block mb-1">CURATED SELECTION</span>
              <h2 className="mv-section-title m-0">Top Luxury Apartments</h2>
            </div>
            <div className="navigation-buttons d-flex gap-2">
              <button className="nav-btn custom-prev-btn apt-prev-1" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="nav-btn custom-next-btn apt-next-1" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.apt-prev-1',
              nextEl: '.apt-next-1'
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="apartments-slider"
          >
            {apartmentsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-card">
                  <img
                    src={getSafeImageUrl(item.image)}
                    alt={item.title}
                    className="card-bg-img"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div className="default-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-location"><FaMapMarkerAlt className="me-1 text-gold" /> {item.location}</p>
                    <p className="project-city">{item.city}</p>
                  </div>
                  <div className="hover-overlay">
                    <span className="price-from">starting from</span>
                    <h4 className="price-amount">{item.price}</h4>
                    <button
                      type="button"
                      className="view-btn border-0 cursor-pointer"
                      onClick={() => handleViewProject(item)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-5 pt-0 mt-3">
        <div className="container-fluid px-3 px-md-5">
          <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
            <div className="header-text">
              <span className="aria-gold-sub d-block mb-1">PORTFOLIO EXCLUSIVES</span>
              <h2 className="mv-section-title m-0">Featured Projects</h2>
            </div>
            <div className="navigation-buttons d-flex gap-2">
              <button className="nav-btn custom-prev-btn apt-prev-2" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="nav-btn custom-next-btn apt-next-2" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.apt-prev-2',
              nextEl: '.apt-next-2'
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="apartments-slider"
          >
            {featuredData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-card">
                  <img
                    src={getSafeImageUrl(item.image)}
                    alt={item.title}
                    className="card-bg-img"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div className="default-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-location"><FaMapMarkerAlt className="me-1 text-gold" /> {item.location}</p>
                    <p className="project-city">{item.city}</p>
                  </div>
                  <div className="hover-overlay">
                    <span className="price-from">starting from</span>
                    <h4 className="price-amount">{item.price}</h4>
                    <button
                      type="button"
                      className="view-btn border-0 cursor-pointer"
                      onClick={() => handleViewProject(item)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="aria-cta-banner py-5">
        <div className="container-fluid px-3 px-md-5">
          <div className="aria-cta-card p-4 p-md-5 text-center">
            <span className="aria-gold-sub d-block mb-2">LIMITED RESERVATIONS</span>
            <h2 className="cta-heading mb-3">Experience Ultra-Luxury Firsthand</h2>
            <p className="aria-text-muted max-w-600 mx-auto mb-4">
              Schedule an exclusive private tour with our senior real estate advisory team and explore available residences before official releases.
            </p>
            <div className="cta-buttons-wrapper d-flex justify-content-center align-items-center gap-3 flex-wrap">
              <button
                type="button"
                className="view-btn border-0 cursor-pointer"
                onClick={() => popupHandler?.('PrivateTourReservation')}
              >
                Book Private Tour
              </button>
              <button
                type="button"
                className="aria-btn-outline border-0 cursor-pointer"
                onClick={() => popupHandler?.('PortfolioDownload')}
              >
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
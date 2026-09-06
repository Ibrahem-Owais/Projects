import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const productsData = [
    {
        id: 'jedel-wkl102',
        title: 'Jedel WKL102 Mechanical Keyboard',
        shortDesc: 'Compact mechanical gaming keyboard with RGB lighting and tri-mode connectivity (Wired, 2.4G, Bluetooth).',
        fullDesc: 'A compact 88-key mechanical gaming keyboard designed for high performance and durability. Features tri-mode connectivity, hot-swappable switches, Rainbow RGB backlighting with 22 effects, and a 4000mAh battery.',
        price: '$49.99',
        image: 'https://down-th.img.susercontent.com/file/th-11134207-81ztf-mfrq6wp1f8y3c4'
    },
    {
        id: 'logitech-g502',
        title: 'Logitech G502 Hero Gaming Mouse',
        shortDesc: 'High-performance wired gaming mouse with HERO 25K sensor and customizable weights.',
        fullDesc: 'Features 11 programmable buttons, LIGHTSYNC RGB lighting, adjustable weight system, and mechanical switch button tensioning for precise click feel.',
        price: '$39.99',
        image: 'https://www.applavia.com/wp-content/uploads/2023/01/Logitech-G502-Hero-Review-Best-Gaming-Mouse-1536x864.jpg'
    },
    {
        id: 'redragon-k673',
        title: 'Redragon K673 PRO Keyboard',
        shortDesc: '75% wireless mechanical gaming keyboard featuring Gasket mount, RGB lighting, and tri-mode connectivity (Wired, 2.4G, Bluetooth).',
        fullDesc: 'A 75% mechanical gaming keyboard with tri-mode connectivity (Type-C wired, 2.4G wireless, and Bluetooth). Built with a Gasket-mounted design and sound-dampening foam for a smoother, quieter typing experience. Features hot-swappable switches, vibrant customizable RGB backlighting, and a dedicated control knob for volume and brightness adjustments.',
        price: '$77.99',
        image: 'https://cdn.shopify.com/s/files/1/0012/4957/4961/files/Redragon_K673_PRO_75_Wireless_Gasket_RGB_Keyboard_15.jpg?v=1694512388'
    },
    {
        id: 'aula-f75',
        title: 'Aula F75 Mechanical Keyboard',
        shortDesc: '75% wireless mechanical keyboard featuring a Gasket mount, smooth linear switches, RGB backlighting, and tri-mode connectivity.',
        fullDesc: 'A premium 75% mechanical gaming keyboard with tri-mode connectivity (Type-C wired, 2.4G wireless, and Bluetooth). Features a Gasket-mounted structure with 5 layers of sound-dampening foam for an exceptional "thocky" typing feel and acoustics. Equipped with south-facing RGB backlighting, hot-swappable switch sockets, a multi-function control knob, and a high-capacity 4000mAh rechargeable battery.',
        price: '$49.99',
        image: 'https://m.media-amazon.com/images/I/81X+gEilqXL._AC_SL1500_.jpg'
    },
    {
        id: 'gawfolk-27',
        title: 'Gawfolk 27" 2K 165Hz Curved Gaming Monitor',
        shortDesc: '27-inch 2K QHD curved gaming monitor featuring a 165Hz refresh rate, 1800R curvature, and 99% sRGB color gamut.',
        fullDesc: 'A 27-inch curved gaming monitor delivering sharp 2K QHD resolution paired with an immersive 1800R curvature. Built for high-speed gaming with a ultra-smooth 165Hz refresh rate that minimizes motion blur and screen tearing. Features 99% sRGB color coverage for vivid visual fidelity, alongside a sleek, gaming-focused stand and slim bezel design.',
        price: '$149.99',
        image: 'https://m.media-amazon.com/images/I/716BFcP0rLL._AC_SL1500_.jpg'
    },
    {
        id: 'xigmatek-gaming-x',
        title: 'Xigmatek Gaming X Case',
        shortDesc: 'Mid-Tower gaming PC case with tempered glass side panel, superior airflow mesh design, and support for up to 6 fans.',
        fullDesc: 'A professional mid-tower gaming chassis built for high airflow and modern aesthetics. Features a mesh front panel alongside a tempered glass side panel to showcase your build. Supports ATX motherboards, GPUs up to 320mm in length, and CPU coolers up to 160mm tall. Designed with easy cable management, support for up to 6 x 120mm cooling fans, and liquid cooling radiator compatibility (up to 240mm front/top).',
        price: '$59.99',
        image: 'https://tse3.mm.bing.net/th/id/OIP.HmTlu8m_ZZGnhDomX4FooQHaHw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
];

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    
    // TO PLUS ONE +1 
    const [quantity, setQuantity] = useState(1);

    const product = productsData.find((item) => item.id === id);

    if (!product) {
        return (
            <div className="container py-5 text-center min-vh-100">
                <h3 className="text-danger fw-bold mb-3">Product Not Found</h3>
                <Link to="/home" className="btn btn-primary">
                    ← Back to Deals
                </Link>
            </div>
        );
    }

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        const numericPrice = typeof product.price === 'string'
            ? parseFloat(product.price.replace('$', ''))
            : product.price;

        for (let i = 0; i < quantity; i++) {
            addToCart({
                ...product,
                price: numericPrice
            });
        }
    };

    return (
        <section className="py-5 bg-body text-body min-vh-100">
            <div className="container">
                <div className="mb-4">
                    <Link to="/home" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                        ← Back to Deals
                    </Link>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <div className="p-4 border rounded-3 bg-body-tertiary shadow-sm">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid object-fit-contain"
                                style={{ maxHeight: '380px', width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column">
                        <h1 className="fw-bold fs-3 text-body mb-2">{product.title}</h1>

                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="text-warning small">
                                ★ ★ ★ ★ ★ <span className="text-body-secondary">(4.8 / 5)</span>
                            </div>
                            <span className="text-body-secondary">|</span>
                            <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold">
                                In Stock
                            </span>
                        </div>

                        <hr className="my-2 border-secondary opacity-25" />

                        <div className="my-3">
                            <span className="text-body-secondary small d-block">Price:</span>
                            <span className="fs-2 fw-bold text-primary">{product.price}</span>
                        </div>

                        <div className="mb-3">
                            <h6 className="fw-bold text-body mb-1">Quick Overview:</h6>
                            <p className="text-body-secondary small">{product.shortDesc}</p>
                        </div>

                        <div className="mb-4 p-3 bg-body-tertiary rounded-3 border">
                            <h6 className="fw-bold text-body mb-2">Description & Features:</h6>
                            <p className="text-body-secondary small mb-0">{product.fullDesc}</p>
                        </div>

                        {/* THE QUANTUTY  */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <span className="fw-semibold small">Quantity:</span>
                            <div className="btn-group border rounded" role="group">
                                <button 
                                    type="button" 
                                    onClick={handleDecrease} 
                                    className="btn btn-outline-secondary btn-sm px-3 fw-bold"
                                >
                                    -
                                </button>
                                <span className="btn btn-sm disabled text-body px-3 fw-bold bg-body-tertiary">
                                    {quantity}
                                </span>
                                <button 
                                    type="button" 
                                    onClick={handleIncrease} 
                                    className="btn btn-outline-secondary btn-sm px-3 fw-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="pt-2 border-top border-secondary opacity-75 mt-auto">
                            <div className="row g-2">
                                <div className="col-12 col-sm-6">
                                    <button
                                        type="button"
                                        onClick={handleAddToCart}
                                        className="btn btn-primary btn-lg w-100 fw-semibold fs-6 py-2 shadow-sm"
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <button className="btn btn-warning btn-lg w-100 fw-semibold fs-6 py-2 shadow-sm text-dark">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
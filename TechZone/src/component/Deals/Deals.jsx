import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const productsData = [
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

export default function Deals() {

    const { addToCart } = useContext(CartContext);


    const handleAddToCart = (product) => {
        // CHANS THE STRING TO NUMBER 
        const numericPrice = typeof product.price === 'string'
            ? parseFloat(product.price.replace('$', ''))
            : product.price;

        const productToAdd = {
            ...product,
            price: numericPrice
        };

        addToCart(productToAdd);
    };

    return (
        <section className="py-5 bg-body text-body rounded">
            <div className="container">
                {/* TITLE OF SECTION */}
                <h2 className="fw-bold mb-4 text-center text-md-start text-body">Best Deals</h2>

                {/* CONTAINER OF ALL */}
                <div className="row g-4 justify-content-center justify-content-md-start">
                    {productsData.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">

                            <div className="card h-100 shadow-sm border border-primary bg-body-tertiary text-body d-flex flex-column">

                                {/* TOUCH AREA TO GO TO DETAILS */}
                                <Link to={`/product-details/${product.id}`} className="text-decoration-none text-body">
                                    <img
                                        src={product.image}
                                        className="card-img-top object-fit-cover rounded-top"
                                        alt={product.title}
                                        style={{ height: '200px' }}
                                    />
                                    <div className="card-body pb-0">
                                        <h5 className="card-title fw-bold fs-6 text-body">{product.title}</h5>
                                        <p className="card-text mb-2 text-body-secondary small">{product.shortDesc}</p>
                                    </div>
                                </Link>

                                {/* BOTTOM BUTTON READ MORE & ADD TO CART */}
                                <div className="card-body pt-0 mt-auto d-flex flex-column">
                                    <div className="collapse mb-2" id={`productDesc-${product.id}`}>
                                        <div className="small text-body-secondary pt-2 border-top border-secondary opacity-50">
                                            {product.fullDesc}
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-link text-decoration-none p-0 mb-3 text-start fw-semibold small text-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#productDesc-${product.id}`}
                                        aria-expanded="false"
                                        aria-controls={`productDesc-${product.id}`}
                                    >
                                        Read More ▼
                                    </button>

                                    <span className="fs-5 fw-bold text-primary mb-2">{product.price}</span>

                                    {/* BUTTON TO ADD PRODUCT  */}
                                    <button
                                        type="button"
                                        onClick={() => handleAddToCart(product)}
                                        className="btn btn-primary mt-auto w-100 fw-semibold"
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
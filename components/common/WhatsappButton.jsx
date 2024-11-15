import React from 'react';

const WhatsAppButton = ({ product }) => {
    // Admin's WhatsApp number
    // const adminPhoneNumber = '918848824751';
    const adminPhoneNumber = '919995058761';

    // Prefill the message with product details, including a link to the product and additional info
    let productLink = `https://babyparadiseshop.netlify.app/product/${product.id}`;
    // productLink = `https://192.168.1.4:3000/product/${product.id}`;
    const message = `Hello! I'm interested and want to know more about the product: "${product.name}". \n\nCode: ${product.item_code}\n\nSale Price: ${product.retail_price}\n\n${product.description}\n\n ${productLink}`;

    const encodedMessage = encodeURIComponent(message);

    // WhatsApp link
    const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

    return (
        <div className='flex justify-center'>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', borderRadius: '20px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                Inquire via WhatsApp
            </a>
        </div>
    );
};

export default WhatsAppButton;

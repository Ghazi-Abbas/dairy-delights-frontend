export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '40px 20px',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                alignItems: 'start'
            }}>
                {/* Company Info */}
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '16px'
                    }}>
                        DairyDelight
                    </h3>
                    <p style={{
                        color: '#ccc',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        fontSize: '14px'
                    }}>
                        Fresh dairy products delivered to your doorstep. 
                        Quality you can taste, service you can trust.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <SocialIcon href="#" icon="📘" />
                        <SocialIcon href="#" icon="📷" />
                        <SocialIcon href="#" icon="🐦" />
                        <SocialIcon href="#" icon="💼" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        Quick Links
                        <span style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '0',
                            width: '30px',
                            height: '2px',
                            backgroundColor: '#007bff'
                        }}></span>
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <FooterLink href="#" text="Home" />
                        <FooterLink href="#" text="About Us" />
                        <FooterLink href="#" text="Products" />
                        <FooterLink href="#" text="Offers" />
                        <FooterLink href="#" text="New Arrivals" />
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        Customer Service
                        <span style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '0',
                            width: '30px',
                            height: '2px',
                            backgroundColor: '#28a745'
                        }}></span>
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <FooterLink href="#" text="Contact Us" />
                        <FooterLink href="#" text="Shipping Info" />
                        <FooterLink href="#" text="Returns" />
                        <FooterLink href="#" text="FAQ" />
                        <FooterLink href="#" text="Privacy Policy" />
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        Contact Info
                        <span style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '0',
                            width: '30px',
                            height: '2px',
                            backgroundColor: '#ff6b35'
                        }}></span>
                    </h4>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}>
                        <ContactItem 
                            icon="📞" 
                            text="+1 (555) 123-4567" 
                        />
                        <ContactItem 
                            icon="✉️" 
                            text="support@dairydelight.com" 
                        />
                        <ContactItem 
                            icon="📍" 
                            text="123 Dairy Street, Milk City, MC 12345" 
                        />
                        <ContactItem 
                            icon="🕒" 
                            text="Mon-Sun: 6:00 AM - 10:00 PM" 
                        />
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h4 style={{
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        position: 'relative'
                    }}>
                        Newsletter
                        <span style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '0',
                            width: '30px',
                            height: '2px',
                            backgroundColor: '#ffc107'
                        }}></span>
                    </h4>
                    <p style={{
                        color: '#ccc',
                        marginBottom: '15px',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}>
                        Subscribe to get special offers, free giveaways, and product updates.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            style={{
                                flex: '1',
                                padding: '12px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                outline: 'none',
                                minWidth: '0'
                            }}
                        />
                        <button style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            padding: '12px 20px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            transition: 'background-color 0.3s',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                maxWidth: '1200px',
                margin: '40px auto 0',
                paddingTop: '20px',
                borderTop: '1px solid #333',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '30px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <FooterLink href="#" text="Terms of Service" />
                    <FooterLink href="#" text="Privacy Policy" />
                    <FooterLink href="#" text="Cookie Policy" />
                    <FooterLink href="#" text="Sitemap" />
                </div>
                
                <p style={{
                    color: '#999',
                    fontSize: '14px',
                    margin: 0
                }}>
                    © {new Date().getFullYear()} DairyDelight. All rights reserved. | 
                    Made with ❤️ for fresh dairy lovers
                </p>

                {/* Payment Methods */}
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: '#999', fontSize: '14px' }}>We accept:</span>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <PaymentIcon text="💳" />
                        <PaymentIcon text="📱" />
                        <PaymentIcon text="🔗" />
                        <PaymentIcon text="🏦" />
                        <PaymentIcon text="📊" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Reusable Components
function FooterLink({ href, text }) {
    return (
        <li>
            <a href={href} style={{
                color: '#ccc',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s, transform 0.2s',
                display: 'inline-block'
            }}
            onMouseEnter={(e) => {
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
                e.target.style.color = '#ccc';
                e.target.style.transform = 'translateX(0)';
            }}>
                {text}
            </a>
        </li>
    );
}

function SocialIcon({ href, icon }) {
    return (
        <a href={href} style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            backgroundColor: '#333',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '18px',
            transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#333';
            e.target.style.transform = 'translateY(0)';
        }}>
            {icon}
        </a>
    );
}

function ContactItem({ icon, text }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            fontSize: '14px'
        }}>
            <span style={{ fontSize: '16px', marginTop: '2px' }}>{icon}</span>
            <span style={{ color: '#ccc', lineHeight: '1.4' }}>{text}</span>
        </div>
    );
}

function PaymentIcon({ text }) {
    return (
        <div style={{
            padding: '8px 12px',
            backgroundColor: '#333',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600'
        }}>
            {text}
        </div>
    );
}
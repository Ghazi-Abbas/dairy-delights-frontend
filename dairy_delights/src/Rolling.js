export default function Rolling(){
    return(
        <div style={{
            background: '#2c5aa0',
            color: 'white',
            padding: '8px 0',
            fontSize: '10px',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                position: 'relative'
            }}>
                <div style={{
                    display: 'inline-block',
                    animation: 'scrollText 30s linear infinite',
                    paddingLeft: '100%'
                }}>
                    <span>🎉 Welcome to DairyDelights - Fresh Dairy Everyday | </span>
                    <span style={{ margin: '0 20px' }}>🥛 Get 20% OFF on First Order | </span>
                    <span>🚚 Free Delivery on Orders Above ₹499 | </span>
                    <span>⭐ Premium Quality Dairy Products</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes scrollText {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    )
}
import "./About.css";

function About() {
    return (
        <main className="about-page">
            <section className="about-card">
                <h1>About TechZon</h1>

                <p>
                    Welcome to <strong>TechZon</strong>, your trusted destination
                    for the latest electronics and accessories. We aim to provide
                    high-quality products with competitive prices and a smooth
                    shopping experience.
                </p>

                <div className="about-features">
                    <div className="feature">
                        <span>🚚</span>
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable shipping across the country.</p>
                    </div>

                    <div className="feature">
                        <span>🛡️</span>
                        <h3>Secure Shopping</h3>
                        <p>Your orders and payments are always protected.</p>
                    </div>

                    <div className="feature">
                        <span>💎</span>
                        <h3>Quality Products</h3>
                        <p>Only carefully selected products from trusted brands.</p>
                    </div>
                </div>

                <p className="about-footer">
                    Thank you for choosing <strong>TechZon</strong>. We're always
                    working to make your shopping experience better.
                </p>
            </section>
        </main>
    );
}

export default About;
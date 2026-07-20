import "./contact.css";

function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-card">
                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you. If you have any questions,
                    suggestions, or need support, feel free to contact us.
                </p>

                <div className="contact-info">
                    <div className="contact-item">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>support@techzon.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📞</span>
                        <div>
                            <h3>Phone</h3>
                            <p>+20 100 123 4567</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h3>Address</h3>
                            <p>Cairo, Egypt</p>
                        </div>
                    </div>
                </div>


            </section>
        </main>
    );
}

export default Contact;
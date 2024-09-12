import Image from 'next/image';
import './style.css';

export default function Contact() {
    return (
        <main className="contact-container">
            <Image
                src="/images/contact.jpg"
                alt="background"
                layout="fill"
                objectFit="cover"
            ></Image>

            <div className="wrapper">
                <h1>Contact Us</h1>
                <div>
                    <form className="form">
                        <label>Name:</label>
                        <input type="text" name="name" />

                        <label>Phone:</label>
                        <input type="email" name="email" />

                        <label>Message:</label>
                        <textarea name="message"></textarea>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import './style.css';

export default function About() {
    return (
        <main className="about-container">
            <img src="/images/contact.jpg" alt="background"></img>

            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    we specialize in delivering reliable and efficient
                    electrical solutions for homes and businesses. With years of
                    experience, our team of licensed electricians is dedicated
                    to providing safe and quality service tailored to your
                    specific needs.
                </p>
                <h2>Why Choose Us?</h2>

                <p>
                    Licensed and Experienced Electricians Our team is fully
                    certified and trained to handle all types of electrical
                    projects, from simple repairs to complex installations.
                    Safety First We prioritize safety in every project, ensuring
                    that all installations and repairs meet the highest industry
                    standards. Affordable & Transparent Pricing We believe in
                    offering fair, upfront pricing with no hidden fees, so you
                    know exactly what to expect. Prompt & Reliable Service We
                    value your time and always strive to complete projects on
                    schedule, with minimal disruption to your daily life.
                </p>

                <h2>Our Services</h2>
                <div className="ul-wrapper">
                    <ul>
                        <li>Electrical Installations & Upgrades</li>
                        <li>Wiring & Rewiring</li>
                        <li>Lighting Design & Installation</li>
                        <li>Smart Home & Automation Solutions</li>
                        <li>Electrical Repairs & Troubleshooting</li>
                    </ul>

                    <a href="/contact" className="contact-button">
                        Click here to Contact Us
                    </a>
                </div>
            </div>
        </main>
    );
}

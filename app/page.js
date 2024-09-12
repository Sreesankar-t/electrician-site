/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="main">
            <div className="content">
                <Image
                    src="/images/bg2.jpeg"
                    alt="Description of the image"
                    layout="fill"
                    objectFit="fit"
                />
            </div>

            <Link href="/about">
                <div className="about" style={{ cursor: 'pointer' }}>
                    <h1>About</h1>
                    <img src="/images/person.png" />
                </div>
            </Link>

            <div className="service">
                <h1>Services</h1>
                <img src="/images/Service.jpeg" />
            </div>

            <div id="contact-me" className="contact">
                <span>
                    Empowering Homes, One Wire at a Time – Showcasing Expertise
                    in Electrical Solutions for a Brighter, Safer Tomorrow.
                </span>
                <p>
                    contact number : 11243424 <br />
                    email : me@gmail.com
                </p>
                <Image
                    src="/images/contact.jpg"
                    alt="Description of the image"
                    layout="fill"
                />
            </div>
        </main>
    );
}

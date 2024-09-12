/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import './style.css';

export default function Services() {
    return (
        <main className="container">
            <Image
                src="/images/contact.jpg"
                alt="background"
                layout="fill"
                objectFit="cover"
            ></Image>

            <div className="img">
                <Image
                    src="/images/person.png"
                    alt="work"
                    layout="fill"
                    objectFit="cover"
                ></Image>
            </div>

            <div className="content">
                {/* <ul>
                    <li>Wiring and Rewiring</li>
                    <li>Electrical Repairs</li>
                    <li>Lighting Installation</li>
                    <li>Smart Home Integration</li>
                    <li>Safety Inspections</li>
                </ul> */}
                <div className="content-wrapper">
                    <div className="list">
                        <img src="/images/wiring.png" alt="" />
                        <span>Wiring and Rewiring</span>
                    </div>

                    <div className="list">
                        <img src="/images/wiring.png" alt="" />
                        <span>Electrical Repairs</span>
                    </div>

                    <div className="list">
                        <img src="/images/wiring.png" alt="" />
                        <span>Lighting Installation</span>
                    </div>

                    <div className="list">
                        <img src="/images/wiring.png" alt="" />
                        <span>Smart Home Integration</span>
                    </div>

                    <div className="list">
                        <img src="/images/wiring.png" alt="" />
                        <span>Safety Inspections</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

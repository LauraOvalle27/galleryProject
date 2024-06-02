import React from "react";
import {Link} from 'react-router-dom'
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image5 from "./Image5";
import Image6 from "./Image6";
import Image8 from "./Image8";
import Image9 from "./Image9";
import Image10 from "./Image10";


const Navegation = () => {
    return(
        <div className="container mt4 father">
            <Link to="/photo1" className="links">
                <figure className="image-size">
                    <Image1/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
            <Link to="/photo2" className="links">
                <figure className="image-size">
                    <Image2/>
                    <figcaption>Folklore</figcaption>
                </figure >
            </Link>
            <Link to="/photo5" className="links">
                <figure className="image-size">
                    <Image5/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
            <Link to="/photo6" className="links">
                <figure className="image-size">
                    <Image6/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
            <Link to="/photo8" className="links">
                <figure className="image-size">
                    <Image8/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
            <Link to="/photo9" className="links"> 
                <figure className="image-size">
                    <Image9/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
            <Link to="/photo10" className="links">
                <figure className="image-size">
                    <Image10/>
                    <figcaption>Folklore</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegation
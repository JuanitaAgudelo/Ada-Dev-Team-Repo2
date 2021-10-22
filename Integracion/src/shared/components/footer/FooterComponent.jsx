import React, { Fragment } from "react";
import Logo from "./img/índice.jpg";
import MisionTic from "./img/logoMisionTic2022UdeA.png";
import './Footerstyle.css'
function FooterComponent() {
    return (
        <Fragment>
            <div id="content-wrap">
            </div>
            <footer>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <img class='imagenEquipo' src={Logo} alt="logo Ada Team" />
                        </div>
                        <div class="col">
                            <div>Ada-Dev-Team</div>
                            <div>MisionTic 2022 UdeA</div>
                            <div>2021</div>
                        </div>
                        <div class="col">
                            <img class='imagenMintic2022' src={MisionTic} alt="logoMisionTic2022UdeA" />
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
export default FooterComponent;
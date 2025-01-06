import React from "react";
export default function Subscribe() {
    return (
        <div>
            <div classNameName="container-fluid subscribe py-5">
            <div classNameName="container text-center py-5">
            <div classNameName="mx-auto text-center" style={{maxwidth: "900px"}}>
                <h5 classNameName="subscribe-title px-3">Subscribe</h5>
                <h1 classNameName="text-white mb-4">Our Newsletter</h1>
                    <p classNameName="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div classNameName="position-relative mx-auto">
                    <input classNameName="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                    <button type="button" classNameName="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
import React from "react";
export default function Subscribe() {
    return (
      <div>
        <div className="container-fluid subscribe py-5">
          <div className="container text-center py-5">
            <div className="mx-auto text-center" style={{ maxwidth: "900px" }}>
              <h5 className="subscribe-title px-3">Subscribe</h5>
              <h1 className="text-white mb-4">Our Newsletter</h1>
              <h5 className="text-white mb-5">
                Discover SriLanka Like Never Before!
              </h5>
              <p className="text-white mb-5">
                Sign up for our newsletter to stay informed about the latest
                tours, unique experiences, and travel insights that will make
                your Sri Lanka trip unforgettable.<br></br> Don’t miss out on your next
                adventure!
              </p>
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
import React from "react";
import plane from "../assets/plane.png";

const Contact = () => {
  return (
    <section class="contact uf-contact-form-01 mx-auto">
      <div class="container">
        <div class="row justify-content-center bg-white rounded-4 shadow py-5 gx-5 px-lg-5">
          <div class="col-md-6 text-center">
            <h2 class="uf-ct-01-text-primary text-uppercase fw-bold">
              Contact Us
            </h2>
            <p>
              Or reach out manually to
              <a
                href="gagandeepsingh05668gmail.com"
                class="text-decoration-none"
              >
                Gagandeepsingh05668@gmail.com
              </a>
            </p>
            <img
              src={plane}
              alt=""
              class="uf-img-contact-form-01 pt-4 d-md-block d-none"
            />
          </div>
          <div class="col-md-6">
            <form>
              <div class="mb-3">
                <label for="uf-imail" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="uf-imail"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text uf-ct-01-text-primary">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="uf-iname" class="form-label">
                  Your name
                </label>
                <input type="text" class="form-control" id="uf-iname" />
              </div>
              <div class="mb-3">
                <label for="uf-itextarea" class="form-label">
                  Your message
                </label>
                <textarea
                  class="form-control"
                  id="uf-itextarea"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-lg uf-ct-01-btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

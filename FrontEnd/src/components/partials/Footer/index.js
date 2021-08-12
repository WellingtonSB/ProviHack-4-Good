import React from "react";
import { FooterArea } from "./styled";

const Footer = () => {
  return (
    <FooterArea>
      <footer className="text-center text-lg-start bg-light text-muted my-5">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Nos acompanhe nas redes sociais:</span>
          </div>
           <i class="fa fa-twitter" aria-hidden="true"></i>
          <div>
            
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Lacrei
                </h6>
                <p>
                A plataforma de inclusão social, jurídica e de empregos LGBTQIAPN+.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sites</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Lacrei Saúde
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Lacrei Jurídico
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Lacrei Oportunidade
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                <p>
                    contato@portallacrei.com.br
                </p>

              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
        >
          © 2021 Copyright: Lacrei Oportunidades
          <a className="text-reset fw-bold" href="#">
            Termos e condições de Uso
          </a>
        </div>
      </footer>
    </FooterArea>
  );
};
export default Footer;

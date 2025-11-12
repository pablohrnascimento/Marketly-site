import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>
           Desde a criação da sua loja até o acompanhamento das vendas, a Marketly oferece soluções completas:
Criação de vitrines digitais personalizadas
Integração com meios de pagamento e entrega
Relatórios automáticos e controle de desempenho
Suporte humano e técnico dedicado
Transforme sua ideia em um negócio digital de sucesso.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

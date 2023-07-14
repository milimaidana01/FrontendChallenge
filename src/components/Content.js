import React from "react";
import Header from "./Header";
import Card from "./Card";
import "./styles.css";
import Weather from "./Weather";

function Content() {
  const cardData = [
    {
      title: "Nuevo Ejercicio",
      subtitle: "Generar el nuevo Ejercicio fiscal para formular el Presupuesto."
    },
    {
      title: "Anteproyecto",
      subtitle: "Administrar la información de Anteproyectos."
    },
    {
      title: "Clasificadores Primarios",
      subtitle: "Administrar la información de los clasificadores primarios.",
      extraSubtitles: [
        "Clasificador Institucional",
        "Estructura Programática",
        "Recursos por Rubro",
        "Gastos por Objeto",
        "Fuentes de Financiamiento"
      ]
    },
    {
      title: "Clasificadores Agregados",
      subtitle: "Administrar la información de los Clasificadores Agregados.",
      extraSubtitles: [
        "Recursos por Origen y Procedencia",
        "Recursos por Carácter Económico",
        "Gastos por Finalidad y Función",
        "Gastos por Carácter Económico"
      ]
    },
    {
      title: "Reglas Presupuestarias",
      subtitle: "Administrar la información de Reglas Presupuestarias para la etapa de Formulación y Programación."
    },
    {
      title: "Categorías Programáticas",
      subtitle: "Administrar la información de Categorías Programáticas."
    },
    {
      title: "Unidades Ejecutoras",
      subtitle: "Administrar la información de Categorías Programáticas."
    },
    {
      title: "Causas de Desvíos",
      subtitle: "Administrar la información de las Causas Operativas, Financieras y conclusiones.",
      extraSubtitles: [
        "Financieras",
        "Operativas",
        "Conclusiones",
      ]
    },
    {
      title: "Tablas Refenciales",
      subtitle: "Administrar la información de las Tablas Referenciales del Módulo Presupuesto.",
      extraSubtitles: [
        "Unidades de Medida",
        "Gastos Prioritarios",
        "Motivos Reglas Presupuestarias",
      ]
    },
  ];

  const firstColumnCards = cardData.slice(0, 5);
  const secondColumnCards = cardData.slice(5); 

  return (
    <div className="content">
      <Header></Header>
      <div className="title">Configuración</div>
      <div className="columnsContainer">
        <div className="columnLeft">
          {firstColumnCards.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              extraSubtitles={data.extraSubtitles || []}
            />
          ))}
        </div>
        <div className="columnRight">
          {secondColumnCards.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              extraSubtitles={data.extraSubtitles || []}
            />
          ))}
        </div>
      </div>
      <Weather></Weather>
    </div>
  );
}

export default Content;

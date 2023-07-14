import InfoCard from "./InfoCard";
import Sections from "./Sections";
import Subsections from "./Subsections";
import "./styles.css";

const sectionsData = [
  {
    name: "Presupuesto",
    subSections: [
      "Configuración",
      "Formulación presupuestaria",
      "Modificación Presupuestaria",
      "Programación Física",
      "Reportes"
    ]
  },
  "CAS",
  "Planificación",
  "Contrataciones",
  "Portal",
  "Contabilidad",
  "Tesorería",
  "Bienes Físicos",
  "Inversión Pública",
  "Crédito Público",
  "Ingresos Públicos",
  "Recursos Humanos"
];

function Sidebar() {
  return (
    <div className="sidebar">
      <InfoCard />
      <img className="logo" src="https://i.ibb.co/yn1SxRt/Group-1553.png" alt="Logo" />
      <Sections sections={sectionsData} />
    </div>
  );
}

export default Sidebar;
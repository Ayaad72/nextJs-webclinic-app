import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faMale,
  faFemale,
  faMagnifyingGlass,
  faHeartbeat,
  faChild,
  faVial,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
const icons = {
  overview: faStethoscope,
  mensHealth: faMale,
  womensHealth: faFemale,
  checkups: faMagnifyingGlass,
  chronicDiseases: faHeartbeat,
  childHealth: faChild,
  tests: faVial,
  mentalHealth: faBrain,
};
const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[292px] h-[292px] flex flex-col items-center justify-between">
      <FontAwesomeIcon icon={icons[icon]} size="2x" className="text-gray-600" />
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
      <button className="mt-4 bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-100">
        Learn More
      </button>
    </div>
  );
};
export default Card;

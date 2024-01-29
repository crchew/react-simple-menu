import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

library.add(faCircle);

export default function Allergen({color, allergenName}) {
    return (
        <div>
            <div className="d-flex flex-row">
                <div className="m-2">
                    <FontAwesomeIcon icon={faCircle} style={{ color: color, padding: '3px'}} />
                    <h6 className="d-inline-block ml-2 text-justify">{allergenName}</h6>
                </div>
            </div>
        </div>
    );
  }

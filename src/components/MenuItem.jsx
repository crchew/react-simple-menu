import NutritionalInfo from "./NutritionalInfo";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

library.add(faCircle);

export default function MenuItem({name, price, allergens, nutritionInfo}) {
  const allergenColorMap = {
    Wheat: 'lightsalmon',
    Soy: 'purple',
    Dairy: 'aqua',
    Egg: 'yellow',
    Nut: 'goldenrod',
  };

  // Function to get allergen colors based on allergen names
const getAllergenColors = (allergens) => {
  return allergens.map((allergen, index) => {
    const allergenName = allergen.allergenName;
    return { color: allergenColorMap[allergenName] || 'gray', key: index };
  });
};

    return (
      
      <>
        <p>
          <strong>{name}</strong> | {price} |
          {allergens && allergens.length > 0 && (
          <>
            {getAllergenColors(allergens).map((allergen) => (
              <FontAwesomeIcon
              key={allergen.key}
              icon={faCircle}
              className='align-bottom'
              style={{ color: allergen.color, padding: '3px',}}
            />
            ))}
          </>
        )}
        </p>
        <NutritionalInfo nutritionInfo={nutritionInfo}/> 
      </>
    )
}


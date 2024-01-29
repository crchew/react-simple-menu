import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Category from './components/Category';
import MenuItem from './components/MenuItem';
import jollieFriedChickenImage from './assets/fried-chicken-unsplash.jpg';
import jollieApplePie from './assets/apple-pie-unsplash.jpg';
import jollieIceCream from './assets/ice-cream-unsplash.jpg';
import Allergen from './components/Allergens';

const friedChicken = (
  <>
    <MenuItem 
      name={"2pc Fried Chicken Set"} 
      price={"RM 10.00"}
      allergens={[
        { allergenName: "Wheat" },
        { allergenName: "Soy" }
      ]}
      nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
    />
   
    <MenuItem 
      name={"6 piece nugget"} 
      price={"RM 6.00"}
      allergens={[
        { allergenName: "Wheat" },
        { allergenName: "Soy" }
      ]}
      nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }}
    />
  </>
);

const desserts = (
  <>
    <MenuItem
      name={"Ice Cream"}
      price={"RM 5.00"}
      allergens={[
        { allergenName: "Egg" },
        { allergenName: "Dairy" },
        { allergenName: "Nut" }
      ]}
      nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }}
    />
    <MenuItem
      name={"Apple Pie"}
      price={"RM 2.00"}
      allergens={[
        { allergenName: "Wheat" },
        { allergenName: "Soy" }
      ]}
      nutritionInfo={{ calories: 270, protein: 1, carbs: 43, fat: 10 }}
    />
  </>
);

function App() {

  return (
      <div className="container mt-4 border-dark">
        <div className="row">
          {/* Left Column for Menu */}
          <div className="col-md-6">
            <h1 className="bg-dark text-warning rounded p-2">Jollie Fried Chicken</h1>
            <Category title={"Fried Chicken"} foods={friedChicken} />
            <Category title={"Desserts"} foods={desserts} />
            
            <div className="d-flex flex-row">
              <h3>Allergens</h3>
              <Allergen color="lightsalmon" allergenName="Wheat" />
              <Allergen color="purple" allergenName="Soy" />
              <Allergen color="aqua" allergenName="Dairy" />
              <Allergen color="yellow" allergenName="Egg" />
              <Allergen color="goldenrod" allergenName="Nut" />
            </div>
          </div>

          {/* Right Column for Images */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-4">
            <img src={jollieFriedChickenImage} alt="Jollie Fried Chicken" className='rounded-circle food-image p-2'/>
            <img src={jollieApplePie} alt="Jollie Apple Pie" className='rounded-circle food-image p-2'/>
            <img src={jollieIceCream} alt="Jollie Ice Cream" className='rounded-circle food-image p-2'/>
          </div>
        </div>
      </div>
)
}

export default App

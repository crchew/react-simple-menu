export default function NutritionalInfo({nutritionInfo}) {
    return (
      <div className="d-flex flex-row p-2">
        <p className="p-2">Calories: {nutritionInfo?.calories} kcal</p>
        <p className="p-2">Protein: {nutritionInfo?.protein} kcal</p>
        <p className="p-2">Carbs: {nutritionInfo?.carbs} kcal</p>
        <p className="p-2">Fat: {nutritionInfo?.fat} kcal</p>
      </div>
    );
  }
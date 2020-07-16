import React from 'react'

const MealPlanContext = React.createContext({
    savedMealPlans: [],
    deleteMeal: () => {},
    deleteMealPlan: () => {},
    getMealPlans: () => {}
})


export default MealPlanContext;
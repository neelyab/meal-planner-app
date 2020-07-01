import React from 'react'

const MealPlanContext = React.createContext({
    savedMealPlans: [],
    deleteMeal: () => {},
    deleteMealPlan: () => {}
})


export default MealPlanContext;
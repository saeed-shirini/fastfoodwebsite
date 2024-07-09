function fastFoodReducer(state, action) {
  switch (action.type) {
    case "GET_FAST_FODS": {
      return {
        fastFoods: action.fastFoods,
        isLoading: action.isLoading,
      };
    }
  }
}
export default fastFoodReducer;

const initState = {
    tasks: [
      {name:'salima',age:'26',address:' salima@gmail.com'},
      {name:'imène',age:'30',address:' imene@yahoo.fr'},
      {name:'fatma',age:'33',address:' fatma@gmail.com'}],
      text: "",
  selected: undefined
     
  };
  
  const setPersist = tasks =>
  window.localStorage.setItem("todos2", JSON.stringify(tasks));

export const Userreducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_ALL":
      setPersist([]);
      return { ...state, tasks: [], text: "" };
    default:
      return state;


      case "DELETE_TODO":
        const todo3 = state.tasks.filter((todo, i) => i !== action.payload);
        setPersist(todo3);
        return {
          ...state,
          tasks: todo3
        };
        
  }
};


    
  
  export default Userreducer ;
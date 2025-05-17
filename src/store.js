export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters:[],

    planets:[],

    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_characters' :
      return{
        ...store,
        characters: action.payload
      }

    case 'set_planets' :
      return{
        ...store,
        planets: action.payload
      }

      case 'add_favorites':
        const {payload} = action
        return{
          ...store,
          favorites: store.favorites.includes(payload) ?
          store.favorites.filter((item)=>item._id!=payload._id) :
          [...store.favorites,action.payload]

        }
      case 'delete_favorite':
        return{
          ...store,
          favorites: store.favorites.filter((item)=>item._id!=action.payload._id)
        }

    default:
      throw Error('Unknown action.');
  }    
}

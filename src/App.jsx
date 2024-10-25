import { useReducer } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'antd'
import UsersItem from './components/UsersItem'
import { useFetch } from './hook/useFetch'


function reducer(state, action) {
  switch (action.type) {
    case "liked":
      action.payload.isLiked = true
      if (!state.liked.includes(action.payload)) {
        return {
          liked: [...state.liked, action.payload],
          saved: state.saved
        }
      }
      else {
        return {
          liked: state.liked,
          saved: state.saved
        }
      }
    default:
      return {
        liked: state.liked,
        saved: state.saved
      }
  }
}

const intialState = {
  liked: [],
  saved: [],
}


function App() {
  const { users } = useFetch("/users")
  const [userData, setUserData] = useState([])
  const [products, dispatch] = useReducer(reducer, intialState)
  

  useEffect(() => {
    setUserData(users)
  }, [users])

  return (
    <>
      <div className='flex p-5  items-center space-x-5'>
        <Button size='large' onClick={() => setUserData(products.liked)}>Liked ({products.liked.length})</Button>
        <Button size='large'>Saved (0)</Button>
      </div>
      <div className='p-5 flex justify-between flex-wrap gap-10'>
        {userData ? userData.map(item => <UsersItem handleLikeBtnClick={() => dispatch({ type: "liked", payload: item })} dispatch={dispatch} item={item} key={item.id} />) : ""}
      </div>
    </>
  )
}

export default App

import React,{useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList'


function App() {

  const [userList,setUserList] = useState([])

  const handleUsers = (user) => {
    setUserList(prev => {
      const original = [...prev]
      original.unshift({...user,key:`${user.name}${Math.random()}`})
      return original
    })
  }


  return (
    <div>
      <AddUser getUser={handleUsers}/>
      { userList.length > 0 && <UserList users={userList}/>}
    </div>
  );
}

export default App;

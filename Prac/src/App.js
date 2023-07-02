import React,{useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList'


function App() {

  const [userList,setUserList] = useState([])

  const handleUsers = (user) => {
    setUserList(prev => {
      return [...prev,user]
    })
  }

  const deleteUser = (key) => {
    setUserList(prev => {
      const original = [...prev];
      return original.filter(e=>e.key !== key)
    })
  }

    return (
      <div>
        <AddUser getUser={handleUsers}/>
        {userList.length > 0 && <UserList getUserKey={deleteUser} users={userList}/>}
      </div>
  );
}

export default App;

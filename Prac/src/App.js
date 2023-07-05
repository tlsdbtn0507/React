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
      //div의 중첩(div soup)을 피하기 위해 div 대신 <>와</>이나 React.Fragment를 사용 할수 있음
      <>
        <AddUser getUser={handleUsers}/>
        {userList.length > 0 && <UserList getUserKey={deleteUser} users={userList}/>}
      </>
  );
}

export default App;

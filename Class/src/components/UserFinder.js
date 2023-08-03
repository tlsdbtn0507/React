import { Component } from "react";

import Users from "./Users";
import classes from "../Css/UserFinder.module.css";
import ErrBound from "./ErrBound";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    // https로 요청을 받을때 처음엔 빈 배열이고 요청이 도착하고 나서 받은 데이터를 state에 넣는 예시
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prev, cur) {
    if (cur.searchTerm !== this.state.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrBound>
          <Users users={this.state.filteredUsers} />
        </ErrBound>
      </>
    );
  }
}

export default UserFinder;

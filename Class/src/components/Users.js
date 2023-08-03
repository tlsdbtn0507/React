import { Component, useState } from "react";
import User from "./User";

import classes from "../Css/Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      test: "test",
    };
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
    //this.state.showUser = !this.state.showUser 라던가
    //this.setState()에 변경하고자 할 값만 넣으면 안됨 왜냐하면 constructor의 this.state에 넣어야 할게
    //User 컴포넌트의 모든 state를 객체로 넣어야 하기 때문에 toggleUsersHandler에 변경하고자 할 값만 넣는
    //다면 그 값이 아닌 다른값 (에:this.state의 test)이 없어지고 변경할 값만 덮어씌워지기 떄문임
    //그래서 변경함수를 넣고 변경할 값만 담은 객체를 반환해야함
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) throw new Error("no result");
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/user.action";
class UserAdmin extends Component {
  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row">{user.taiKhoan}</th>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.matKhau}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <i typeof="button" className="fas fa-edit mr-2"></i>

            <i typeof="button" className="far fa-trash-alt"></i>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <h1>Danh Sách Người Dùng</h1>
        <button className="btn btn-success">Add User +</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tài khoản</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số ĐT</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">MLoai ND</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </>
    );
  }
  componentDidMount = () => {
    //call API
    this.props.dispatch(getUserList());
  };
}
const mapStateToProps = (state) => {
  return {
    userList: state.usersReducers.userList,
  };
};
export default connect(mapStateToProps)(UserAdmin);

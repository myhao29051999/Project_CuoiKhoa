import React, { Component } from "react";

import { connect } from "react-redux";
import "./movie.css";
import dateFormat from "date-format";
import { getMovies_asyc } from "../../redux/actions/ShowMoviesAction";

class MovieAdmin extends Component {
  renderMovieList = () => {
    return this.props.movies.map((movie, index) => {
      return (
        <tr key={index}>
          <th scope="row">{movie.maPhim}</th>
          <td>{movie.tenPhim}</td>
          <td>{movie.biDanh}</td>
          <td className="trailer">{movie.trailer}</td>
          <td>
            <img className="img" src={movie.hinhAnh}></img>
          </td>
          <td>{movie.moTa}</td>
          <td>{movie.maNhom}</td>
          <td>
            {dateFormat("yyyy/MM/dd hh:mm", new Date(movie.ngayKhoiChieu))}
          </td>
          <td>{movie.danhGia}</td>
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
        <h1>Danh Sách Phim</h1>
        <button className="btn btn-success">Add Film +</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="idPhim">
                MP
              </th>
              <th scope="col" className="tenPhim">
                Tên phim
              </th>
              <th scope="col">Bí danh</th>
              <th scope="col">Trailer</th>
              <th scope="col">Hình</th>
              <th scope="col">Mô tả</th>
              <th scope="col">MN</th>
              <th scope="col">NKC</th>
              <th scope="col">ĐG</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderMovieList()}</tbody>
        </table>
      </>
    );
  }
  componentDidMount = () => {
    //call API
    this.props.dispatch(getMovies_asyc());
  };
}
const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducers.movies,
  };
};
export default connect(mapStateToProps)(MovieAdmin);

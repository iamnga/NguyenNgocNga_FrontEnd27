import React, { Component } from 'react';
import Ghe from './Ghe';
import GheDaChon from './GheDaChon';

export default class BaiTapDatVe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mangGheDaChon: []
    }
  }

  mangGhe = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: true }
  ];


  mangGheDaChon = [];


  renderGheXe = (mangGhe, mangGheDaChon) => {
    return mangGhe.map((ghe, index) => {
      return (
        <div className="col-3 text-center p-2" key={index}>
          <Ghe ghe={ghe} gheDaChon={this.gheDaChon} mangGheDaChon={mangGheDaChon} />
        </div>
      )
    })
  }

  gheDaChon = (soGhe) => {
    let checkDaChon = this.mangGheDaChon.findIndex(x => x.SoGhe === soGhe);
    let checkDaDat = this.mangGhe.findIndex(x => x.SoGhe === soGhe && x.TrangThai === true);
    if (checkDaChon > -1 || checkDaDat > -1) {
      return
    }
    let ghe = this.mangGhe.find(x => x.SoGhe === soGhe);
    this.mangGheDaChon.push(ghe);
    this.setState({
      mangGheDaChon: this.mangGheDaChon
    })
  }

  huyChon = (soGhe) => {
    let ghe = this.mangGheDaChon.findIndex(x => x.SoGhe === soGhe);
    this.mangGheDaChon.splice(ghe, 1);
    this.setState({
      mangGheDaChon: this.mangGheDaChon
    })
  }

  render() {
    let imgDriver = "../../img/driver.png";
    let imgTicket = "../../img/ticket-collector.png";
    return (
      <div className="w-100">
        <div className="bg-dark p-3">
          <h3 className="text-center text-warning proFont">HỆ THỐNG ĐẶT VÉ XE BUÝT THÔNG MINH - CYBERBUS</h3>
          <h5 className="text-center text-white proFont">Một sản phẩm của tập đoàn CYBERSOFT</h5>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-6 bgBuyt">
              <div className="row">
                <div className="col-6 text-left">
                    <img src={imgDriver} className="img img-fluid w-50"/>
                    <p>Bác tài</p>
                </div>
                <div className="col-6 text-right">
                    <img src={imgTicket} className="img img-fluid w-50"/>
                    <p>Chị soát vé</p>
                </div>
              </div>
              <div className="row">
                {this.renderGheXe(this.mangGhe, this.state.mangGheDaChon)}
              </div>
            </div>
            <div className="proFont col-6 text-center">
              <h4 className="">DANH SÁCH GHẾ ĐÃ ĐẶT ({this.state.mangGheDaChon.length})</h4>
              <GheDaChon mangGheDaChon={this.state.mangGheDaChon} huyChon={this.huyChon} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

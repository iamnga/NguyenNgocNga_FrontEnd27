import React, { Component } from 'react'

export default class Ghe extends Component {

    chonGhe = (soGhe) => {
        this.props.gheDaChon(soGhe);
    }

    datTrangThai = () => {
        let img = "../../img/seat.png";
        let imgRed = "../../img/seatRed.png";
        let imgGreen = "../../img/seatGreen.png";

        if(this.props.mangGheDaChon.findIndex(x=> x.SoGhe === this.props.ghe.SoGhe) > -1){
            return imgGreen;
        }
        else if (this.props.ghe.TrangThai) {
            return imgRed;
        }
        else{
            return img;
        }
    }

    render() {
        let {SoGhe} = this.props.ghe;
        return (
            <div style={{cursor: 'pointer'}}  onClick={() => this.chonGhe(SoGhe)}>
                <img src={this.datTrangThai()} className="img img-fluid w-50"></img>
                <p>Ghế {SoGhe}</p>
            </div>
        )
    }
}

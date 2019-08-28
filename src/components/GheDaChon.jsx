import React, { Component } from 'react'

export default class GheDaChon extends Component {

    tongTien = 0;

    renderGheDaChon = () => {
        this.tongTien = 0;
        return this.props.mangGheDaChon.map((ghe, index) => {
            this.tongTien = this.tongTien + ghe.Gia
            return(
                <p key={index}>Qúy khách đã chọn ghế số <span className="text-success">{ghe.SoGhe}</span> với giá <span className="text-success">${ghe.Gia}</span> - <span className="text-danger"  style={{cursor: 'pointer'}} onClick={() => this.props.huyChon(ghe.SoGhe)}>[Hủy chọn]</span></p>
            );
        })
    }

    renderTongTien = () => {
        if (this.tongTien>0){
             return (
             <div>
                <hr/>
                <h4>Tổng tiền: <span className="text-danger">${this.tongTien}</span></h4>
            </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderGheDaChon()}
                {this.renderTongTien()}
            </div>
        )
    }
}

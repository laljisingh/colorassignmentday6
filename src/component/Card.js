import React from "react";

function Card({ data }) {
    const stl = {
        display: "flex",
        flexDirection: "row",
        width: "140px",
        height: "160px",
        alignItem: "center",
        justifyContent: "center",
        border: "1px solid red",
        flexWrap: "wrap",
        margin: "25px 10px",
    };
    const color = {
        backgroundColor: data.color,
        border: "1px solid red",
        width: "140px",
        height: "160px",
    };
    const header = {
        backgroundColor: "white",
        width:"140px",
        border: "1px solid red",
        display:"flex",
        flexDirection:"column",
        alignItem:"center",
        justifyContent:"center",
        fontSize:"15px",
        fontWeight:"500"
    };
    return (
        <div style={stl}>
            <div style={color}></div>
            <div style={header}>
                <div >{data.code}</div>
                <div>{data.name}</div>
            </div>
        </div>
    );
}
export default Card;

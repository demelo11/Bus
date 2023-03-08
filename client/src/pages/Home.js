import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        //may be different
        const response = await axios.get("http://localhost:8000/api/products/allBusses");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, [])


    const deleteBus = (id) => {
  if(window.confirm("Confirm")){
    axios.delete(`http://localhost:8000/api/products/${id}`);
    toast.success("Bus Deleted");
    setTimeout(() => loadData(), 500);
  }
}


  return (


    <div style={{marginTop: "150px"}}>
          <h2>Ônibus</h2>
          <Link to="/add">
          <button className="btn btn-add">Add</button>
          </Link>
          
      <table className= "styled-table">
        <thead>
            <tr>
                <th style={{textAlign: "center"}}>Id</th>
                <th style={{textAlign: "center"}}>Marca</th>
                <th style={{textAlign: "center"}}>Chassi</th>
                <th style={{textAlign: "center"}}>Carroceira</th>
                <th style={{textAlign: "center"}}>AnoMod</th>
                <th style={{textAlign: "center"}}>AnoFab</th>
                <th style={{textAlign: "center"}}>Cor</th>
                <th style={{textAlign: "center"}}>#Lugares</th>
                <th style={{textAlign: "center"}}>actions</th>
            
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) =>{
                return(
                    <tr key={item.id}>
                        <td scope = "row">{index+1}</td> 
                        <td>{item.marca}</td>
                        <td>{item.chassi}</td>
                        <td>{item.carroceria}</td>
                        <td>{item.anoMod}</td>
                        <td>{item.anoFab}</td>
                        <td>{item.cor}</td>
                        <td>{item.quantidadeLugares}</td>
                      
                        <td>
                            <Link to={`/update/${item.id}`}>
                            <button className="btn btn-edit">Edit</button>
                            </Link>
                            <button className="btn btn-delete" onClick={() => deleteBus(item.id)}>Delete</button>
                           
                        </td>
                     </tr>
            )
            
                })}
        </tbody>
      </table>
    </div>
  )
}

export default Home;


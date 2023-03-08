import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "./Add.css";
import axios  from 'axios';
import {toast} from "react-toastify";

const initialState = {
    marca: "",
    chassi: "",
    carroceira: "",
    anoMod: "",
    anoFab: "",
    cor: "",
    quantidadeLugares: "",
};

const Add = () => {
    const [ state, setState] = useState(initialState);
    const {  marca, chassi, carroceria, anoMod, anoFab, cor,quantidadeLugares } = state;
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
     axios.get(`http://localhost:8000/api/products/${id}`).then((resp) => setState({...resp.data}));
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!marca || !chassi || !carroceria){
            toast.error("Please provide a value");
        }else{
            if(!id){
            axios.post("http://localhost:8000/api/products/addBus",{
                 marca,
                 chassi,
                 carroceria,
                 anoMod,
                 anoFab,
                 cor,
                 quantidadeLugares
            }).then(() => {
               setState({ marca: "", chassi: "", carroceria: "", anoMod: "", anoFab: "", cor: "", quantidadeLugares: "",}) 
            }).catch((err) => toast.error(err.response.data));
            toast.success("Bus added successfully")
            }else{
                 axios.put(`http://localhost:8000/api/products/${id}`,{
                 marca,
                 chassi,
                 carroceria,
                 anoMod,
                 anoFab,
                 cor,
                 quantidadeLugares
            }).then(() => {
               setState({ marca: "", chassi: "", carroceria: "", anoMod: "", anoFab: "", cor: "", quantidadeLugares: "",}) 
            }).catch((err) => toast.error(err.response.data));
            toast.success("Bus updated successfully")
            }
           

            setTimeout(() => {
                navigate("/")
            })
        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name]:value});
    };

  return (
    <div style={{marginTop : "100px"}}>
        <form
        style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor="marca">Marca</label>
            <input
            type= "text"
            id="marca"
            name="marca"
            value={marca || ""}
            onChange={handleInputChange}
           />


         <label htmlFor="chassi">Chassi</label>
            <input
            type= "text"
            id="chassi"
            name="chassi"
            value={chassi || ""}
           onChange={handleInputChange}
           />

         <label htmlFor="carroceria">Carroceira</label>
            <input
            type= "text"
            id="carroceria"
            name="carroceria"
            value={carroceria|| ""}
            onChange={handleInputChange}
           />

         <label htmlFor="anoMod">Ano Mod</label>
            <input
            type= "text"
            id="anoMod"
            name="anoMod"
            value={anoMod|| ""}
            onChange={handleInputChange}
           />


         <label htmlFor="anoFab">Ano Fab</label>
            <input
            type= "text"
            id="anoFab"
            name="anoFab"
            value={anoFab|| ""}
            onChange={handleInputChange}
           />



         <label htmlFor="cor">Cor</label>
            <input
            type= "text"
            id="cor"
            name="cor"
            value={cor|| ""}
            onChange={handleInputChange}
           />

        
         <label htmlFor="quantidadeLugares">Lugares</label>
            <input
            type= "text"
            id="quantidadeLugares"
            name="quantidadeLugares"
            value={quantidadeLugares|| ""}
            onChange={handleInputChange}
           />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to ="/"> 
        <input type="button" value="Go back"/>
        </Link>
        </form>
  
    </div>
  )
}

export default Add

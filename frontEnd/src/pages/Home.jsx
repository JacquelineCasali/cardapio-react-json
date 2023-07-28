import { useEffect, useState } from "react";
// chamando o banco de dados
import {api } from "../services/api"

// // importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Home() {
  const [produtos,setProdutos]=useState([])
//   chamando o metodo get 
  useEffect(()=>{
api.get('/produtos').then((response)=>{
    console.log(response)
    setProdutos(response.data)
})
  },[])
  
    return (
        <div>
              <HelmetProvider>
        <Helmet title="Cardápio" />
      </HelmetProvider>
      
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-150 bg-white rounded p-3 ">
          <h2> Cardápio</h2>
     
          <table className="table">
            <thead>
              <tr>
            
                <th>Nome</th>
                <th>Descrição do Produto</th>
                <th>Preço</th>
             
              </tr>
            </thead>
            <tbody>
              {/* map mostra todos os resultados */}
              {produtos?.map((produto, index) => {
                return (
                  <tr key={index}>
                    <td> {produto.nome}</td>
                    <td> {produto.descricao}</td>
                    <td> R$ {produto.preco}</td>
                
                   
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
     
      </div>

      </div>



    )



}

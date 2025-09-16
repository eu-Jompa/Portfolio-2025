import React, {useState} from 'react';
import style from './Contato.module.css';
import axios from 'axios';

const Contato = () => {
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [mensagem,setMensagem] = useState('');

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await axios.post('porfolio-backend-zeta.vercel.app/api/contato', {
                nome,
                email,
                mensagem
            });
            alert('Contato enviar com sucesso!')
        }
        catch(error){
            alert("Erro ao enviar a mensagem");
            console.error(error);
        }
        

    }

    return (
        <div className={style.container}>
            <h2>Entre em<span> Contato</span></h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Seu nome' onChange={(e)=>setNome(e.target.value)}/>
                <input type="email" placeholder='Seu email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Escreva sua mensagem' onChange={(e)=>setMensagem(e.target.value)}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Contato





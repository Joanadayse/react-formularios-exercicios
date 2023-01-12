import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from "../Hooks/UseForms"

function MainPage() {

  const [form, onChange]= useForm({nome:"", modulos:"", tecnologias:"" , responsavel:""})

  const handleClick = (event) => {
    event.preventDefault();

    console.log(`nome:${form.nome} , modulos:${form.modulos}, tecnologias: ${form.tecnologias}, responsaveis: ${form.responsavel}`)
   }

 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label  htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChange}
          type="text"
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChange}
          text= "text"
          pattern="^[3-9]|[1-9][0-9]+$"
          title=" O número de módulos não pode ser menor que 2"
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChange}
          text="text"
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChange}
          text="text"
          pattern="^.{5,}$"
          title='responsável não pode ter menos de 5 caracteres'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
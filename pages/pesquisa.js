import React, {useState} from 'react'


const Notas = [0,1,2,3,4,5]

const Pesquisa = () => {

  console.log(process.env.SHEET_CLIENT_EMAIL)
  console.log(process.env.SHEET_PRIVATE_KEY.replace(/\\n/g, "\n"))
  console.log('oi')

  const [form, setForm] = useState({
    nome: '',
    whatsapp : '',
    nota: '',
    opiniao : ''
  })

  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const saveInfo = async () => {


    const response = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    const responseJson = await response.json()
    setRetorno(responseJson)
    setSuccess(true)
  }

  const onChange = event => {
    const name = event.target.name
    const value = event.target.value

    setForm(old => ({
      ...old,
      [name]: value
    }))
  }

  return (
    <div className="my-6 md:my-12">
      <h1 className="text-center font-bold text-2xl mb-4">Criticas e Sugestões</h1>
        {!success &&
          <form className="w-full px-6 md:w-1/5 mx-auto" onSubmit={e => event.preventDefault()}>
          <label className="font-bold">Nome:</label>
          <input className="block w-full shadow rounded p-4 my-4 bg-purple-200"
            type="text" name="nome"
            onChange={onChange}/>

          <label className="font-bold">WhatsApp:</label>
          <input className="block w-full shadow rounded p-4 my-4 bg-purple-200"
            type="text" name="whatsapp"
            onChange={onChange}/>

          <label className="font-bold">Nota</label>
          <div className="flex">
            {Notas.map((nota, index) => (
              <label className="block text-center w-1/6" key={index}>
                {nota} <br/>
                <input type="radio" name="nota" value={nota} onChange={onChange}/>
              </label>
            ))}
          </div>

          <label className="font-bold block mt-2">Insira um pequeno texto:</label>
          <textarea className="block w-full shadow rounded p-4 my-4 bg-purple-200" name="opiniao" onChange={onChange}>

          </textarea>
          <button 
            className="bg-purple-400 px-6 py-4 my-4 w-full rounded-lg font-bold shadow-lg text-white hover:bg-purple-600 transition duration-700"
            onClick={saveInfo}>
            Salvar
          </button>
        </form>
      }

      {success && 
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center" role="alert">
          <p className="font-bold">{retorno.message}</p>
        </div>
      }
    </div>
  )
}

export default Pesquisa
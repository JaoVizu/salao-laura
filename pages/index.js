import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-xl text-center">Deixe uma crítica ou sugestão sobre <br /> os serviços prestados em <strong>Laura Cabeleireira</strong></h1>
      <div className="text-center my-8">
        <Link href="/pesquisa">
          <a className="bg-purple-400 px-6 py-4 rounded-lg font-bold shadow-lg text-white hover:bg-purple-600 transition duration-700">
            Deixar crítica ou sugestão
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Index
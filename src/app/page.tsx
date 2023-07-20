import Image from 'next/image'
import  sql  from './db'

export default async function Home() {
  const tarefas = await sql `select id, descricao from tabela where feito=false`;
  const tarefasfeitas = await sql `select id, descricao from tabela where feito=true`;

  return (
    <section className='flex justify-center items-center min-h-screen'>
      <div className='bg-slate-900 text-black p-7 borde rounded-[50px]'>
        <input className='px-6 py-3 rounded-full'/>
        <div className='mt-5 uppercase text-center text-white'>To do</div>
        <ul>
          {tarefas.map((t) =>
          <li key={t.id} className='py-1 flex items-center'>
            <input type="checkbox" className='p-1 w-4 h-4'/>
            <span className='ml-2 text-white'>{t.descricao}</span>
          </li>
          )}
        </ul>
        <div className='mt-5 uppercase text-center text-white'>Done</div>
        <ul>
          {tarefasfeitas.map((t) =>
          <li key={t.id} className='py-1 flex items-center'>
            <span className='ml-2 text-white line-through'>{t.descricao}</span>
          </li>
          )}
        </ul>
      </div>
    </section>
  )
}

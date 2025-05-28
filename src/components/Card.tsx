import Tilt from 'react-parallax-tilt';
type CardProps = {
  img: string,
  name: string,
  handleCardClick: () => void  
}

export default function Card({ img, name, handleCardClick }: CardProps){
  return (
    <div className='h-max p-2 bg-slate-800 rounded-2xl'>
      <Tilt className='flex' tiltMaxAngleX={18} tiltMaxAngleY={18}>
        <button onClick={handleCardClick} className='flex flex-col rounded-2xl bg-slate-800'>
          <div className='flex-1 rounded-2xl overflow-hidden'>
            <img 
              className='w-[200px] h-[270px] object-cover' 
              src={img}
              alt={name}
            />
          </div>
          <div className='p-2 bg-slate-800 rounded-b-2xl'>
            <h1 className='text-white text-sm font-medium truncate'>{name}</h1>
          </div>
        </button>
      </Tilt>
    </div>
  )
}
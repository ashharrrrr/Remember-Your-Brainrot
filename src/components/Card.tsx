import Tilt from 'react-parallax-tilt';
type CardProps = {
  img: string,
  name: string
}

export default function Card({ img, name }: CardProps){
  return (
    <div className='h-max'>
      <Tilt className='flex' tiltMaxAngleX={18} tiltMaxAngleY={18}>
        <button className='flex flex-col rounded-lg bg-slate-900'>
          <div className='flex-1 overflow-hidden'>
            <img 
              className='w-[200px] h-[270px] object-cover' 
              src={img}
              alt={name}
            />
          </div>
          <div className='p-2 bg-slate-800'>
            <h1 className='text-white text-sm font-medium truncate'>{name}</h1>
          </div>
        </button>
      </Tilt>
    </div>
  )
}
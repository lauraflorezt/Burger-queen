const Card = ({ data }) => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative h-4/5'>
        <span className='absolute bottom-0 left-5 top-0 rounded-lg font-medium text-black text-sm m-2 px-5 py-0.5'>{data.name}</span>
        <img className='h-full object-cover rounded-lg' src={data.image} alt={data.name} />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          +
        </div>
        <p className='flex justify-between'>
          <span className='text-lg font-light'>{data.type}</span>
          <span className='text-lg font-medium'>${data.price}</span>
        </p>
      </figure>
    </div>
  );
}

export default Card;








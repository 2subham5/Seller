import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
        <div className='flex flex-col items-center justify-center h-[55vh] bg-firefly-bg bg-cover  w-full'>
        

        <div className='flex text-5xl font-extrabold mb-5'>Hey! Friend</div>
        <div className='flex mb-3'>Get the Latest updates in tech</div>
        <div className='flex justify-between w-[40%] h-[40px] items-center'>
            <input type='email' placeholder='Your email' className='flex-grow h-full pl-[20px] bg-white' />
            <div className='h-full bg-teal-700 flex items-center justify-center p-[10px] '>
                <SendIcon className='text-white' />
            </div>
        </div>
    </div>
    

  )
}

export default Newsletter

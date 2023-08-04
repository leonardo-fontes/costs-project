import loading from '../../img/loading.svg'

function Loading() {
    return (
        <div className=' grid col-span-5 items-center justify-center'>
            <img className='w-[50px]' src={loading} alt="Loading" />
        </div>
    )
}

export default Loading;
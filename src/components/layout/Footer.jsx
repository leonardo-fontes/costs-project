import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(props) {
    return (
        <footer className='flex flex-col bg-[#333] justify-center items-center'>
            <ul className='flex gap-10 py-10'>
                <li>
                    <FaFacebook className='text-3xl text-[#fff] hover:text-[#ffbb33] cursor-pointer duration-300'/>
                </li>
                <li>
                    <FaInstagram className='text-3xl text-[#fff] hover:text-[#ffbb33] cursor-pointer duration-300'/>
                </li>
                <li>
                    <FaLinkedin className='text-3xl text-[#fff] hover:text-[#ffbb33] cursor-pointer duration-300'/>
                </li>
            </ul>
            <p className='mb-8 text-lg text-[#fff]'>
                <span className='font-bold text-[#ffbb33]' >
                    Costs
                </span> &copy; 2023
            </p>
        </footer>
        
    )
}

export default Footer;
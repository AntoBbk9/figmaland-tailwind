import TwitterIcon from '../footer/twitterIcon'
import FacebookIcon from '../footer/facebookIcon'
import LinkedInIcon from '../footer/linkedInIcon'

function Navbar() {
  return (
    <>
      <div className='flex justify-between px-6 py-4 items-center sm:hidden'>
          <img src="/logo-entreprise.png" alt="" />
          <img src="/menu.png" alt="" className='w-6 h-3'/>
      </div>

      <div className='hidden sm:flex justify-around py-10'>
        <div className='flex justify-center gap-10 items-center'>
          <p className='text-white'>Home</p>
          <p className='text-white'>Product</p>
          <p className='text-white'>Pricing</p>
          <p className='text-white'>About</p>
          <p className='text-white'>Contact</p>
          <img src="/logo-entreprise.png" alt="" />
        </div>
        <div className='flex items-center gap-10'>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
    </>
  )
}

export default Navbar

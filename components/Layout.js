import Link from 'next/link'

import Footer from './Footer.js'

const Layout = ({ children }) => (
    <div className="max-w-screen-md mx-auto px-4 md:px-8">
      { children }
    </div>
    
  //  <Footer>
  //     <Link href="https://gmail.com">
  //       <GitHub className="cursor-pointer hover:text-gray-700" size={20} />
  //     </Link>
  //     <Link href="https://facebook.com">
  //       <Linkedin className="cursor-pointer hover:text-gray-700" size={20} />
  //     </Link>
  //     <Link href="https://appleid.apple.com/#!&page=signin">
  //       <Twitter className="cursor-pointer hover:text-gray-700" size={20} />
  //     </Link>
  //   </Footer>
)

export default Layout
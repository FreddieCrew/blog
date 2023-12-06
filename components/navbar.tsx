import Link from 'next/link';


const Nav = () => {

  return (
      <nav className="bg-none text-white py-3">
        <div className="flex">
          <ul className='gap-4 ml-8 inline-flex items-center text-center list-none'>
            <Link href='https://freddiecrew-github-io.vercel.app/' className='hover:opacity-80'>
              Home
            </Link>
            <Link href='https://freddiecrew-github-io.vercel.app/about' className='hover:opacity-80'>
              About me
            </Link>
            <Link href='https://freddiecrew-github-io.vercel.app/skills' className="hover:opacity-80">
              Skills
            </Link>
            <Link href='https://freddiecrew-blog.vercel.app/' className="hover:opacity-80">
              Blog
            </Link>
          </ul>
        </div>
      </nav>
  );
};

export default Nav;
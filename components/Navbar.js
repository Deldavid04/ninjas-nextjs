import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>Ninja List</h1>
      </div>

      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/ninjas'>
          <a>Ninja Listing</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;

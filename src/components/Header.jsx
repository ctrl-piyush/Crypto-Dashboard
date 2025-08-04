import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 fixed top-0 left-0 w-full shadow-md z-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
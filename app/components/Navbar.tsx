export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-white">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight text-black">
        ETrip
      </div>


      {/* Menu */}
      <div className="hidden md:flex gap-10 text-gray-500">
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>


      {/* Button */}
      <a
        href="#"
        className="rounded-full bg-green-500 px-6 py-3 text-white hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

    </nav>
  );
}
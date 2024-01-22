const Navigation = () => {
  return (
    <nav className="container my-0 mx-auto max-w-7xl flex justify-between h-[72px] items-center">
      <div className="logo">
        <img src="/assets/brand_logo.png" alt="logo" />
      </div>
      <ul className="flex justify-center items-center gap-6 list-none">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className=" px-4 py-1 h-8 text-white bg-[#d01c28] font-medium">
        login
      </button>
    </nav>
  );
};
export default Navigation;

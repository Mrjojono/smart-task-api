import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" flex flex-row justify-between bg-green-900 p-3 mt-4 w-3xl ml-auto mr-auto rounded-2xl  ">
      <h1 className="ml-11  text-4xl font-bold text-white  "> Task App</h1>

      <ul className="flex flex-row gap-9 mr-11 navlist">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;

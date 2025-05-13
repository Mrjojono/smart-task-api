import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="text-white  ">
        <section className="Hero-home">
          <h1> <span className=" text-green-900 font-bold text-3xl ">Task App </span><br></br>  for Better Time managment</h1>
          <p>
            Stay focused, organized, and in control. Task App helps you break
            down your goals into manageable tasks and track your progress
            effortlessly. Make every minute count.
          </p>
          <Link to="/Page" className="btn">Get started </Link>
        </section>
      </div>
    </>
  );
}

export default Home;

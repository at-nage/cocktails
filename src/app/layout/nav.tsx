import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="w-10/12">
			{/* <Link to="/cocktails">Коктели</Link> */}
			<Link to="/">Коктели</Link>
		</nav>
	);
};

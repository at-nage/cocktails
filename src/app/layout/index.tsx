import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Main } from "./main";
import { Nav } from "./nav";

export const Layout: React.FC = () => {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Main>
				<Outlet />
			</Main>
		</>
	);
};

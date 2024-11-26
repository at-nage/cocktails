import React from "react";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <header className="flex justify-center gap-2 p-2 border">{children}</header>;
};

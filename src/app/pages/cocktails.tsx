import { useLoaderData, useNavigate } from "react-router-dom";

import { useTranslation } from "../../root/translation/translation";
import { Image } from '../components/Image';

import type { Cocktail } from "./loaders";

const Cocktail: React.FC<Cocktail> = ({ name, variants }) => {
	const navigate = useNavigate();
	const t = useTranslation();

	return (
		<div
			key={name}
			className="w-60 justify-self-center justify-center items-center flex-col cursor-pointer border shadow-lg"
			// onClick={() => navigate(`/cocktails/${name}`)}
			onClick={() => navigate(`/${name}`)}
		>
			<div className="w-full p-1 flex justify-center">
				<span>{`${t(name)} (${variants.length})`}</span>				
			</div>
			<div className="h-80 w-60 flex justify-center items-center">
				<Image name={variants[0].name}/>
			</div>
		</div>
	);
};

export const CocktailsPage: React.FC = () => {
	const cocktails = useLoaderData() as Cocktail[];
	return <div className="grid w-10/12 py-6 gap-2 2xl:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">{cocktails.map(Cocktail)}</div>;
};

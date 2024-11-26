import { LoaderFunctionArgs } from "react-router-dom";

import data from "../../assets/cocktails.json";

export type Cocktail = (typeof data)[number];
export type Variant = Cocktail["variants"][number];
export type Ingredient = {	name: string; part?: number; dash?: number };

export function cocktails() {
	return data;
}

export function cocktail({ params }: LoaderFunctionArgs) {
	const cocktail = data.find((cocktail) => cocktail.name == params.name);

	if (!cocktail) {
		throw new Error("NotFound");
	}

	return cocktail;
}

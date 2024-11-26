import { useState } from "react";

import { Select } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

import { useMeasurements } from "../../root/measurements";
import { useTranslation } from "../../root/translation/translation";
import { Image } from "../components/Image";

import type { Cocktail, Ingredient } from "./loaders";

const Ingredient: React.FC<Ingredient> = ({ name, part, dash }) => {
	const measurement = useMeasurements();
	const t = useTranslation();

	return (
		<div key={name} className="flex gap-2">
			<span>{t(name)}</span>
			{part && (
				<>
					<span>:</span>
					<span>{`${measurement.convert(part)} ${t(measurement.value)}`}</span>
				</>
			)}
			{dash && (
				<>
					<span>:</span>
					<span>{`${dash} ${t("dash")}`}</span>
				</>
			)}
		</div>
	);
};

export const CocktailPage: React.FC = () => {
	const cocktail = useLoaderData() as Cocktail;
	const [variant, setVariant] = useState(cocktail.variants[0]);
	const measurement = useMeasurements();
	const t = useTranslation();

	return (
		<div className="w-10/12 py-6 flex flex-col gap-6">
			{cocktail.variants.length == 1 ? (
				<span>{t(variant.name)}</span>
			) : (
				<Select
					allowDeselect={false}
					value={variant.name}
					data={cocktail.variants.map((variant) => ({ value: variant.name, label: t(variant.name) }))}
					onChange={(value) => {
						const variant = cocktail.variants.find((variant) => variant.name == value);
						if (variant) {
							setVariant(variant);
						}
					}}
				/>
			)}
			<div className="flex gap-6 flex-col items-center sm:flex-row sm:items-start">
				<div className="h-80 w-60 flex justify-center">
					<Image name={variant.name} />
				</div>
				<div className="w-80 flex flex-col gap-4">
					<div className="flex gap-2 items-center">
						<span className="shrink-0">{t("measurement")}</span>
						<span>:</span>
						<Select
							allowDeselect={false}
							value={measurement.value}
							data={measurement.data.map((item) => ({ value: item, label: t(item) }))}
							onChange={(value) => measurement.set(value as typeof measurement.value)}
						/>
					</div>
					<div className="flex gap-2 items-center">
						<span>{t("method")}</span>
						<span>-</span>
						<span>{t(variant.method)}</span>
					</div>
					<div className="flex flex-col gap-2">{variant.recipe.map(Ingredient)}</div>
				</div>
			</div>
		</div>
	);
};

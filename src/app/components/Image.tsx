export const Image: React.FC<{ name: string }> = ({ name }) => {
	return <img className="h-full w-full object-cover" src={`/public/${name}.jpg`} alt={name} />;
};

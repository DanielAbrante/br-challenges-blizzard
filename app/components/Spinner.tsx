export function Spinner() {
	return (
		<div className="flex items-center justify-center">
			<span className="mr-6 block size-6 animate-spin rounded border md:size-10" />
			<span className="md:text-xl">Carregando jogos...</span>
		</div>
	);
}

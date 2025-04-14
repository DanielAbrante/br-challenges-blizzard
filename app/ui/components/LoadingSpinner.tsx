export function LoadingSpinner() {
	return (
		<div className="flex justify-center items-center">
			<span className="mr-6 size-6 border block rounded animate-spin tablet:size-10" />
			<span className="tablet:text-xl">Carregando jogos...</span>
		</div>
	);
}

interface Content {
	main: React.ReactElement;
	footer: React.ReactElement;
}

interface MenuDropProps {
	content: Content;
}

export const MenuDrop = ({ content }: MenuDropProps) => {
	return (
		<section className="-z-10 absolute top-0 left-0 flex h-96 w-full justify-center bg-black300 pt-28 opacity-95">
			<div className="2xl:max-w-2xl">
				<div>{content.main}</div>
				<footer>
					<ul className="flex justify-center gap-16">{content.footer}</ul>
				</footer>
			</div>
		</section>
	);
};

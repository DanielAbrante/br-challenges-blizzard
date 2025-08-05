import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Menu from "./sections/Menu";

export default function Home() {
	return (
		<>
			<Menu />
			<Banner />
			<Gallery />
			<Footer />
		</>
	);
}

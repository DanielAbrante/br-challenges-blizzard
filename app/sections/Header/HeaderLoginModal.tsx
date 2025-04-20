import appleIcon from "@/public/assets/banner-hero/icons/apple-icon.svg";
import closeModalIcon from "@/public/assets/banner-hero/icons/close-modal-icon.svg";
import facebookIcon from "@/public/assets/banner-hero/icons/facebook-icon.svg";
import googleIcon from "@/public/assets/banner-hero/icons/google-icon.svg";
import battleNetLogo from "@/public/assets/logo-battle-net.png";
import Image from "next/image";
import { type RefObject, forwardRef } from "react";

const HeaderLoginModal = forwardRef<HTMLDialogElement>((_, ref) => {
	const handleCloseModalClick = () => {
		const dialogRef = ref as RefObject<HTMLDialogElement>;

		if (dialogRef.current) {
			dialogRef.current.close();
		}
	};

	return (
		<dialog className="bg-modalBackground py-16 px-32" ref={ref}>
			<Image
				src={closeModalIcon}
				alt={""}
				className="absolute top-8 right-8 hover:cursor-pointer hover:scale-150"
				onClick={handleCloseModalClick}
			/>

			<div className="flex flex-col items-center">
				<div className="flex justify-center">
					<Image src={battleNetLogo} alt="battlenet logo" />
				</div>

				<form className="my-10">
					<h2>
						<p>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="E-mail ou telefone"
								className="w-[26.625rem] px-4 py-3 rounded placeholder:text-grayBold placeholder:font-thin"
							/>
						</p>

						<p>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Senha"
								className="w-[26.625rem] px-4 py-3 rounded placeholder:text-grayBold placeholder:font-thin mt-4"
							/>
						</p>

						<button className="mt-6 bg-blue text-white w-full py-3 font-semibold rounded">
							Conectar-se
						</button>
					</h2>
				</form>

				<div className="text-white flex flex-col items-center">
					<p>ou conecte-se com</p>
					<ul className="flex gap-4 mt-4">
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<Image src={googleIcon} alt="" />
						</li>
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<Image src={appleIcon} alt="" />
						</li>
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<Image src={facebookIcon} alt="" />
						</li>
					</ul>

					<p className="mt-9">
						<a href="#" className="hover:brightness-150 text-blue underline">
							Crie uma conta
						</a>{" "}
						Battle.net de graça
					</p>
					<a className="hover:brightness-150 mt-4 text-blue underline" href="#">
						Não consegue logar?
					</a>
				</div>
			</div>
		</dialog>
	);
});

export default HeaderLoginModal;

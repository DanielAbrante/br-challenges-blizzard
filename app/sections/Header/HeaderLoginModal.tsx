import AppleIcon from "@/public/assets/banner-hero/icons/apple-icon.svg";
import CloseModalIcon from "@/public/assets/banner-hero/icons/close-modal-icon.svg";
import FacebookIcon from "@/public/assets/banner-hero/icons/facebook-icon.svg";
import GoogleIcon from "@/public/assets/banner-hero/icons/google-icon.svg";
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
		<dialog className="bg-modalBackground px-32 py-16" ref={ref}>
			<CloseModalIcon
				className="absolute top-8 right-8 hover:scale-150 hover:cursor-pointer"
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
								className="w-[26.625rem] rounded px-4 py-3 placeholder:font-thin placeholder:text-grayBold"
							/>
						</p>

						<p>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Senha"
								className="mt-4 w-[26.625rem] rounded px-4 py-3 placeholder:font-thin placeholder:text-grayBold"
							/>
						</p>

						<button
							type="button"
							className="mt-6 w-full rounded bg-blue py-3 font-semibold text-white"
						>
							Conectar-se
						</button>
					</h2>
				</form>

				<div className="flex flex-col items-center text-white">
					<p>ou conecte-se com</p>
					<ul className="mt-4 flex gap-4">
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<GoogleIcon />
						</li>
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<AppleIcon />
						</li>
						<li className="bg-white p-3 hover:cursor-pointer hover:opacity-90">
							<FacebookIcon />
						</li>
					</ul>

					<p className="mt-9">
						<a href="#" className="text-blue underline hover:brightness-150">
							Crie uma conta
						</a>{" "}
						Battle.net de graça
					</p>
					<a className="mt-4 text-blue underline hover:brightness-150" href="#">
						Não consegue logar?
					</a>
				</div>
			</div>
		</dialog>
	);
});

export default HeaderLoginModal;

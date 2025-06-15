import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from ".";

describe("Button component", () => {
	const buttonText = "Continuar";

	it("should render button correctly", () => {
		render(<Button text={buttonText} />);

		const button = screen.getByRole("button");

		expect(button).toBeInTheDocument();
	});

	it("should render text", () => {
		render(<Button text={buttonText} />);

		expect(screen.getByText(buttonText)).toBeInTheDocument();
	});

	it("should render button with outline variant", () => {
		render(<Button text={buttonText} variant="outline" />);

		const button = screen.getByRole("button");

		expect(button).toHaveClass("border");
	});

	it("should render button with semibold weight", () => {
		render(<Button text={buttonText} weight="semibold" />);

		const button = screen.getByRole("button");

		expect(button).toHaveClass("font-semibold");
	});

	it("should render button with icon", () => {
		const mockIcon = () => <svg role="img" />;

		render(<Button text={buttonText} icon={mockIcon} />);

		expect(screen.getByRole("img")).toBeInTheDocument();
	});
});

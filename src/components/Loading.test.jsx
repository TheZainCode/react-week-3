import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
    test("renders the loading message", () => {
        render(<Loading />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    test("exposes an accessible loading status", () => {
        render(<Loading />);

        expect(screen.getByRole("status", { name: "Loading"}))
        .toBeInTheDocument();
    });
});
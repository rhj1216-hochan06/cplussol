import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header1 from "./components/main/Header";

test("renders the shared header navigation and contact entry points", () => {
  render(
    <MemoryRouter>
      <Header1 />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/프린터, 복합기, 미니 포토프린터까지 기업 환경에 맞는 출력/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/전화상담/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /문의하기/i })).toBeInTheDocument();
});

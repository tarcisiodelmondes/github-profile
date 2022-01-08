import { render, screen } from "@testing-library/react";
import Profile from "../../pages/profile/[username]";

describe("Profile page", () => {
  const profileMock = {
    name: "Tarcisio Delmondes",
    username: "tarcisiodelmondes",
    image: "https://github.com/tarcisiodelmondes.png",
    followers: 9,
    following: 11,
    repos: [
      {
        name: "Mock repo 1",
        description: "mock for testing 1",
        url_repo: "https://github.com/mock1",
      },
      {
        name: "Mock repo 2",
        description: "mock for testing 2",
        url_repo: "https://github.com/mock2",
      },
    ],
  };

  const createSut = () => render(<Profile profile={profileMock} />);

  describe("Section profile", () => {
    it("should have a img of the person", () => {
      createSut();

      const heading = screen.getByRole("img", {
        name: `Image of ${profileMock.name}`,
      });

      expect(heading).toBeInTheDocument();
      expect(heading).toBeValid();
      expect(heading).toBeVisible();
    });

    it("should have a heading with name of the person", () => {
      createSut();

      const heading = screen.getByRole("heading", { name: profileMock.name });

      expect(heading).toBeInTheDocument();
      expect(heading).toBeValid();
      expect(heading).toBeVisible();
    });

    it("should have a paragraph with name of the person", () => {
      createSut();

      const paragraph = screen.getByText(profileMock.name);

      expect(paragraph).toHaveTextContent(profileMock.name);
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toBeValid();
      expect(paragraph).toBeVisible();
    });

    it("should have a icon, number of followers, and number of following", () => {
      createSut();

      const paragraph = screen.getByText(
        `${profileMock.followers} followers - ${profileMock.following} following`
      );
      const icon = screen.getByTestId("people_icon");

      expect(paragraph).toHaveTextContent(
        `${profileMock.followers} followers - ${profileMock.following} following`
      );
      expect(paragraph).toContainElement(icon);
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toBeValid();
      expect(paragraph).toBeVisible();

      expect(icon).toBeInTheDocument();
      expect(icon).toBeValid();
      expect(icon).toBeVisible();
    });
  });

  describe("Section repos", () => {
    it("should have a title 'Repositories:'", () => {
      createSut();

      const title = screen.getByRole("heading", { name: "Repositories:" });

      expect(title).toBeInTheDocument();
      expect(title).toBeValid();
      expect(title).toBeVisible();
    });

    it("should have a repository name", () => {
      createSut();

      profileMock.repos.map((repo) => {
        const repoName = screen.getByRole("heading", { name: repo.name });

        expect(repoName).toBeInTheDocument();
        expect(repoName).toBeValid();
        expect(repoName).toBeVisible();
      });
    });

    it("should have a link", () => {
      createSut();

      profileMock.repos.map((repo) => {
        const link = screen.getByText(repo.name).closest("a");

        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("href", repo.url_repo);
        expect(link).toBeValid();
      });
    });

    it("should have a description text of the repository", () => {
      createSut();

      profileMock.repos.map((repo) => {
        const repoDescription = screen.getByText(repo.description);

        expect(repoDescription).toBeInTheDocument();
        expect(repoDescription).toHaveTextContent(repo.description);
        expect(repoDescription).toBeValid();
        expect(repoDescription).toBeVisible();
      });
    });
  });
});
// profileMock.repos.map((repo) => {
//     const repoName = screen.getByRole("heading", { name: repo.name });

//     expect(repoName).toBeInTheDocument();
//   });
// });

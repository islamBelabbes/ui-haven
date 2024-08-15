import fs from "fs";
import path from "path";
import {
  getElement,
  getAllElements,
  getElementsByCategory,
} from "@/lib/elements";
import { codeToHtml } from "shiki";

const testDir = path.join(__dirname, "test-elements"); // Set up test directory

jest.mock("shiki", () => ({
  codeToHtml: jest.fn(),
}));

beforeAll(() => {
  // main component
  fs.mkdirSync(path.join(testDir, "components", "Card"), { recursive: true });
  fs.writeFileSync(
    path.join(testDir, "components", "Card", "attributes.ts"),
    `
      export default {
          name: "Card", // the Component Heading name
          exported: "Card", // the Component Exported Name
          category: "cards", // category (cards / inputs / buttons ... ect)
          dependencies: {
            external: [], // any external dep (aka any 3rd party library)
            internal: ["${path.join(testDir, "shared", "ui", "button.tsx").replace(/\\/g, "\\\\")}"], // any internal dep (aka shaded components)
          },
      };
    `,
  );
  fs.writeFileSync(
    path.join(testDir, "components", "Card", "card.tsx"),
    `
    import {Button} from "./button.tsx";
    export const Card = () => <div>Card Component</div>;
    `,
  );

  // internal dependency
  fs.mkdirSync(path.join(testDir, "shared", "ui"), { recursive: true });
  // Create mock button.tsx file (as internal Dependency)
  fs.writeFileSync(
    path.join(testDir, "shared", "ui", "button.tsx"),
    `
      export const Button = () => <div>Button</div>;
      `,
  );
});

afterAll(() => {
  // Clean up test directory
  fs.rmSync(testDir, { recursive: true });
});

beforeEach(() => {
  // Reset mocks before each test
  jest.resetAllMocks();

  // Mock codeToHtml to return a simple formatted string
  (codeToHtml as jest.Mock).mockImplementation((code: string) => code);
});

describe("Integration tests", () => {
  describe("getElement", () => {
    it("should get element data", async () => {
      const element = await getElement(
        "Card",
        path.join(testDir, "components"),
      );

      expect(element.files.length).toBe(2); // main component + internal dependency
      expect(element.attributes.category).toBe("cards");
    });
  });

  describe("getAllElements", () => {
    it("should get all elements", async () => {
      const elements = await getAllElements(path.join(testDir, "components"));
      expect(elements.length).toBe(1);
    });
  });

  describe("getElementsByCategory", () => {
    it("should get elements by category", async () => {
      const cardElements = await getElementsByCategory(
        "cards",
        path.join(testDir, "components"),
      );

      expect(cardElements.length).toBe(1);
      if (cardElements[0]) {
        expect(cardElements[0].attributes.category).toBe("cards");
      }
    });
  });
});

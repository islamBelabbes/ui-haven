import { expect } from "@jest/globals";

import fs from "fs";
import path from "path";
import {
  getElement,
  getAllElements,
  getElementsByCategory,
} from "@/lib/elements";
import { codeToHtml } from "shiki";
import { seedElement } from "@/lib/seed";

const testDir = path.join(__dirname, "test-elements"); // Set up test directory

jest.mock("shiki", () => ({
  codeToHtml: jest.fn(),
}));

beforeAll(() => {
  seedElement({ root: testDir });
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
        "SeededElement",
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
      const seededElements = await getElementsByCategory(
        "cards",
        path.join(testDir, "components"),
      );

      expect(seededElements.length).toBe(1);
      if (seededElements[0]) {
        expect(seededElements[0].attributes.category).toBe("cards");
      }
    });
  });
});

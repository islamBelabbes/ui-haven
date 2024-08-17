context("full App Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the app", () => {
    cy.get("[data-test=hero-title]").should("exist");
  });

  it("should have a list of categories and at least 1 elements", () => {
    cy.get("[data-test=categories-list]").should("exist");
    cy.get("[data-test=categories-list] li").should("have.length.at.least", 1);
  });

  it("it should navigate to the first category", () => {
    cy.get("[data-test=categories-list] li a")
      .first()
      .invoke("attr", "href")
      .then((href) => {
        cy.get("[data-test=categories-list] li a").first().click();
        cy.url().should("include", href);
      });
  });

  it("should have and element inside the previewer", () => {
    cy.get("[data-test=categories-list] li a").first().click();
    cy.get("[data-test=element-previewer]").should("exist");
    cy.get("[data-test=element-previewer]")
      .children()
      .should("have.length.greaterThan", 0);
  });

  it("should click on the code tab and interact with the code component", () => {
    cy.get("[data-test=categories-list] li a").first().click();
    cy.get("[data-test=code-previewer-mod-switcher-code]").first().click();

    cy.get("[data-test=code-previewer-code]")
      .first()
      .should("exist")
      .find("code")
      .find("span")
      .should("have.length.greaterThan", 0);
  });
});

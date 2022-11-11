import "cypress-localstorage-commands";

describe("DevMeets", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.visit("https://dinaoluf.github.io/DevMeets-Workflow/");
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("can log in with valid user inputs", () => {
    cy.visit("https://dinaoluf.github.io/DevMeets-Workflow/login.html");
    cy.url().should("include", "login");
    cy.get("input[id='login-email']").should("exist").type("dina@noroff.no");
    cy.get("input[id='login-password']")
      .should("exist")
      .type("Password123{enter}");
    cy.wait(1000);
    cy.url().should("include", "profile");
    cy.getLocalStorage("jwt").should("exist");
  });

  it("can create a post on the API", () => {
    cy.visit("https://dinaoluf.github.io/DevMeets-Workflow/index.html");
    cy.url().should("include", "index");
    cy.get("input[id='post-title']").should("exist").type("Hello You");
    cy.get("textarea[id='post-content']")
      .should("exist")
      .type("Thanks for looking at my tests!");
    cy.get("input[id='post-tags']").should("exist").type("e2e{enter}");
    cy.wait(5000);
    cy.get(".post-body")
      .eq(0)
      .contains("Thanks for looking at my tests!")
      .should("exist");
  });

  it("can delete a post from the API", () => {
    cy.visit("https://dinaoluf.github.io/DevMeets-Workflow/index.html");
    cy.url().should("include", "index");
    cy.wait(1000);
    cy.get("svg[id='cog-dropdown']").should("exist").eq(0).click();
    cy.get("li[class='dropdown-item delete-post']")
      .should("exist")
      .eq(0)
      .click();
    cy.wait(5000);
    cy.get(".post-body")
      .eq(0)
      .contains("Thanks for looking at my tests!")
      .should("not.exist");
  });

  it("can log out", () => {
    cy.visit("https://dinaoluf.github.io/DevMeets-Workflow/index.html");
    cy.url().should("include", "index");
    cy.wait(1000);
    cy.get("svg[id='settings-dropdown']").should("exist").click();
    cy.get("li[class='dropdown-item log-out-button']").should("exist").click();
    cy.url().should("include", "login");
    cy.getLocalStorage("jwt").should("not.exist");
  });
});

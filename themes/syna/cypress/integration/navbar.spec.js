describe("Navbar", () => {
  it("should display proper breadcrumb", () => {
    cy.visit("/dev");
    cy.get(".breadcrumb li").should("have.length", 1);
    cy.get(".breadcrumb li").should("contain", "Dev section");
    cy.get(".breadcrumb li a").should("have.length", 0);

    cy.visit("/dev/blog");
    cy.get(".breadcrumb li").should("have.length", 2);
    cy.get(".breadcrumb li:nth-child(1) a").should("have.length", 1);
    cy.get(".breadcrumb li:nth-child(2)").should("contain", "Blog");
    cy.get(".breadcrumb li:nth-child(2) a").should("have.length", 0);
  });
});

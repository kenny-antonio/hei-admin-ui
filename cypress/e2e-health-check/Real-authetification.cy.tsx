describe("Authentication without mocking", () => {
  const email = "test+ryan@hei.school";
  const password = Cypress.env("REACT_APP_TEST_STUDENT1_PASSWORD");

  it("should log in and land on the profile page", () => {
    cy.visit("/login");

    // Remplir l'email et le mot de passe
    cy.get("input[name='email']").type(email);
    cy.get("input[name='password']").type(password, { log: false });

    // Cliquer sur le bouton de connexion
    cy.get("button[type='submit']").click();

    // Vérifier qu'on est bien redirigé sur la page profil (ou dashboard)
    cy.url().should("include", "/profile"); // adapte selon ton routing

    // Vérifier que les infos du profil s'affichent bien
    cy.getByTestid("main-content")
      .should("contain", "STD21111") // ref
      .and("contain", "Doe")         // last_name
      .and("contain", "Adr 1")       // address
      .and("contain", "test+ryan@hei.school") // email
      .and("contain", "0322411123"); // phone
  });
});

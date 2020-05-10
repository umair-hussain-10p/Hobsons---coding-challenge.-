
describe('Visit the hobsons website', function() {
    it('Visits the Hobsons website ', function() {
    //Visit the Website
    cy.visit("www.Hobsons.com");
    expect(true).to.equal(true);
    })
})
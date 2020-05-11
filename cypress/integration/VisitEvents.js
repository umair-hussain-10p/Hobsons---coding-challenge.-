describe('Actions on Hamburger', function() {
    it('Visits the Hobsons website ', function() {
        cy.fixture('constants')
        .then((constants) => {
        //Visit the Website
        cy.visit(constants.HobsonsWebsite)
    })
})

    it ('Actions on Hamberger option', function(){
        //Click on the hamburger
        cy.get('.menu').click({force:true});
        //Assert the sublist and Click Resources
        cy.get('nav ul li').contains('Resources').click();
        //Assertion of child-list of Resourcens 
        cy.get('ul.expand').should('be.visible');
        //Click events on the chlid-list of Resrouces 
        cy.get('ul.expand > li').contains('Events').click();
    })

    it ('Assertion of future events on the Events page', function() {
        cy.get(':nth-child(10) > .txt > h4 > a').contains('ERDI Summer 2020');
    })
})
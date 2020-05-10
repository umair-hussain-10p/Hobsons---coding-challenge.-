
describe('Hopsons website', function() {
    it('1. Visits the Hobsons website ', function() {
    //Visit the Website
    cy.visit("www.Hobsons.com");
    })

    it ('2. Actions on home screen', function(){
        // Assertion on 'We help Students'
        cy.get('h1 > strong').should('be.visible')
        //Click on the down-arrow
        cy.get('.fas').click()
        // Should add visual testing here
        cy.get('#section-learn-more > h2').contains('How can we help your students')
        cy.get('#section-learn-more > h2').should('have.css','text-align','center')
    })

    it ('3. Actions on Hamberger option', function(){
        //Click on the hamburger
        cy.get('.menu').click({force:true});
        //Assert the sublist and Click Resources
        cy.get('nav ul li').contains('Resources').click();
        //Assertion of child-list of Resourcens 
        cy.get('ul.expand').should('be.visible');
        //Click events on the chlid-list of Resrouces 
        cy.get('ul.expand > li').contains('Events').click();
     })

     it ('4.Assertion of future events on the Events page', function() {
        cy.get(':nth-child(10) > .txt > h4 > a').contains('ERDI Summer 2020');
    })
}) 
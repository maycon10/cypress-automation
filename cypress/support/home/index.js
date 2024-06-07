const elem = require('./elements').ELEMENTS;

class Home{

    checkLoadingHomePage(){
        cy.get(elem.logo_image).should('be.visible');
        cy.get(elem.home_menu).should('be.visible');
    }
}

export default new Home();

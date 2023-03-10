describe('Demoblaze web app login test', function(){
    it('Successfully login using correct username password', function(){
        cy.visit('https://www.demoblaze.com/index.html')

        //masuk ke menu login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000)

        //isi username dan password yang valid
        cy.get("#loginusername").type('wibowo.bullseye').should('have.value','wibowo.bullseye')
        cy.get("#loginpassword").type('bullseye').should('have.value','bullseye')

        //click button login
        cy.get("[onclick='logIn()']").click()
        
        //assert homescreen
        cy.get("#nameofuser").should('be.visible').should('contain','wibowo.bullseye')
    })
})
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
        cy.wait(1000)

        //click button login
        cy.get("[onclick='logIn()']").click()
        cy.wait(1000)
        
        //assert homescreen
        cy.get("#nameofuser").should('be.visible').should('contain','wibowo.bullseye')
        cy.wait(1000)

        //TUGAS HANDLE ADD TO CART/////////////////////////////////////////////
        cy.get("#tbodyid > div:nth-of-type(1) [alt]").click()
        cy.get(".btn-success").click()
        cy.wait(2000)
        cy.get("#cartur").click()

        cy.wait(5000)

        //TUGAS HANDLE LOGOUT/////////////////////////////////////////////

        cy.get("[onclick='logOut()']").click()
    })
})
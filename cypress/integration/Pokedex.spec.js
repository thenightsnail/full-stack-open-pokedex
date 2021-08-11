describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single pokemon page can be navigated from front page', () => {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="/pokemon/bulbasaur"]').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
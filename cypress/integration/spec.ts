describe('Basic Happy Path', () => {

  it('Visits the initial project page and gets available route options', () => {
    cy.intercept('GET', '*/routes', { fixture: 'routes' }).as('getRoutes');
    cy.visit('/');
    cy.wait('@getRoutes');
  });

  it('Gets direction options after route selected', () => {
    cy.intercept('GET', '*/directions/901', { fixture: 'directions' }).as(
      'getDirections'
    );
    cy.get('#route-select')
      .click()
      .get('mat-option')
      .contains('METRO Blue Line')
      .click();
    cy.wait('@getDirections');
  });

  it('Gets stop options after direction selected', () => {
    cy.intercept('GET', '*/stops/901/0', { fixture: 'stops' }).as('getStops');
    cy.get('#direction-select')
      .click()
      .get('mat-option')
      .contains('Northbound')
      .click();
    cy.wait('@getStops');
  });

  it('Should not yet render departures graph', () => {
    cy.get('app-transit-info-graph').should('not.exist');
  });

  it('Gets departure graph after stop selected', () => {
    cy.intercept('GET', '*/901/0/MAAM', { fixture: 'tableInfo' }).as(
      'getDepartures'
    );

    cy.get('#stop-select')
      .click()
      .get('mat-option')
      .contains('Mall of America')
      .click();
    cy.wait('@getDepartures');

    cy.get('app-transit-info-graph').should('exist');
  });

});

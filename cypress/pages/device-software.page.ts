class DeviceSoftwarePage {
  getVersionOfSoftwareInRow(row: Number) {
    return cy.get(
      `[data-rowindex=${row}] > [data-field=version] > .MuiDataGrid-cellContent`
    )
  }
}

export default DeviceSoftwarePage

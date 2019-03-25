import React, { Component } from 'react'

/**
 * Table Component
 * @param {string[]} header - Header of the table
 * @param {object[]} body
 *
 */

class Table extends Component {
  renderHeaders = () => {
    return this.props.headers.map(header => {
      return <th key={header}>{header}</th>
    })
  }

  renderContent = () => {
    return this.props.content.map(element => {
      return (
        <tr key={element.city}>
          <th dangerouslySetInnerHTML={{ __html: element.city }} />
          <td dangerouslySetInnerHTML={{ __html: element.dateAndTime }} />
          <td dangerouslySetInnerHTML={{ __html: element.location }} />
        </tr>
      )
    })
  }

  render() {
    return (
      <table className={`table is-fullwidth`}>
        <thead>
          <tr>{this.renderHeaders()}</tr>
        </thead>
        <tbody>{this.renderContent()}</tbody>
      </table>
    )
  }
}

export default Table

import React from 'react'
import Section from '../../components/Section'
import ApplyTable from './ApplyTable'

const ApplyPersonSection = props => {
  const { title, header, footer, table } = props.content
  return (
    <Section>
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: header }} />
      <ApplyTable
        headers={['City', 'Date and Time', 'Location']}
        content={table}
      />
      <div className="content" dangerouslySetInnerHTML={{ __html: footer }} />
    </Section>
  )
}

export default ApplyPersonSection

import React from 'react'
import Section from '../../components/Section'

const ApplyPersonSection = props => {
  const { title, header } = props.content
  return (
    <Section>
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: header }} />
    </Section>
  )
}

export default ApplyPersonSection

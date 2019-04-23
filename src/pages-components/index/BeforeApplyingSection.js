import React from 'react'
import Section from '../../components/Section'

const BeforeApplyingSection = props => {
  const { title, content } = props.content
  return (
    <Section>
      <h2 className="title is-3">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  )
}

export default BeforeApplyingSection

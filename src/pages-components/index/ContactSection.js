import React from 'react'
import Section from '../../components/Section'

const ContactSection = props => {
  const { title, content } = props.content
  return (
    <Section>
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  )
}

export default ContactSection

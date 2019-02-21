import React from 'react'
import Section from '../../components/Section'
import style from './IndexSections.module.css'

const IndexSections = ({ content }) => {
  return (
    <Section>
      <div
        className={`
          content
          ${style.Content}
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Section>
  )
}

export default IndexSections

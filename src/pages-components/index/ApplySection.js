import React from 'react'
import Section from '../../components/Section'
import style from './ApplySection.module.css'

const ApplySection = props => {
  const { embedUrl, title } = props.content
  return (
    <Section name="apply" className={style.ApplySection}>
      <h2 className="title is-3">{title}</h2>
      <a
        href={embedUrl}
        className="button is-danger"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Now
      </a>
    </Section>
  )
}

export default ApplySection

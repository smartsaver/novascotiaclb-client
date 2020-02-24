import React from 'react'
import Section from '../../components/Section'
import style from './ApplySection.module.css'

const ApplySection = props => {
  const { embedUrl, title } = props.content
  return (
    <Section name="apply" className={style.ApplySection}>
      <h2 className="title is-3">{title}</h2>
      <iframe
        id="resp"
        className="respFrame"
        src={embedUrl}
        frameBorder="0"
        title="StartMyResp Application"
      />
    </Section>
  )
}

export default ApplySection

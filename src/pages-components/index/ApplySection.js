import React from 'react'
import Section from '../../components/Section'
import style from './ApplySection.module.css'

const ApplySection = props => {
  const { embedUrl, title } = props.content
  return (
    <Section name="apply" className={style.ApplySection}>
      <h2 className="title is-3">{title}</h2>
      <p>If you cannot see the form, <a href="https://mysmartfuture.org/signup/clbnb" target="_blank" rel="noopener noreferrer">click here.</a></p>
      <iframe
        id="resp"
        style="width:100%; margin:1rem 0; background: white; min-height: 43rem"
        src={embedUrl}
        frameBorder="0"
        title="StartMyResp Application"
      />
    </Section>
  )
}

export default ApplySection

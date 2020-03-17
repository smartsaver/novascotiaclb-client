import React from 'react'
import Section from '../../components/Section'
import style from './IndexBanner.module.css'

const IndexBanner = props => {
  const { content = '', title = '' } = props.content
  
  return (
    <header>
      <Section
        className={`
          section 
          ${style.BannerImage}
          ${style.IndexBanner}
        `}
      >
        <h1 className="title">{title}</h1>
        <p
          className="title is-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Section>
      <div className={style.covid}>
        <h2 className={style.fix}>
          Due to the COVID-19 disruptions, all families will experience longer than usual wait times to set up an appointment with their bank to complete the application process.
          The current wait time at some banks is estimated to be 14-30 business days.
        </h2>
      </div>
    </header>
  )
}

export default IndexBanner

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
    </header>
  )
}

export default IndexBanner

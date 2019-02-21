import React from 'react'
import Section from '../../components/Section'
import YoutubeVideoFrame from '../../components/YoutubeVideoFrame'
import style from './VideoSection.module.css'

const VideoSection = ({ title, content, url }) => {
  return (
    <Section>
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="has-text-centered">
        <YoutubeVideoFrame className={style.VideoFrame} url={url} />
      </div>
    </Section>
  )
}

export default VideoSection

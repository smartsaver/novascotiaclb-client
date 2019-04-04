import React from 'react'
import IndexLayout from './IndexLayout'
import IndexBanner from './IndexBanner'
import VideoSection from './VideoSection'
import ApplySection from './ApplySection'
import IndexSection from './IndexSections'
import ContactSection from './ContactSection'
import indexContent from './content'
import ApplyPersonSection from './ApplyPersonSection'
import AboutContent from './AboutSection'

const {
  bannerContent,
  introContent,
  sectionsContent,
  applyContent,
  contactContent,
  applyPersonContent,
  aboutContent,
} = indexContent

const IndexPage = () => {
  return (
    <IndexLayout seoTitle="Apply for CLB" seoContent={bannerContent.content}>
      <IndexBanner content={bannerContent} />
      <VideoSection
        title={introContent.title}
        content={introContent.content}
        url={bannerContent.videoUrl}
      />
      <IndexSection content={sectionsContent.content} />
      <ApplySection content={applyContent} />
      <ApplyPersonSection content={applyPersonContent} />
      <ContactSection content={contactContent} />
      <AboutContent content={aboutContent} />
    </IndexLayout>
  )
}

export default IndexPage

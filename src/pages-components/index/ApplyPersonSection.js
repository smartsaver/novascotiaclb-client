import React from 'react'
import Section from '../../components/Section'
import ApplyTable from './ApplyTable'

const styles = {
  covid: {
    textAlign: 'center',
  },
  fix: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 4,
    paddingBottom: 4
  }
};

const ApplyPersonSection = props => {
  const { title, header, table } = props.content
  return (
    <Section>
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: header }} />
      <div style={styles.covid}>
        <h4>
          Special Update: Due to COVID-19, all Super Clinics have been postponed.
        </h4>
      </div>
    </Section>
  )
}

export default ApplyPersonSection

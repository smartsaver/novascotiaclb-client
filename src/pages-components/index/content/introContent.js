import processMarkdown from '../../../libs/marked'

const introContent = {
  title: 'Did you know?',
  content: processMarkdown(`
* Youth with savings for their education are 31% more likely to have a post-secondary mindset than those who have none.
* Children with education savings of up to $500 are 3 times more likely to enrol in post-secondary and 4 times more likely to graduate.

Nova Scotia is working to increase post-secondary opportunities to youth. By focusing on the 50,000 + children who are eligible for the Canada Learning Bond, we can build a better future for our children and province.
  `),
}

export default introContent

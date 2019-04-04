import processMarkdown from '../../../libs/marked'

const aboutContent = {
  title: 'About this initiative',
  content: processMarkdown(`
The Department of Community Services is a proud partner in helping Nova Scotian families access funding for their children’s post-secondary education. 

Online, phone, and in person supports are made possible by the Department of Community Services’ collaboration with SmartSAVER, the Community Volunteer Income Tax Program, Employment and Social Development Canada, Service Canada, and Service Nova Scotia.
  `),
}

export default aboutContent

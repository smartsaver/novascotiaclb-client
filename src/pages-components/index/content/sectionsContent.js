import processMarkdown from '../../../libs/marked'

const sectionsContent = {
  content: processMarkdown(`
## What funding is available?
* Eligible children receive $500 initially and $100 more each year they continue to be eligible.  CLB is available up to the age of 15 or maximum $2,000.
  
* You do not have to put any of your own money into the RESP to receive the Canada Learning Bond.
* Money comes from the Government of Canada and is deposited directly into the bank account that holds the Registered Education Savings Plan (RESP) of an eligible child.  
  
## Eligibility

Families eligible for the Canada Learning Bond have:

* Children born on or after January 1, 2004.
* A net family income of $46,605 or less for a family with up to 3 kids.  

_*For families with more than 3 children click here._

## What do I need to apply?
  
* Social Insurance Number (SIN) for you and your child.
* Have filed your latest income tax and benefit return.
  
You can get help at a free tax preparation clinic near you.  For more information, visit the nearest Community Volunteer Income Tax Program clinic in your community.
    `),
}

export default sectionsContent

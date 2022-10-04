import { FormattedMessage } from 'react-intl';

const referralOptions = {
  gary: 'Gary Community Ventures - Build with Families',
  benefitsInAction: 'Benefits in Action',
  villageExchange: 'Village Exchange',
  theFax: 'The Fax',
  searchEngine:  
    <FormattedMessage 
      id='referralOptions.searchEngine' 
      defaultMessage='Google or other search engine' />,
  other:   
    <FormattedMessage 
      id='referralOptions.other' 
      defaultMessage='Other' />
}

export default referralOptions;
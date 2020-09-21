import React from 'react';
import { FormattedMessage } from 'react-intl';

const translate = (id, values={}) => 
<FormattedMessage id={id} values={{...values}}> {(...values) => <span>{values}</span>}</FormattedMessage>

export default translate;
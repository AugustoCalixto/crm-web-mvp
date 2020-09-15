import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

import ActivityBox from 'components/ActivityBox';
import AppModuleHeader from 'components/AppModuleHeader';
import AppNotification from 'components/AppNotification';
import AppRow from 'components/AppRow';
import Callouts from 'components/callouts/Callout';
import CardBox from 'components/CardBox';
import CardLayout from 'components/CardLayout';
import Cards from 'components/Cards';
import InfoCard from 'components/InfoCard';
import InFoWithBgImage from 'components/InFoWithBgImage';
import LanguageSwitcher from 'components/LanguageSwitcher';
import ProfileCard from 'components/ProfileCard';

class CustomerPage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">

        <CardLayout>
          <div className="d-flex justify-content-center">
            <h1><IntlMessages id="pages.samplePage"/></h1>
          </div>
        </CardLayout>

      </div>
    );
  }
}

export default CustomerPage;
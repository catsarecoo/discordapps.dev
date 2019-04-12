import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Locations from '../../data/Locations';
import { fetchAuthIfNeeded } from '../../redux/actions/auth';
import { injectIntl } from 'react-intl';
import ContentBox from '../ContentBox';
import Flex from '../FlexColumns';

class PleaseAddYourBotPleaseThanks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAuthIfNeeded());
  }
  render() {
    return (
      <ContentBox>
        <Flex>
          <Flex columns={4}>
            <h4>
              <FormattedMessage id="components.pleaseaddyourbotpleasethanks.title" />
            </h4>
          </Flex>
          <Flex columns={4}>
            <h5>
              <a href={Locations.tutorials}>
                <FormattedMessage id="components.pleaseaddyourbotpleasethanks.innovate.heading" />
              </a>
            </h5>
            <FormattedMessage id="components.pleaseaddyourbotpleasethanks.innovate.content" />
          </Flex>
          <Flex columns={4}>
            <h5>
              <a href={Locations.add}>
                <FormattedMessage id="components.pleaseaddyourbotpleasethanks.add.heading" />
              </a> 
            </h5>
              <FormattedMessage id="components.pleaseaddyourbotpleasethanks.add.content" />
          </Flex>
        </Flex>
      </ContentBox>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps)(injectIntl(PleaseAddYourBotPleaseThanks));
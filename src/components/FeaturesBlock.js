import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class FeaturesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'block features-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div class="block-header inner-small">
                <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                {_.get(this.props, 'section.subtitle') && 
                <p class="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.featureslist') && 
              <div class="inner">
                {_.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
                <div key={feature_idx} class="block-item">
                  <div class="grid">
                    {_.get(feature, 'image') && 
                    <div class="cell block-preview">
                      <img src={safePrefix(_.get(feature, 'image'))} alt={_.get(feature, 'title')} />
                    </div>
                    }
                    <div class="cell block-content">
                      <h3 class="block-title underline">{_.get(feature, 'title')}</h3>
                      <div class="block-copy">
                        {markdownify(_.get(feature, 'content'))}
                      </div>
                      {_.get(feature, 'actions') && 
                        <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                      }
                    </div>
                  </div>
                </div>
                ))}
                </div>
              }
            </section>
        );
    }
}

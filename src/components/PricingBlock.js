import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class PricingBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'block pricing-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div class="block-header inner-small">
                <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                {_.get(this.props, 'section.subtitle') && 
                <p class="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.pricingplans') && 
              <div class="inner">
                <div class="grid">
                  {_.map(_.get(this.props, 'section.pricingplans'), (plan, plan_idx) => (
                  <div key={plan_idx} class={'cell plan' + (_.get(plan, 'highlight') ? ' highlight' : '')}>
                    <div class="plan-inside">
                    <h3 class="plan-name">{_.get(plan, 'title')}</h3>
                    {_.get(plan, 'price') && 
                    <div class="plan-price">{_.get(plan, 'price')}</div>
                    }
                    <div class="plan-details">
                      {markdownify(_.get(plan, 'details'))}
                    </div>
                    {_.get(plan, 'actions') && 
                      <CtaButtons {...this.props} actions={_.get(plan, 'actions')} />
                    }
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}

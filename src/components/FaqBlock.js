import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class FaqBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'block faq-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div class="inner-small">
                <div class="block-header">
                  <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                  {_.get(this.props, 'section.subtitle') && 
                  <p class="block-subtitle">
                    {htmlToReact(_.get(this.props, 'section.subtitle'))}
                  </p>
                  }
                </div>
                {_.get(this.props, 'section.faqitems') && 
                <dl class="faq-accordion">
                  {_.map(_.get(this.props, 'section.faqitems'), (faqitem, faqitem_idx) => (<React.Fragment key={faqitem_idx}>
                  <dt key={faqitem_idx} class="accordion-header">
                    <button class="accordion-trigger">
                      <div class="accordion-title">{_.get(faqitem, 'question')}</div>
                      <div class="accordion-icon icon-plus" />
                    </button>
                  </dt>
                  <dd key={faqitem_idx} class="accordion-panel">
                    <div class="accordion-content">
                      {markdownify(_.get(faqitem, 'answer'))}
                    </div>
                  </dd>
                  </React.Fragment>))}
                </dl>
                }
              </div>
            </section>
        );
    }
}

import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block hero-block bg-accent outer">
              <div class="inner">
                <div class="grid">
                  {_.get(this.props, 'section.image') && 
                  <div class="cell block-preview">
                    <img src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
                  </div>
                  }
                  <div class="cell block-content">
                    <h2 class="block-title underline">{_.get(this.props, 'section.title')}</h2>
                    <div class="block-copy">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <p class="block-buttons">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button white large">{_.get(action, 'label')}</Link>
                      ))}
                    </p>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}

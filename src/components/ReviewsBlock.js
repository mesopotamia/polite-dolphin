import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class ReviewsBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'block reviews-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div class="block-header inner-small">
                <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                {_.get(this.props, 'section.subtitle') && 
                <p class="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.reviews') && 
              <div class="inner">
                <div class="grid">
                  {_.map(_.get(this.props, 'section.reviews'), (review, review_idx) => (
                  <blockquote key={review_idx} class="cell review">
                    <div class="review-inside">
                      <p class="review-text">{htmlToReact(_.get(review, 'content'))}</p>
                      <footer class="review-footer">
                        {_.get(review, 'avatar') && 
                        <img class="review-avatar" src={safePrefix(_.get(review, 'avatar'))} alt="Author avatar"/>
                        }
                        <cite class="review-author">{_.get(review, 'author')}</cite>
                      </footer>
                    </div>
                  </blockquote>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}

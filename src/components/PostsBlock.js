import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class PostsBlock extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, 3);
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'block posts-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div class="block-header inner-small">
                <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                {_.get(this.props, 'section.subtitle') && 
                <p class="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              <div class="inner">
                <div class="post-feed">
                  {_.map(recent_posts, (post, post_idx) => (
                  <article key={post_idx} class="post post-card">
                    <div class="post-card-inside">
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link class="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}><img class="thumbnail"
                          src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} /></Link>
                      }
                      <div class="post-card-content">
                        <header class="post-header">
                          <h3 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
                        </header>
                        <div class="post-excerpt">
                          <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        </div>
                        <footer class="post-meta">
                          <time class="published"
                            datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </footer>
                      </div>
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </section>
        );
    }
}

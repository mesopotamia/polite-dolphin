import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, htmlToReact} from '../utils';
import Social from './Social';
import SubscribeForm from './SubscribeForm';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" class="site-footer">
              <div class="footer-top outer">
                <div class="inner">
                  <div class="footer-widgets">
                    <div class="widget footer-branding">
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img') ? 
                      <p class="site-logo">
                        <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img'))} alt="Logo" /></Link>
                      </p>
                       : 
                      <p class="site-title">
                        <Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link>
                      </p>
                      }
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline') && 
                      <p class="site-description">
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.tagline')}
                      </p>
                      }
                    </div>
                    {((_.get(this.props, 'pageContext.menus.secondary') && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav')) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social')) && 
                    <nav class="widget footer-navigation">
                      <div class="footer-nav-inside">
                        {(_.get(this.props, 'pageContext.menus.secondary') && _.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav')) && 
                        <div class="secondary-nav">
                          <h2 class="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.nav_title')}</h2>
                          <ul class="secondary-menu">
                            {_.map(_.get(this.props, 'pageContext.menus.secondary'), (item, item_idx) => (
                            <li key={item_idx}>
                              <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                            </li>
                            ))}
                          </ul>
                        </div>
                        }
                        {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && 
                        <div class="social-nav">
                          <h2 class="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.social_title')}</h2>
                          <Social {...this.props} />
                        </div>
                        }
                      </div>
                    </nav>
                    }
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_subscribe') && 
                    <div class="widget footer-subscribe">
                      <h2 class="widget-title">{_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_title')}</h2>
                      {_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content') && 
                      <p>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.subscribe_content'))}</p>
                      }
                      <SubscribeForm {...this.props} />
                    </div>
                    }
                  </div>
                </div>
              </div>
              <div class="site-info outer">
                <div class="inner">
                  {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}
                  &nbsp;
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                  <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                  </React.Fragment>))}
                </div>
              </div>
            </footer>
        );
    }
}

import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" class="site-header outer">
              <div class="inner">
                <div class="site-header-inside">
                  <div class="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
                    <p class="site-logo">
                      <Link to={safePrefix('/')}>
                        <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {((_.get(this.props, 'pageContext.frontmatter.template') === 'home') || (_.get(this.props, 'pageContext.frontmatter.template') === 'blog')) ? 
                    <h1 class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
                     : 
                    <p class="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
                    <div class="site-nav-inside">
                      <button id="menu-close" class="menu-toggle"><span class="screen-reader-text">Open Menu</span><span
                          class="icon-close" aria-hidden="true" /></button>
                      <ul class="menu">
                        {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx} class={'menu-item ' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                          <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                        </li>
                        ))}
                        {_.get(this.props, 'pageContext.site.siteMetadata.header.menu.actions') && 
                          _.map(_.get(this.props, 'pageContext.site.siteMetadata.header.menu.actions'), (action, action_idx) => (
                          <li key={action_idx} class="menu-item menu-button">
                            <Link to={safePrefix(_.get(action, 'url'))} class="button">{_.get(action, 'label')}</Link>
                          </li>
                          ))
                        }
                      </ul>
                    </div>
                  </nav>
                  <button id="menu-open" class="menu-toggle"><span class="screen-reader-text">Close Menu</span><span class="icon-menu"
                      aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>
            </header>
        );
    }
}

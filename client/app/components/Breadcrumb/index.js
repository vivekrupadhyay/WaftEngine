/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Crumb from './Crumb';

const Breadcrumb = ({ location: { pathname } }) => {
  const subPaths = pathname.split('/').filter(each => !!each);
  let tempPathname = pathname;
  const breadcrumbs = subPaths
    .map(() => {
      const breadcrumb = {
        path: `${tempPathname}`,
        label: tempPathname.substring(tempPathname.lastIndexOf('/') + 1),
      };
      tempPathname = tempPathname.substring(0, tempPathname.lastIndexOf('/'));
      return breadcrumb;
    })
    .reverse();
  return (
    <nav className="bg-grey-light p-2 rounded font-sans w-full my-1">
      <ol className="list-reset flex text-grey-dark">
        {breadcrumbs.map((link, index) => {
          if (link.path === '/admin')
            return <Crumb key={link.path}>Home</Crumb>;
          if (link.path.endsWith('edit') || link.path.endsWith('access'))
            return null;
          return (
            <Crumb key={link.path} isLast={index === breadcrumbs.length - 1}>
              <Link className="text-blue font-bold" to={link.path}>
                {link.label}
              </Link>
            </Crumb>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Breadcrumb);
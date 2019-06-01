import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _ from 'lodash';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
  .tag-desc {
      color: #afaeae;
  }
  .post-content a  {
    color: black;
    text-decoration: none;
    box-shadow: #000000 0 -2px 0 inset !important;
  }
  .post-content a:link  {
    color: black;
    text-decoration: none;
  }
  .post-content a:visited {
    color: black;
    text-decoration: none;
  }
  
  .post-content a:hover {
    color: #afaeae !important;
    text-decoration: none;
    box-shadow: #afaeae 0 -2px 0 inset !important;
  }
  
  .post-content a:active {
    color: black;
    text-decoration: none;
  }
`;

interface TagTemplateProps {
    data: {
        allTagYaml: {
            edges: Array<{
                node: {
                    id: string;
                    description: string;
                };
            }>;
        };
    }
}

const Tags: React.FunctionComponent<TagTemplateProps> = props => {

    const { edges } = props.data.allTagYaml;
    return (
        <IndexLayout>
            <Helmet>
                <title>Tags</title>
            </Helmet>
            <Wrapper css={PageTemplate}>
                <header css={[outer, SiteHeader]}>
                    <div css={inner}>
                        <SiteNav />
                    </div>
                </header>
                <main id="site-main" className="site-main" css={[SiteMain, outer]}>
                    <article className="post page" css={[PostFull, NoImage]}>
                        <PostFullHeader>
                            <PostFullTitle>Tags</PostFullTitle>
                        </PostFullHeader>

                        <PostFullContent className="post-full-content">
                            <div className="post-content">
                                {
                                    edges.map(({ node }) => (
                                        <>
                                        <h2 key={node.id}><a href={`/tags/${_.kebabCase(node.id)}/`}>{node.id}</a></h2>
                                        <p className='tag-desc'>{node.description}</p>
                                        </>
                                    ))
                                }
                            </div>
                        </PostFullContent>
                    </article>
                </main>
                <Footer />
            </Wrapper>
        </IndexLayout>
    )
}

export default Tags;

export const pageQuery = graphql`
  query {
    allTagYaml {
      edges {
        node {
          id
          description
        }
      }
    }
  }
`;
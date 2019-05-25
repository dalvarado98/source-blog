export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'WordGaze',
  description: 'A space for interesting amateur writing',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/word-gaze-logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  facebook: 'https://www.facebook.com/ghost',
  twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction: 'https://gmail.us20.list-manage.com/subscribe/post?u=fa93584683424c0b7af96fe27&amp;id=c76f991758',
  mailchimpName: 'b_fa93584683424c0b7af96fe27_c76f991758',
  mailchimpEmailFieldName: 'EMAIL',
  footer: 'built with Gatsby by Daniel Alvarado',
};

export default config;

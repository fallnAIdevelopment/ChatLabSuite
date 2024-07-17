/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'ChatLABS',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'ChatLABS',
  },
  Meta: {
    Description: 'Launch ChatLABS to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'ChatLABSuite |  AI, your way',
    ThemeColor: '#32383E',
    //TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://chatlabs.rf.gd',
    App: 'https://app.chatlabs.rf.gd',
    CardImage: 'https://chatlabs.rf.gd/img/logo.jpg',
    // OpenRepo: 'https://github.com/enricoros/big-agi',
    // OpenProject: 'https://github.com/users/enricoros/projects/4',
    // SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://fallnai.rf.gd/chatlabs/privacy',
  },
} as const;

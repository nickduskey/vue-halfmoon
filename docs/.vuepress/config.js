module.exports = {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'vue-halfmoon',
        description: 'A collection of Vue components based on halfmoon'
      }
    },
  
    themeConfig: {
      repoLabel: 'Contribute!',
      // git repo here... gitlab, github
      repo: '',
      docsDir: 'docs',
      editLinks: true,
      docsBranch: 'dev',
      editLinkText: 'Help us improve this page!',
      search: false,
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          lastUpdated: 'Last Updated',
          // service worker is configured but will only register in production
          serviceWorker: {
            updatePopup: {
              message: 'New content is available.',
              buttonText: 'Refresh'
            }
          },
          nav: [
            { text: 'Getting Started', link: '/guide' },
            { text: 'Components', link: '/components/' },
            // external link to git repo...again
            { text: 'GitHub', link: '' }
          ],
          sidebar: {
            '/components/': [
              {
                title: 'Components',
                collapsable: false,
                children: ['standard-component']
              }
            ]
          }
        }
      }
    }
  }
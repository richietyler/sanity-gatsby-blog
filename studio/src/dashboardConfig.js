export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f73b7229aa376008f1facbf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9t2vamtt',
                  apiId: '440a7387-652e-4ad3-8a1f-38cd817293e4'
                },
                {
                  buildHookId: '5f73b7220e702900b031c233',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hy3dr339',
                  apiId: '9202c345-cd4c-4b5e-8d1c-63eee51674e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richietyler/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hy3dr339.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

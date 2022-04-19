export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '625e190402c4df21af07f7eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a3mkmdb3',
                  apiId: '9754eba6-195a-4cd8-877a-217674bc1da6'
                },
                {
                  buildHookId: '625e1904379bb71795f58fa7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vza8k4j6',
                  apiId: '287458de-ea8f-4a16-9287-0c78112d1bf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brendenmoore/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vza8k4j6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

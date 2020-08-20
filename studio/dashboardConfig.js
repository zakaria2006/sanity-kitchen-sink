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
                  buildHookId: '5f3e3add99c1401218c68c96',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o2tyrqp8',
                  apiId: 'bc63515f-5ad1-4ac6-83c9-cb6f7bc800fb'
                },
                {
                  buildHookId: '5f3e3addcb74c8070003037c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ymb1dtbp',
                  apiId: '179d2bfa-982b-4115-b249-c2b88839cc44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zakaria2006/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ymb1dtbp.netlify.app', category: 'apps'}
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

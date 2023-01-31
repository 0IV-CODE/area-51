export default () => ({
    drawer: false,
    showBar: false,
    showbarMain: false,
    // NavDrawer Controls
    revInner: false,
    revInnerTwo: false,
    revInnerThree: false,
    reveal: false,
    // Visualizer
    revReadMore: false,
    // Nav Routes
    // Note: All Nav Routes Here - Added Manually
    items: [
      // All Products & Categories
      {
        id: 81,
        name: 'All',
        to: '/Main/AllProjects'
      },
      {
        id: 82,
        name: '3D',
        to: '/Main/AllProjects?tab=3D'
      },
      // {
      //   id: 83,
      //   name: 'Frame',
      //   to: '/IN/AllProducts?tab=Frame'
      // },
      // {
      //   id: 84,
      //   name: 'Trim',
      //   to: '/IN/AllProducts?tab=Trim'
      // },
      // {
      //   id: 85,
      //   name: 'Gauge',
      //   to: '/IN/AllProducts?tab=Gauge'
      // },
      // Main Pages
      {
        id: 86,
        name: 'Home',
        to: '/'
      },
      {
        id: 87,
        name: 'About',
        to: '/About'
      },
      {
        id: 88,
        name: 'Contact',
        to: '/ContactUs'
      },
      {
        id: 89,
        name: 'Resources',
        to: '/IN/Resources'
      },
      // {
      //   id: 90,
      //   name: 'AR Visualizer',
      //   to: '/IN/ARVisualizer'
      // },
      // {
      //   id: 91,
      //   name: 'WEB Visualizer',
      //   to: '/IN/WEBVisualizer'
      // },
      // Policies
      {
        id: 92,
        name: 'Privacy Policy',
        to: '/PrivacyPolicy'
      }
  
    ],
  
  })
  
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
      // Main Pages
      {
        id: 86,
        name: 'Home',
        to: '/'
      },
      {
        id: 87,
        name: 'About',
        to: '/Main/About'
      },
      {
        id: 88,
        name: 'Contact',
        to: '/Main/ContactUs'
      },
      // Policies
      {
        id: 92,
        name: 'Privacy Policy',
        to: '/Main/PrivacyPolicy'
      }
  
    ],
  
  })
  
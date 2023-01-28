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
        to: '/IN/AllProducts'
      },
      {
        id: 82,
        name: 'Panel',
        to: '/IN/AllProducts?tab=Panel'
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
    // Object Load Variables
    // Image & 3D Section
    colLeft: 12,
    mdLeft: 8,
    lgLeft: 8,
    xlLeft: 8,
    // Lorem Section
    colRight: 12,
    mdRight: 4,
    lgRight: 4,
    xlRight: 4,
    // canvas - containerW standard values
    mdCanvasWidth: 305,
    lgCanvasWidth: 450,
    xlCanvasWidth: 500,
    // canvas - containerH standard values
    mdCanvasHeight: 350,
    lgCanvasHeight: 375,
    xlCanvasHeight: 400
  })
  
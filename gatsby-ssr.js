const React = require('react');
const Layout = require('./src/components/Layout').default
// element represent the page, and we wrap that layout into the page
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
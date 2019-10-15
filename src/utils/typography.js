/**
 * Typography.js configuration file
 * 
 * If using the `gatsby-plugin-typography` plugin, then these exported styles will be
 *  made available globally automatically.
 */

import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const typography = new Typography(bootstrapTheme)

// export styled helper functions
export const { scale, rhythm, options } = typography;
export default typography;

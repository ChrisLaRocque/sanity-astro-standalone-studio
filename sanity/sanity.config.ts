import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schema-types'
import {presentationTool} from 'sanity/presentation'
export default defineConfig({
  name: 'default',
  title: 'Delete me',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: 'http://localhost:4321',
    }),
  ],

  schema,
})

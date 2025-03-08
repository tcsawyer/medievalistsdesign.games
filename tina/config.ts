import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Banner',
        name: 'banner',
        path: 'data',
        match: {
          include: 'banner',
        },
        format: 'yml',
        fields: [
          {
            label: "Sub Title",
            name: "subtitle",
            type: "string",
          },
          {
            label: "Body",
            name: "content",
            type: "rich-text",
          },
          {
            label: "Picture",
            name: "image",
            type: "image",
          },
          {
            label: "CSS classes",
            name: "style",
            type: "string",
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'People',
        name: 'people',
        path: 'data',
        match: {
          include: 'people',
        },
        format: 'yml',
        fields: [
          {
            type: 'object',
            label: 'Discussants',
            name: 'discussants',
            list: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.title };
              },
            },
            fields: [
              {
                label: "Name",
                name: "title",
                type: "string",
              },
              {
                label: "Description",
                name: "content",
                type: "rich-text",
              },
              {
                label: "Picture",
                name: "image",
                type: "image",
              },
              {
                label: "CSS classes",
                name: "style",
                type: "string",
              }
            ]
          },
          {
            type: 'object',
            label: 'Leaders',
            name: 'leaders',
            list: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.title };
              },
            },
            fields: [
              {
                label: "Name",
                name: "title",
                type: "string",
              },
              {
                label: "Description",
                name: "content",
                type: "rich-text",
              },
              {
                label: "Picture",
                name: "image",
                type: "image",
              },
              {
                label: "CSS classes",
                name: "style",
                type: "string",
              }
            ]
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'Sponsors',
        name: 'sponsors',
        path: 'data',
        match: {
          include: 'sponsors',
        },
        format: 'yml',
        fields: [
          {
            label: "Name",
            name: "title",
            type: "string",
          },
          {
            label: "Enabled",
            name: "enabled",
            type: 'boolean'
          },
          {
            label: "Description",
            name: "content",
            type: "rich-text",
          },
          {
            label: "CSS classes",
            name: "style",
            type: "string",
          },
          {
            type: 'object',
            label: 'Pictures',
            name: 'pictures',
            list: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.title };
              },
            },
            fields: [
              {
                label: "Name",
                name: "title",
                type: "string",
              },
              {
                label: "Description",
                name: "content",
                type: "rich-text",
              },
              {
                label: "Thumbnail",
                name: "thumb",
                type: "image",
              },
              {
                label: "Full Image",
                name: "image",
                type: "image",
              }
            ]
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'Projects',
        name: 'projects',
        path: 'data',
        match: {
          include: 'projects',
        },
        format: 'yml',
        fields: [
          {
            label: "Name",
            name: "title",
            type: "string",
          },
          {
            label: "Enabled",
            name: "enabled",
            type: 'boolean'
          },
          {
            label: "Description",
            name: "content",
            type: "rich-text",
          },
          {
            label: "CSS classes",
            name: "style",
            type: "string",
          },
          {
            type: 'object',
            label: 'Projects',
            name: 'items',
            list: true,
            fields: [
              {
                label: "Description",
                name: "content",
                type: "rich-text",
              },
              {
                label: "CSS classes",
                name: "style",
                type: "string",
              }
            ]
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

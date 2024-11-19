export const getPageLayoutSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        xxs: {
          type: 'array',
          additionalProperties: true,
        },
        sm: {
          type: 'array',
          additionalProperties: true,
        },
      },
      additionalProperties: false,
    },
    404: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
};

const themeFields = [
  'colorBgBase',
  'colorBgPrimary',
  'colorBgSecondary',
  'colorBorderPrimary',
  'colorLabelPrimary',
  'colorLabelSecondary',
  'colorLabelTertiary',
];

const themeFieldsSchema = {
  type: 'object',
  properties: themeFields.reduce((acc: Record<string, any>, field) => {
    acc[field] = {
      type: 'object',
      properties: {
        h: {
          type: 'number',
        },
        l: {
          type: 'number',
        },
        s: {
          type: 'number',
        },
      },
    };
    return acc;
  }, {}),
};

export const getPageThemeSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        theme: themeFieldsSchema,
        backgroundImage: {
          type: 'string',
        },
        teamId: {
          type: 'string',
        },
        publishedAt: {
          type: 'string',
        },
      },
      additionalProperties: false,
    },
  },
};

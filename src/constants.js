export const EXERCISE_DETAIL_SPECIAL_PROPERTIES = Object.freeze({
  LINK: 'link',
});

export const FIXED_EXERCISES = Object.freeze({
  EXTERNAL_LINK: Object.freeze({
    id: 'external_link',
    title: 'Link Externo',
  }),
});

export const FIXED_EXERCISES_LIST = Object.freeze([
  FIXED_EXERCISES.EXTERNAL_LINK,
]);

export const REQUEST_STATUS = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
});

export const SUPPORTED_LANGUAGES_ARRAY = Object.freeze([
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Portuguese' },
]);

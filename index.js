let os = require('os'),
    S = require('string');

module.exports = function exercismConfigToCSV(data){
  // we can bank on config.json being well formatted
  // remove deprecated exercises
  let rows = data.exercises
      .filter((e) => !e['deprecated'])
      .map((r) => {
        // collect track information (slug, core, difficulty, topics, uuid)
        // topics will be an array
        return S([
          r.slug,
          r.difficulty,
          r.unlocked_by,
          r.uuid,
          r.topics.join(', ')
        ]).toCSV().s;
      });

  // add header row
  rows.unshift(S([
    'Slug',
    'Difficulty',
    'Unlocked By',
    'UUID',
    'Topics'
  ]).toCSV().s);

  return rows.join(os.EOL);

}

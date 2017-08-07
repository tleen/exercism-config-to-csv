let os = require('os'),
    S = require('string');

function parse(str){
  return str.split(os.EOL).map((row) => S(row).parseCSV().s);
}

describe('initial testing framework', () => {
  let data = '';

  before(() => {
    data = require('./data/go-track-config.json');
  });

  it('should reformat data', () => {
    let csv = require('..')(data),
        results = parse(csv);


    csv.length.should.be.greaterThan(1);
    results.length.should.equal(83);
  });
})

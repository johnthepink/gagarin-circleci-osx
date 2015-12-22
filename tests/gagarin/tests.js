describe('My first Gagarin test suite', function () {
  var server = meteor();
  it('should just work', function () {
    return server.execute(function () { console.log('I am alive!'); });
  });
});

describe('You can also use browser in your tests', function () {
  var server = meteor();
  var client = browser(server);

  it('should work for both client and server', function () {
    return client.execute(function () {
      // some code to execute
    }).then(function () {
      return server.execute(function () {
        // some code to execute on server
      });
    });
  });
});

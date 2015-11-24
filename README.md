# CircleCI and Gagarin starting point

## Testing

To run the tests, make sure you have installed `gagarin` globally:

```
$ npm install -g gagarin
```

Then run `gagarin` using the following command in the root of the app, which shows the verbose output:

```
$ gagarin --verbose
```

If you are running locally, you'll need to make sure you have Chromedriver running in the background. You can download that here:

`http://chromedriver.storage.googleapis.com/index.html`

And you may want to change the default timeout depending on the speed of your local computer:

```
$ gagarin -v -t 10000
```

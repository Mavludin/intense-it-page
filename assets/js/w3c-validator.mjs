#!/usr/bin/env node
////////////////////////
// W3C HTML Validator //
// Examples           //
////////////////////////

// Command to run:
//    $ node examples.js

import { w3cHtmlValidator } from 'w3c-html-validator';

// Formatted output
const options = { continueOnFail: true, maxMessageLen: 80, output: 'json' };
const customReporter = (results) => w3cHtmlValidator.reporter(results, options);
w3cHtmlValidator
  .validate({
    filename: '/home/runner/work/intense-it-page/intense-it-page/index.html',
  })
  .then(customReporter);

#!/usr/bin/env node
////////////////////////
// W3C HTML Validator //
// Examples           //
////////////////////////

// Command to run:
//    $ node examples.js

import { w3cHtmlValidator } from 'w3c-html-validator';

// Formatted output
const options = { continueOnFail: true, maxMessageLen: 80, output: 'html' };
const customReporter = (results) => w3cHtmlValidator.reporter(results, options);
w3cHtmlValidator.validate({ filename: './../../index.html' }).then(customReporter);

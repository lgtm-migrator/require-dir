'use strict'
const fs = require('fs'),
  readdirSync = fs.readdirSync,
  parse = require('path').parse;

const isDir = path => {
  return fs.statSync(path).isDirectory();
}

const requireDir = (path) => {
  const fList = readdirSync(path);
  let result = {};
  fList.forEach(f => {
    const filePath = `${path}/${f}`
    const fileName = parse(f).name
    try {
      result[fileName] = isDir(filePath) ? requireDir(filePath) : require(filePath)
    } catch (e) {
      // pass
    }

  })
  return result;
}

module.exports = requireDir;
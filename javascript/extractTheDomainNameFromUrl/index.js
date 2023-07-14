/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const regex = /(?:http[s]?:\/\/)?(?:www\.)?([^\/\.]+)\./;
function domainName(url) {
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
}

console.log(domainName('http://google.com'));

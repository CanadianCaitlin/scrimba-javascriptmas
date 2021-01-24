// Completed solution here: https://scrimba.com/scrim/co2144b8c9af1c326982277fa

// Prompt:

// GoDaddy makes a lot of different top-level domains available to its customers. A top level domain is one that
// goes directly after the last dot in the domain name. To help users choose from available domains, GoDaddy is introducing
// a few feature that shows the type of the chosen top-level domain. You have to implement this feature. To begin with, you want
// to write a function that labels the domains as "commercial", "organization", "network", or "information" for .com, .org, .net, 
// and .info respectively. For the given list of domains return the list of their labels.

function domainType(domains) {
    let domainLabels = []
    
    for (let domain = 0; domain < domains.length; domain++) {
        let dotWord = domains[domain].split(".")
        if (dotWord[dotWord.length-1] == "org") {
            domainLabels.push("organization")
        } if (dotWord[dotWord.length-1] == "com") {
            domainLabels.push("commercial")
        } if (dotWord[dotWord.length-1] == "net") {
            domainLabels.push("network")
        } if (dotWord[dotWord.length-1] == "info") {
            domainLabels.push("information")
        }
    } return domainLabels
}
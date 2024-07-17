export const WHAT_IS_DOMAIN_NAME = [
    {
        questionNumber: 1,
        question: "Every website (web-server) has it's own __ address.",
        options: [
            "TCP",
            "HTTP",
            "IP"
        ],
        answer:
            "IP",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 2,
        question: "These numbers are hard to remember, so websites purchase (technically hire) a _________ name to link to this IP address.",
        options: [
            "Demo",
            "Domain",
            "DNS"
        ],
        answer:
            "Domain",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 3,
        question: "When you type in an address, your computer sends a request to a bunch of servers that look-up this address and find the corresponding IP address to route the request to. This group of servers is called the ____.",
        options: [
            "Demo",
            "Domain",
            "DNS"
        ],
        answer:
            "DNS",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 4,
        question: "A domain name has a simple structure made of several parts (it might be one part only, two, three…), separated by dots and read from _____________.",
        options: [
            "right to left",
            "left to right",
            "10 metres away"
        ],
        answer:
            "right to left",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 5,
        question: "In the domain name 'developer.mozilla.org', 'org' is the __________.",
        options: [
            "1st label (or component)",
            "2nd label (or component)",
            "TLD (Top-Level Domain)"
        ],
        answer:
            "TLD (Top-Level Domain)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 6,
        question: "TLDs tell users the general purpose of the service behind the domain name. The most generic TLDs (.com, .org, .net) don't require web services to meet any particular criteria, but some TLDs enforce stricter policies so it is clearer what their purpose is. For example, local TLDs such as .us, .fr, or .se can require the service to be provided in a given language or hosted in a certain ________.",
        options: [
            "State",
            "Country",
            "Continent"
        ],
        answer:
            "Country",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 7,
        question: "TLDs can contain special as well as latin characters. A TLD's maximum length is __ characters, although most are around 2–3.",
        options: [
            "8",
            "21",
            "63"
        ],
        answer:
            "63",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 8,
        question: "The labels are what follow the TLD. A label is a case-insensitive character sequence anywhere from 1 to 63 characters in length, containing only the letters A through Z, digits 0 through 9, and the '-' character (which may not be the first or last character in the label). 'a', '97', and 'hello-strange-person-16-how-are-you' are all examples of valid labels. The label located right before the TLD is also called a _____________.",
        options: [
            "Secondary Level Domain (SLD)",
            "Waste Of Time (WOT)",
            "Secure Level Domain (SLD)"
        ],
        answer:
            "Secondary Level Domain (SLD)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 9,
        question: "Companies called ___________ use domain name registries to keep track of technical and administrative information connecting you to your domain name.",
        options: [
            "DNS administrators",
            "registrars",
            "GoDaddys"
        ],
        answer:
            "registrars",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 10,
        question: "To find out whether a given domain name is available, open your terminal and type in 'whois afunkydomainname.org'. If available, what will this return?",
        options: [
            "NOT FOUND",
            "BAD REQUEST",
            "UNAUTHORISED"
        ],
        answer:
            "NOT FOUND",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 11,
        question: "Whenever your registrar creates or updates any information for a given domain, the information must be refreshed in every DNS database. DNS databases are stored on every DNS server worldwide, and all these servers refer to a few special servers called '___________ name servers' or 'top-level DNS servers' — these are like the boss servers that manage the system.",
        options: [
            "author",
            "administrative",
            "authoritative"
        ],
        answer:
            "authoritative",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 12,
        question: "Each DNS server that knows about a given domain stores the information for some time before it is automatically invalidated and then refreshed (the DNS server _________ an ____________ server and fetches the updated information from it). Thus, it takes some time for DNS servers that know about this domain name to get the up-to-date information.",
        options: [
            "queries, authoritative",
            "refreshes, authoritative",
            "queries, administrative",
        ],
        answer:
            "queries, authoritative",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 13,
        question: "Your browser may not need to ask a DNS server which IP is behind an address, as your computer might already recognise the IP address identified by this domain name (using a local DNS cache). True or false?",
        options: [
            "True",
            "False",
        ],
        answer:
            "True",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 14,
        question: "What is the difference between a domain name and a URL (uniform resource locator, sometimes called a web address)?",
        options: [
            "There is none. They are the same thing.",
            "A URL contains the domain name of a site as well as other information, including the protocol and the path.",
        ],
        answer:
            "A URL contains the domain name of a site as well as other information, including the protocol and the path.",
        minSelection: 1,
        maxSelection: 1,
    },
]
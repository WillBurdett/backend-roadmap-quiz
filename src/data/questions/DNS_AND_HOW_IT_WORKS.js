export const DNS_AND_HOW_IT_WORKS = [
    {
        questionNumber: 1,
        question: "When you type your URL into the browser, it tries to find the IP address for the website. This first step is called DNS...",
        options: [
            "Revolution",
            "Resolution",
            "Revelation"
        ],
        answer:
            "Resolution",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 2,
        question: "The browser will then check it's _______ to see if it has the IP address from any other visits.",
        options: [
            "Cache",
            "DNS",
            "IP"
        ],
        answer:
            "Cache",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 4,
        question: "If it's not found there, your browser will look at the _________ of the operating system to see if it's there.",
        options: [
            "DNS system",
            "DNS cache",
            "IP cache"
        ],
        answer:
            "DNS cache",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 5,
        question: "If it's not found there, your browser will look at the _______ file to see if there is a mapping from the domain name to the IP address.",
        options: [
            "Servers",
            "Operating Systems",
            "Hosts"
        ],
        answer:
            "Hosts",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 6,
        question: "If after all these steps the domain mapping is not found on your computer, then your browser will start using the Recursive DNS server. True or false?",
        options: [
            "True",
            "False"
        ],
        answer:
            "True",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 7,
        question: "These are normally provided by your ____, and although they know nothing about IP addresses, they will look in their cache to see if another user has visited that domain.",
        options: [
            "MP",
            "ISP",
            "SSL"
        ],
        answer:
            "ISP",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 8,
        question: "If the IP address is still not found, your computer will go to the Root DNS Servers. These do not hold the IP address for the domain, but can find information for the...",
        options: [
            "TLD (Top Level Domain)",
            "Layer 1",
            "Layer 2"
        ],
        answer:
            "TLD (Top Level Domain)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 9,
        question: "After this information is returned to the Recursive DNS server, it reaches out to the TLD server. This server also doesn't know where this domain's IP address is, but knows information about the...",
        options: [
            "Administrative Name Server",
            "Application Name Server",
            "Authoritative Name Server"
        ],
        answer:
            "Authoritative Name Server",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 10,
        question: "This information is returned to the Recursive DNS server, so it can reach out to the Authoritative Name Server which finally returns the required...",
        options: [
            "DNS",
            "Domain information",
            "Client's IP address"
        ],
        answer:
            "Domain information",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 11,
        question: "This information is returned to the Recursive DNS server (where it might be _________), so it can be returned to the user's computer, where it is then passed to the browser, so the browser can make the request to the IP address.",
        options: [
            "Encrypted",
            "Deleted",
            "Cached"
        ],
        answer:
            "Cached",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 12,
        question: "The information stored on the Authoritative Name Server is called the...",
        options: [
            "IP address records",
            "DNS Records or Zone files",
            "Admin Records or files"
        ],
        answer:
            "DNS Records or Zone files",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 13,
        question: "I indicate the IP address of the domain. I also store TTL (time-to-live) for caching and store names using the '@' symbol for the root addresses (i.e. no 'www' or subdomain e.g. 'roadmap.sh'). Who am I?",
        options: [
            "'A' record (Address record)",
            "CNAME Record (Canonical name record)",
            "MX Record (Mail Exchanger record)",
            "TXT Record (Text record)",
            "NS Record (Name server record)",
        ],
        answer:
            "'A' record (Address record)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 14,
        question: "I store aliases which point a domain/subdomain to another domain. Who am I?",
        options: [
            "'A' record (Address record)",
            "CNAME Record (Canonical name record)",
            "MX Record (Mail Exchanger record)",
            "TXT Record (Text record)",
            "NS Record (Name server record)",
        ],
        answer:
            "CNAME Record (Canonical name record)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 15,
        question: "I help route emails to the relevant server. Who am I?",
        options: [
            "'A' record (Address record)",
            "CNAME Record (Canonical name record)",
            "MX Record (Mail Exchanger record)",
            "TXT Record (Text record)",
            "NS Record (Name server record)",
        ],
        answer:
            "MX Record (Mail Exchanger record)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 16,
        question: "I'm mainly used by third parties that want to verify the ownership of a domain name. I allow you to add arbitrary text to a domain name. Who am I?",
        options: [
            "'A' record (Address record)",
            "CNAME Record (Canonical name record)",
            "MX Record (Mail Exchanger record)",
            "TXT Record (Text record)",
            "NS Record (Name server record)",
        ],
        answer:
            "TXT Record (Text record)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 17,
        question: "I give you the location of the authoritative name server. Who am I?",
        options: [
            "'A' record (Address record)",
            "CNAME Record (Canonical name record)",
            "MX Record (Mail Exchanger record)",
            "TXT Record (Text record)",
            "NS Record (Name server record)",
        ],
        answer:
            "NS Record (Name server record)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 18,
        question: "You can inspect a domain's text record by opening your terminal and entering...",
        options: [
            "host -t ns roadmap.sh",
            "host -t mx roadmap.sh",
            "host -t txt roadmap.sh",
        ],
        answer:
            "host -t txt roadmap.sh",
        minSelection: 1,
        maxSelection: 1,
    },
]
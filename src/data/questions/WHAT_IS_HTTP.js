export const WHAT_IS_HTTP = [
    {
        questionNumber: 1,
        question: "What does ‘HTTP’ stand for?",
        options: [
            "HyperText Transmission Protocol",
            "HyperText Transfer Protocol",
            "HyperText Transfer Processor"
        ],
        answer:
            "HyperText Transfer Protocol",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 2,
        question: "HTTP is an application layer protocol designed to transfer information between network devices and run on top of other layers of the network layer stack. A typical flow over HTTP involves a client machine making a request to a server which then send a response message. True or false?",
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
        questionNumber: 3,
        question: "What are the 4 most common HTTP methods/verbs?",
        options: [
            "GET, PATCH, PUSH and PULL.",
            "PUSH, PULL and LEGS.",
            "GET, POST, PUT and DELETE."
        ],
        answer:
            "GET, POST, PUT and DELETE.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 4,
        question: "What 5 things are in an HTTP request?",
        options: [
            "HTTP version type, a URL, an HTTP method, HTTP request headers and an optional request body.",
            "HTTP version type, a URI, an HTTP method, HTTP response headers and an optional request body.",
        ],
        answer:
            "HTTP version type, a URL, an HTTP method, HTTP request headers and an optional request body.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 5,
        question: "I contain information such as the browser the client is on and the data being requested. Also I am stored in key-value pairs. What am I?",
        options: [
            "HTTP request body",
            "HTTP response code",
            "HTTP request headers"
        ],
        answer:
            "HTTP request headers",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 6,
        question: "What 3 parts typically make up an HTTP response?",
        options: [
            "A status message, response headers and environment variables.",
            "A status code, response headers and an optional response body.",
            "A status code, response headers and environment variables."
        ],
        answer:
            "A status code, response headers and an optional response body.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 7,
        question: "What does the HTTP status code 1xx indicate? (the “xx” refers to different numbers between 00 and 99)",
        options: [
            "Server Error",
            "Client Error",
            "Redirection",
            "Success",
            "Informational"
        ],
        answer:
            "Informational",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 8,
        question: "What does the HTTP status code 2xx indicate? (the “xx” refers to different numbers between 00 and 99)",
        options: [
            "Server Error",
            "Client Error",
            "Redirection",
            "Success",
            "Informational"
        ],
        answer:
            "Success",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 9,
        question: "What does the HTTP status code 3xx indicate? (the “xx” refers to different numbers between 00 and 99)",
        options: [
            "Server Error",
            "Client Error",
            "Redirection",
            "Success",
            "Informational"
        ],
        answer:
            "Redirection",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 10,
        question: "What does the HTTP status code 4xx indicate? (the “xx” refers to different numbers between 00 and 99)",
        options: [
            "Server Error",
            "Client Error",
            "Redirection",
            "Success",
            "Informational"
        ],
        answer:
            "Client Error",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 11,
        question: "What does the HTTP status code 5xx indicate? (the “xx” refers to different numbers between 00 and 99)",
        options: [
            "Server Error",
            "Client Error",
            "Redirection",
            "Success",
            "Informational"
        ],
        answer:
            "Server Error",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 12,
        question: "Please select an example of a HTTP response header typically contained in a key-value pair.",
        options: [
            "Response body",
            "Content-type (format)",
            "DNS server response"
        ],
        answer:
            "Content-type (format)",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 13,
        question: "DDoS attacks can be launched over HTTP. True or false?",
        options: [
            "True. HTTP requests in large quantities can be used to mount an attack on a target device, and are considered part of application layer attacks or layer 7 attacks.",
            "False. HTTP requests are instant and can handle any number ofrequests at once.",
        ],
        answer:
            "True. HTTP requests in large quantities can be used to mount an attack on a target device, and are considered part of application layer attacks or layer 7 attacks.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 14,
        question: "There are 3 components to most HTTP-based systems. Client/User-agent, ________ and ________.",
        options: [
            "Copy and Paste",
            "Protocols and Layers",
            "Web server and Proxies"
        ],
        answer:
            "Web server and Proxies",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 15,
        question: "True of False - a server is a single machine, either physically or virtually.",
        options: [
            "True. A server must be a single machine as the DNS only keeps record of 1 IP address per server.",
            "False. Although a server appears as only a single machine virtually; it may actually be a collection of servers sharing the load (load balancing), or a complex piece of software interrogating other computers (like cache, a DB server, or e-commerce servers), totally or partially generating the document on demand.",
        ],
        answer:
            "False. Although a server appears as only a single machine virtually; it may actually be a collection of servers sharing the load (load balancing), or a complex piece of software interrogating other computers (like cache, a DB server, or e-commerce servers), totally or partially generating the document on demand.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 16,
        question: "Between the Web browser and the server, numerous computers and machines relay the HTTP messages. Those operating at the application layers are generally called ________.",
        options: [
            "Proxies",
            "Routers",
            "AMQPs"
        ],
        answer:
            "Proxies",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 17,
        question: "Proxies are useful for caching, filtering, load balancing, authentication and logging. True or false?",
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
        questionNumber: 18,
        question: "Proxies can be transparent, forwarding on the requests they receive without altering them in any way, or non-transparent, in which case they will change the request in some way before passing it along to the server. True or false?",
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
        questionNumber: 19,
        question: "True or False - HTTP is stateless, but not session-less.",
        options: [
            "True. HTTP cookies allow the use of stateful sessions (using headers).",
            "False. There is no link between two requests being successively carried out on the same connection, and therefore you cannot create sessions via HTTP."
        ],
        answer:
            "True. HTTP cookies allow the use of stateful sessions (using headers).",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 20,
        question: "Name 5 common features controllable by HTTP.",
        options: [
            "Caching, Relaxing the Origin Constraint, Authoring, Proxy and Tunneling, Sessions.",
            "Caching, Relaxing the Origin Constraint, Authentication, Proxy and Tunneling, Sessions.",
            "Caching, Relaxing the Origin Constraint, Authentication, Proxy and Tunneling, Containerisation."
        ],
        answer:
            "Caching, Relaxing the Origin Constraint, Authentication, Proxy and Tunneling, Sessions.",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 21,
        question: "In HTTP/1, every request to the same server required a separate ______________.",
        options: [
            "Proxy",
            "Server",
            "TCP connection"
        ],
        answer:
            "TCP connection",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 22,
        question: "In order to reuse the same TCP connection for multiple requests and reduce the number of expensive TCP 3-way handshakes, HTTP/1.1 introduced a ___________ mechanism.",
        options: [
            "SIGTERM",
            "Stateful",
            "Keep-alive"
        ],
        answer:
            "Keep-alive",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 23,
        question: "However HTTP/1.1 required each request to be completed before handling subsequent requests over the same connection. This issue is known as ______-___-______ blocking. To avoid performance issues, browsers would keep multiple TCP connections to the same server.",
        options: [
            "Head-Of-Year",
            "Head-Of-Line",
            "Head-Of-Cheese"
        ],
        answer:
            "Head-Of-Line",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 24,
        question: "HTTP/2 published in 2015, introduced HTTP _______ and compressed __________. This allowed multiple ________ of requests to be sent over a single TCP connection.",
        options: [
            "Streams, Headers, Streams",
            "Streams, Headers, Volleys",
            "Streams, Oceans, Lakes"
        ],
        answer:
            "Streams, Headers, Streams",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 25,
        question: "Unlike HTTP/1.1 pipelining, each stream is independent of each other. This stops the ______-___-______ blocking issue at the application layer, but not at the TCP (aka _________ layer).",
        options: [
            "Head-Of-Year, Assemblies",
            "Head-Of-Cheese, Lettuce",
            "Head-Of-Line, Transport"
        ],
        answer:
            "Head-Of-Line, Transport",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 26,
        question: "HTTP/2 also introduced _______  ______, which allows a client to update a requested resource without the client need to pull/re-request.",
        options: [
            "Server push",
            "Server update",
            "Server cache"
        ],
        answer:
            "Server push",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 27,
        question: "HTTP/3, published in June 2022, uses ______ instead of TCP, which is based on an existing protocol - UDP.",
        options: [
            "QUI",
            "QUIC",
            "QUICK"
        ],
        answer:
            "QUIC",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 28,
        question: "_______ streams all share the same connection, so no additional _________ are required for new streams. They are first-class citizens at the __________ layer.",
        options: [
            "QUIC, Handshakes, Transport",
            "QUI, Milkshakes, Telepathic",
            "QUICK, Handshakes, Transport"
        ],
        answer:
            "QUIC, Handshakes, Transport",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 29,
        question: "In most cases, ________ loss in one stream does not effect others, eliminating the head-of-line blocking at the transport layer.",
        options: [
            "Package",
            "Pacman",
            "Packet"
        ],
        answer:
            "Packet",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 30,
        question: "QUIC was designed for heavy ________ usage.",
        options: [
            "Xbox",
            "Mobile",
            "Wii"
        ],
        answer:
            "Mobile",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 31,
        question: "Using TCP, moving between different networks (e.g. wifi, 4G) is sluggish. With QUIC this is fairly seamless by using something called a __________-__. This way your device maintains the same UDP connection.",
        options: [
            "Handshake-ID",
            "Connection-ID",
            "Yo-yo"
        ],
        answer:
            "Connection-ID",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 32,
        question: "Without HTTPS, communication between the browser and server is in __________. HTTPS sends this information ____________.",
        options: [
            "Plaintext, encrypted",
            "JSON, hashed",
            "XML, backwards"
        ],
        answer:
            "Plaintext, encrypted",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 33,
        question: "HTTPS is an extension of the ______ protocol.",
        options: [
            "TCP",
            "IP",
            "HTTP"
        ],
        answer:
            "HTTP",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 34,
        question: "HTTPS encrypts information by using TLS. What does TLS stand for?",
        options: [
            "Terrible Leather Sofa",
            "T-rex's Love Sourdough",
            "Transport Layer Security"
        ],
        answer:
            "Transport Layer Security",
        minSelection: 1,
        maxSelection: 1,
    },
    {
        questionNumber: 35,
        question: "What are the correct steps for HTTPS?",
        options: [
            "1. TCP handshake, 2. Certificate Check, 3. Key Exchange, 4. Data Transmission.",
            "1. TCP handshake, 2. Key Exchange, 3. Certificate Check, 4. Data Transmission.",
            "1. TLS handshake, 2. Certificate Check, 3. Key Exchange, 4. Data Transmission."
        ],
        answer:
            "1. TCP handshake, 2. Certificate Check, 3. Key Exchange, 4. Data Transmission.",
        minSelection: 1,
        maxSelection: 1,
    },
];
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Technology Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px; /* Correctly formatted decimal value */
            background-color: #f0f0f0;
        }
        .quiz-container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 800px;
            margin: 0 auto;
        }
        .question {
            margin-bottom: 25px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .options label {
            display: block;
            margin: 8px 0;
        }
        .incorrect {
            background-color: #ffe6e6;
            border-color: #ff9999;
        }
        .correct-answer {
            color: #009900;
            font-weight: bold;
        }
        #results {
            margin-top: 30px;
            padding: 20px;
            background-color: #e6f3ff;
            border-radius: 5px;
        }
        button {
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="quiz-container">
        <h1>Network Technology Quiz (100 Questions)</h1>
        <div id="quiz"></div>
        <button onclick="submitQuiz()">Submit Answers</button>
        <div id="results"></div>
    </div>

    <script>
        const quizData = [
            // Multiple Choice Questions (1-80)
            {
                question: "1. How many bits are in an IP address?",
                options: ["16 bits", "32 bits", "48 bits", "64 bits"],
                answer: "32 bits"
            },
            {
                question: "2. How many bits are in a MAC address?",
                options: ["32 bits", "48 bits", "64 bits", "128 bits"],
                answer: "48 bits"
            },
            {
                question: "3. What are the two parts of an IP address?",
                options: ["Network and Host", "Subnet and Gateway", "MAC and Port", "DNS and DHCP"],
                answer: "Network and Host"
            },
            {
                question: "4. What is port 25 used for?",
                options: ["HTTP", "FTP", "SMTP", "DNS"],
                answer: "SMTP"
            },
            {
                question: "5. What does the term 'INTERNET' refer to?",
                options: ["A single network", "A giant network of networks", "A type of router", "A protocol"],
                answer: "A giant network of networks"
            },
            {
                question: "6. What is a default gateway?",
                options: ["The IP address of the router", "The MAC address of the switch", "The DNS server address", "The DHCP server address"],
                answer: "The IP address of the router"
            },
            {
                question: "7. What is port 80 used for?",
                options: ["HTTP", "FTP", "SMTP", "DNS"],
                answer: "HTTP"
            },
            {
                question: "8. What is port 23 normally used for?",
                options: ["Telnet", "SSH", "HTTP", "FTP"],
                answer: "Telnet"
            },
            {
                question: "9. What do you call it when an external partner has access to the network?",
                options: ["Intranet", "Extranet", "Internet", "LAN"],
                answer: "Extranet"
            },
            {
                question: "10. What are protocols?",
                options: ["Sets of rules for sending and receiving data", "Types of cables", "Network devices", "IP addresses"],
                answer: "Sets of rules for sending and receiving data"
            },
            {
                question: "11. What is an ephemeral port?",
                options: ["A permanent port number", "A temporary port number assigned to a client", "A port used for DNS", "A port used for HTTP"],
                answer: "A temporary port number assigned to a client"
            },
            {
                question: "12. What is the range of dynamic ports?",
                options: ["0-1023", "1024-49151", "49152-65535", "65536-99999"],
                answer: "49152-65535"
            },
            {
                question: "13. What is a fully connected topology called?",
                options: ["Star", "Bus", "Mesh", "Ring"],
                answer: "Mesh"
            },
            {
                question: "14. What is the OSI model?",
                options: ["A 7-layer networking model", "A type of router", "A protocol for email", "A type of cable"],
                answer: "A 7-layer networking model"
            },
            {
                question: "15. What is encapsulation?",
                options: ["Combining data and code into a single object", "A type of network topology", "A protocol for file transfer", "A type of IP address"],
                answer: "Combining data and code into a single object"
            },
            {
                question: "16. What is a byte?",
                options: ["8 bits", "16 bits", "32 bits", "64 bits"],
                answer: "8 bits"
            },
            {
                question: "17. What is a megabyte?",
                options: ["1024 kilobytes", "1024 gigabytes", "1024 terabytes", "1024 bits"],
                answer: "1024 kilobytes"
            },
            {
                question: "18. What is a terabyte?",
                options: ["1024 gigabytes", "1024 megabytes", "1024 kilobytes", "1024 bits"],
                answer: "1024 gigabytes"
            },
            {
                question: "19. What is QoE?",
                options: ["Quality of Experience (subjective)", "Quality of Service (objective)", "A type of protocol", "A type of network topology"],
                answer: "Quality of Experience (subjective)"
            },
            {
                question: "20. What is QoS?",
                options: ["Quality of Service (objective)", "Quality of Experience (subjective)", "A type of protocol", "A type of network topology"],
                answer: "Quality of Service (objective)"
            },
            {
                question: "21. What is a parity bit?",
                options: ["A method of error detection", "A type of IP address", "A type of protocol", "A type of network topology"],
                answer: "A method of error detection"
            },
            {
                question: "22. What is an SLA?",
                options: ["A contract between a user and provider", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A contract between a user and provider"
            },
            {
                question: "23. What is Fault Tolerance (FT)?",
                options: ["A method to prevent system failure", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A method to prevent system failure"
            },
            {
                question: "24. What is High Availability (HA)?",
                options: ["A method to prevent system failure", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A method to prevent system failure"
            },
            {
                question: "25. What is a socket?",
                options: ["A combination of an IP address and port number", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A combination of an IP address and port number"
            },
            {
                question: "26. What is a physical address?",
                options: ["MAC address", "IP address", "DNS address", "DHCP address"],
                answer: "MAC address"
            },
            {
                question: "27. What is a MAC address?",
                options: ["A 48-bit address used to identify devices", "A 32-bit address used to identify devices", "A 64-bit address used to identify devices", "A 128-bit address used to identify devices"],
                answer: "A 48-bit address used to identify devices"
            },
            {
                question: "28. What is an IP address?",
                options: ["A sequence of numbers that uniquely identifies a device", "A type of protocol", "A type of network topology", "A type of cable"],
                answer: "A sequence of numbers that uniquely identifies a device"
            },
            {
                question: "29. What is a LAN?",
                options: ["A network within a limited area", "A network across a city", "A network across a country", "A network across the world"],
                answer: "A network within a limited area"
            },
            {
                question: "30. What is a WAN?",
                options: ["A network across a large geographic area", "A network within a limited area", "A network across a city", "A network across a building"],
                answer: "A network across a large geographic area"
            },
            {
                question: "31. What is a MAN?",
                options: ["A network across a city", "A network within a limited area", "A network across a country", "A network across the world"],
                answer: "A network across a city"
            },
            {
                question: "32. What is a PAN?",
                options: ["A personal area network", "A network across a city", "A network across a country", "A network across the world"],
                answer: "A personal area network"
            },
            {
                question: "33. What was the first network called?",
                options: ["ARPANET", "INTERNET", "LAN", "WAN"],
                answer: "ARPANET"
            },
            {
                question: "34. What is TCP?",
                options: ["A reliable transport protocol", "A type of network topology", "A type of IP address", "A type of cable"],
                answer: "A reliable transport protocol"
            },
            {
                question: "35. What is a parity check?",
                options: ["A method of error detection", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A method of error detection"
            },
            {
                question: "36. What is CRC?",
                options: ["A method of error detection", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A method of error detection"
            },
            {
                question: "37. What is port 20 and 21 used for?",
                options: ["FTP", "HTTP", "SMTP", "DNS"],
                answer: "FTP"
            },
            {
                question: "38. What is the range of well-known ports?",
                options: ["0-1023", "1024-49151", "49152-65535", "65536-99999"],
                answer: "0-1023"
            },
            {
                question: "39. What is the CPU?",
                options: ["The central processing unit", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "The central processing unit"
            },
            {
                question: "40. What is RAM?",
                options: ["Random Access Memory", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Random Access Memory"
            },
            {
                question: "41. What is storage on a computer?",
                options: ["Where data is permanently kept", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Where data is permanently kept"
            },
            {
                question: "42. What is a motherboard?",
                options: ["The central printed circuit board (PCB) that holds the crucial components of the system", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "The central printed circuit board (PCB) that holds the crucial components of the system"
            },
            {
                question: "43. What is DHCP?",
                options: ["Dynamic Host Configuration Protocol", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Dynamic Host Configuration Protocol"
            },
            {
                question: "44. What is DNS?",
                options: ["The Domain Name System", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "The Domain Name System"
            },
            {
                question: "45. What is TTL?",
                options: ["Time to Live", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Time to Live"
            },
            {
                question: "46. What are sockets?",
                options: ["Interface between application & transport layer", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Interface between application & transport layer"
            },
            {
                question: "47. What are subnet masks?",
                options: ["Used to divide an IP address into two parts", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "Used to divide an IP address into two parts"
            },
            {
                question: "48. What is the OSI model?",
                options: ["A 7-layer networking model", "A type of protocol", "A type of network topology", "A type of IP address"],
                answer: "A 7-layer networking model"
            },
            {
                question: "49. What is the purpose of ARP?",
                options: ["Map IPs to MAC addresses", "Encrypt data", "Assign IPs", "Route packets"],
                answer: "Map IPs to MAC addresses"
            },
            {
                question: "50. What is the purpose of a firewall?",
                options: ["Filter traffic", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Filter traffic"
            },
            {
                question: "51. What is the purpose of a DNS server?",
                options: ["Translate domain names to IPs", "Assign IPs", "Encrypt data", "Route packets"],
                answer: "Translate domain names to IPs"
            },
            {
                question: "52. What is the purpose of a proxy server?",
                options: ["Act as an intermediary", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Act as an intermediary"
            },
            {
                question: "53. What is the purpose of a load balancer?",
                options: ["Distribute traffic", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Distribute traffic"
            },
            {
                question: "54. What is the purpose of an IDS?",
                options: ["Detect and alert on network intrusions", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Detect and alert on network intrusions"
            },
            {
                question: "55. What is the purpose of an IPS?",
                options: ["Detect and prevent network intrusions", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Detect and prevent network intrusions"
            },
            {
                question: "56. What is the purpose of a SIEM system?",
                options: ["Collect and analyze security-related data", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Collect and analyze security-related data"
            },
            {
                question: "57. What is the purpose of a NAC system?",
                options: ["Control network access", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Control network access"
            },
            {
                question: "58. What is the purpose of a WAF?",
                options: ["Protect web apps", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Protect web apps"
            },
            {
                question: "59. What is the purpose of a DLP system?",
                options: ["Prevent data loss", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Prevent data loss"
            },
            {
                question: "60. What is the purpose of a UTM system?",
                options: ["Provide multiple security functions", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Provide multiple security functions"
            },
            {
                question: "61. What is the purpose of a CASB?",
                options: ["Secure cloud apps", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Secure cloud apps"
            },
            {
                question: "62. What is the purpose of a SOAR system?",
                options: ["Automate security responses", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Automate security responses"
            },
            {
                question: "63. What is the purpose of a NETCONF protocol?",
                options: ["Network automation", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Network automation"
            },
            {
                question: "64. What is the purpose of a VXLAN protocol?",
                options: ["Network virtualization", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Network virtualization"
            },
            {
                question: "65. What is the purpose of a LLDP protocol?",
                options: ["Network discovery", "Assign IPs", "Encrypt data", "Resolve domain names"],
                answer: "Network discovery"
            },
            {
                      question: "67. What is the purpose of Ethernet?",
                options: ["To provide a method for devices to communicate over a LAN", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To provide a method for devices to communicate over a LAN"
            },
            {
                question: "68. What is the maximum speed of Gigabit Ethernet?",
                options: ["1 Gbps", "10 Gbps", "100 Mbps", "1000 Mbps"],
                answer: "1 Gbps"
            },
            {
                question: "69. What is the purpose of the Data Link Layer in the OSI model?",
                options: ["To provide node-to-node data transfer", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To provide node-to-node data transfer"
            },
            {
                question: "70. What is the purpose of the Network Layer in the OSI model?",
                options: ["To route packets between networks", "To provide node-to-node data transfer", "To encrypt data", "To resolve domain names"],
                answer: "To route packets between networks"
            },
            {
                question: "71. What is the purpose of the Transport Layer in the OSI model?",
                options: ["To provide end-to-end communication", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To provide end-to-end communication"
            },
            {
                question: "72. What is the purpose of the Physical Layer in the OSI model?",
                options: ["To transmit raw bits over a physical medium", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To transmit raw bits over a physical medium"
            },
            {
                question: "73. What is the purpose of the Session Layer in the OSI model?",
                options: ["To manage sessions between applications", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To manage sessions between applications"
            },
            {
                question: "74. What is the purpose of the Presentation Layer in the OSI model?",
                options: ["To translate data between the application and network formats", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To translate data between the application and network formats"
            },
            {
                question: "75. What is the purpose of the Application Layer in the OSI model?",
                options: ["To provide network services directly to applications", "To route packets between networks", "To encrypt data", "To resolve domain names"],
                answer: "To provide network services directly to applications"
            },
            {
                question: "76. What is the purpose of a VLAN?",
                options: ["To segment a network into multiple broadcast domains", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To segment a network into multiple broadcast domains"
            },
            {
                question: "77. What is the purpose of a trunk port?",
                options: ["To carry traffic for multiple VLANs", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To carry traffic for multiple VLANs"
            },
            {
                question: "78. What is the purpose of a switch?",
                options: ["To forward data based on MAC addresses", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To forward data based on MAC addresses"
            },
            {
                question: "79. What is the purpose of a router?",
                options: ["To forward data based on IP addresses", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To forward data based on IP addresses"
            },
            {
                question: "80. What is the purpose of a hub?",
                options: ["To broadcast data to all connected devices", "To assign IP addresses", "To encrypt data", "To resolve domain names"],
                answer: "To broadcast data to all connected devices"
            },

            // True/False Questions (81-100)
            {
                question: "81. A MAC address is 48 bits long.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "82. An IP address is 64 bits long.",
                options: ["True", "False"],
                answer: "False"
            },
            {
                question: "83. Port 25 is used for HTTP.",
                options: ["True", "False"],
                answer: "False"
            },
            {
                question: "84. A default gateway is the IP address of the router.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "85. Port 80 is used for SMTP.",
                options: ["True", "False"],
                answer: "False"
            },
            {
                question: "86. An extranet allows external partners to access the network.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "87. Dynamic ports range from 49152 to 65535.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "88. The OSI model has 7 layers.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "89. A byte is 16 bits long.",
                options: ["True", "False"],
                answer: "False"
            },
            {
                question: "90. QoS measures network performance objectively.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "91. A parity check is a method of error detection.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "92. CRC is a method of error detection.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "93. Port 20 and 21 are used for FTP.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "94. Well-known ports range from 0 to 1023.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "95. The CPU is the central processing unit.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "96. RAM is where data is permanently kept.",
                options: ["True", "False"],
                answer: "False"
            },
            {
                question: "97. A motherboard holds the crucial components of the system.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "98. DHCP assigns IP addresses automatically.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "99. DNS translates domain names to IP addresses.",
                options: ["True", "False"],
                answer: "True"
            },
            {
                question: "100. TTL is a glorified hop count system.",
                options: ["True", "False"],
                answer: "True"
            }
        ];

        // Initialize quiz
        function buildQuiz() {
            const quizContainer = document.getElementById('quiz');
            quizData.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                questionDiv.innerHTML = `
                    <div class="question-text">${q.question}</div>
                    <div class="options">
                        ${q.options.map(option => `
                            <label>
                                <input type="radio" name="question${index}" value="${option}">
                                ${option}
                            </label>
                        `).join('')}
                    </div>
                `;
                quizContainer.appendChild(questionDiv);
            });
        }

        // Grading function
        function submitQuiz() {
            const resultsContainer = document.getElementById('results');
            let score = 0;
            let wrongAnswers = [];

            quizData.forEach((q, index) => {
                const questionDiv = document.getElementsByClassName('question')[index];
                const selector = `input[name="question${index}"]:checked`;
                const userAnswer = (questionDiv.querySelector(selector) || {}).value;
                
                if(userAnswer === q.answer) {
                    score++;
                } else {
                    wrongAnswers.push({ question: q.question, correctAnswer: q.answer, index: index });
                    questionDiv.classList.add('incorrect');
                    const correctLabel = Array.from(questionDiv.querySelectorAll('label'))
                        .find(label => label.textContent.trim() === q.answer);
                    if (correctLabel) correctLabel.classList.add('correct-answer');
                }
            });

            resultsContainer.innerHTML = `
                <h3>Score: ${score}/100 (${(score/100*100).toFixed(1)}%)</h3>
                ${wrongAnswers.length ? `
                    <h4>Incorrect Answers:</h4>
                    ${wrongAnswers.map(w => `
                        <div class="wrong-answer">
                            <strong>Question ${w.index+1}:</strong> ${w.question}<br>
                            <strong>Correct Answer:</strong> ${w.correctAnswer}
                        </div>
                    `).join('')}
                ` : 'Perfect score! All answers correct!'}
            `;
        }

        // Build quiz on page load
        buildQuiz();
    </script>
</body>
</html>
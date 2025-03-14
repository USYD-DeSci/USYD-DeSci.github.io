// Project data with updated tags
const projectData = {
    "projects": [
        {
            "title": "Blockchain Resilience Through Architectural Hybridisation",
            "expert": "Jiangshan Yu",
            "sponsors": ["ARC DECRA", "ARC Discovery", "Data61 of CSIRO"],
            "tags": ["Blockchain", "Security", "Consensus"],
            "description": "Blockchains are critical to decentralised systems but face persistent challenges in achieving resilience and security. This project addresses these challenges through architectural hybridisation and protocol analysis. By integrating trusted hardware components into blockchain architecture, the project develops hybrid consensus protocols that achieve optimal resilience, tolerate a minority of malicious actors, and maintain high communication efficiency.",
            "achievements": "Research findings adopted by systems such as Monero and NEO to implement patches and improve their security"
        },
        {
            "title": "Scaling Blockchains Through Sharding and Layer 2 Protocols",
            "expert": "Jiangshan Yu",
            "sponsors": [
                "ARC DECRA",
                "ARC Discovery"
            ],
            "tags": [
                "Blockchain",
                "Scalability",
                "Infrastructure"
            ],
            "description": "The scalability of blockchain systems remains a fundamental challenge, limiting their capacity to support the growing demands of applications. This project explores sharding and Layer 2 protocols. Sharding enables blockchain workloads to be partitioned across multiple shards, allowing parallel transaction processing while preserving decentralisation and security.",
            "achievements": "Implemented and deployed by Nervos Network for large scale applications"
        },
        {
            "title": "Ensuring Fault Independence in Blockchain Systems",
            "expert": "Jiangshan Yu",
            "sponsors": [],
            "tags": [
                "Blockchain",
                "Security",
                "Infrastructure"
            ],
            "description": "This project addresses critical security challenges posed by fault interdependencies in blockchains, focusing on safeguarding these systems against catastrophic failures. Fault independence is a fundamental requirement for blockchain resilience; without it, a single software vulnerability can compromise multiple machines.",
            "achievements": "Establishing robust foundations for fault independence in blockchain systems"
        },
        {
            "title": "Blockchain Applications in Digital Infrastructures",
            "expert": "Jiangshan Yu",
            "sponsors": [
                "OCSC",
                "AgriFutures Australia",
                "Building 4.0 CRC",
                "RACE for 2030 CRC",
                "Algorand Foundation"
            ],
            "tags": [
                "Blockchain",
                "Infrastructure",
                "Security"
            ],
            "description": "Blockchain technology holds transformative potential for high-performance digital infrastructures, providing innovative solutions to enhance efficiency, transparency, accountability, and security across critical sectors.",
            "achievements": "Successful collaborations with government agencies on blockchain implementation strategies"
        },
        {
            "title": "Accountability in Web3",
            "expert": "Vincent Gramoli",
            "sponsors": [
                "Ethereum Foundation"
            ],
            "tags": [
                "Web 3.0",
                "Consensus",
                "Decentralised Finance (DeFi)"
            ],
            "description": "Redbelly is a blockchain system that offers security and performance for UTXO and account models. Its security stems from its deterministic consensus protocol (DBFT) and its performance comes from superblock optimization and lightweight validation.",
            "achievements": "Outperforms six mainstream blockchains on the Diablo benchmarking framework"
        },
        {
            "title": "Security Benchmark Suite for Blockchains (Diablo)",
            "expert": "Vincent Gramoli",
            "partners": [
                "Rachid Guerraoui (EPFL)"
            ],
            "tags": [
                "Blockchain",
                "Security",
                "Formal Methods"
            ],
            "description": "Diablo is a benchmark to evaluate blockchain systems, developed in partnership with EPFL. We are extending it to test security vulnerabilities using fuzzing, fault injection, and malicious behavior simulation.",
            "achievements": "Successfully testing multiple attack scenarios including 51% attacks and balance attacks"
        },
        {
            "title": "Asynchronous Consensus Protocols",
            "expert": "Qiang Tang",
            "sponsors": [
                "JD.com",
                "Ethereum Foundation",
                "Stellar Development Foundation"
            ],
            "tags": [
                "Consensus",
                "Blockchain",
                "Scalability"
            ],
            "description": "Development of the Dumbo protocol family for pushing asynchronous BFT consensus to optimal complexity. The project examines real-world blockchain systems and their security under asynchronous network conditions.",
            "achievements": "Published results at PODC20, CCS20,22, NDSS 22"
        },
        {
            "title": "Secure and Large Scale Distributed Infrastructures",
            "expert": "Qiang Tang",
            "sponsors": [
                "Protocol Labs"
            ],
            "tags": [
                "Infrastructure",
                "Security",
                "Scalability"
            ],
            "description": "Pioneering research in distributed key and randomness generation with sub-cubic communication complexity, enabling the first all-hands checkpointing scheme for blockchain validators.",
            "achievements": "Results published at CCS24 and PODC 24"
        },
        {
            "title": "Fair Ordering in Decentralized Systems",
            "expert": [
                "Alan Fekete",
                "Vincent Gramoli",
                "Qiang Tang"
            ],
            "partners": [
                "Christian Cachin"
            ],
            "sponsors": [
                "ARC Discovery"
            ],
            "tags": [
                "Consensus",
                "Decentralised Finance (DeFi)",
                "Security"
            ],
            "description": "Exploring fair access to resources in decentralized systems by developing order fairness protocols that balance practicality with effectiveness against order manipulation attacks.",
            "achievements": "Development of new order fairness notions for practical distributed systems"
        },
        {
            "title": "Private yet Compliable Cryptocurrency Exchange",
            "expert": "Qiang Tang",
            "sponsors": [
                "Stellar Development Foundation"
            ],
            "tags": [
                "Privacy",
                "Decentralised Finance (DeFi)",
                "Security"
            ],
            "description": "Designing efficient privacy-preserving cryptocurrency exchange while maintaining compliance properties such as KYC and overdraft prevention. The Pisces system represents our first implementation.",
            "achievements": "Pisces system presented at NDSS 24"
        },
        {
            "title": "End to End Secure Cloud and Online Collaborations",
            "expert": "Qiang Tang",
            "partners": [
                "Moti Yung"
            ],
            "sponsors": [
                "Google"
            ],
            "tags": [
                "Privacy",
                "Security",
                "Infrastructure"
            ],
            "description": "Developing end-to-end encrypted cloud storage and collaboration tools that maintain security even in case of data breaches. Introduced the End-to-Same-End Encryption (E2SE) concept.",
            "achievements": "E2SE presented at USENIX Security 22"
        },
        {
            "title": "Securing Blockchain Against MEV Manipulation",
            "expert": "Liyi Zhou",
            "tags": [
                "Decentralised Finance (DeFi)",
                "Security",
                "Consensus"
            ],
            "description": "Investigating Maximal Extractable Value patterns and their impact on blockchain fairness and security. Developing algorithms to detect and classify MEV opportunities while creating mitigation mechanisms.",
            "achievements": "New consensus mechanisms for managing MEV extraction"
        },
        {
            "title": "Smart Contract Documentation Consistency Verification",
            "expert": "Liyi Zhou",
            "tags": [
                "Web 3.0",
                "Security",
                "Formal Methods"
            ],
            "description": "Using symbolic execution to detect inconsistencies between smart contract implementations and documentation, helping developers maintain accurate documentation and secure implementations.",
            "achievements": "Automated specification extraction from natural language documentation"
        },
        {
            "title": "Vulnerability Detection in Web3 Protocols",
            "expert": "Liyi Zhou",
            "tags": [
                "Web 3.0",
                "Security",
                "Decentralised Finance (DeFi)"
            ],
            "description": "Developing advanced fuzzing techniques for Web3 protocols and smart contracts, exploring complex state transitions and transaction sequences to identify vulnerabilities.",
            "achievements": "Identification of vulnerabilities in Decentralised Finance (DeFi) protocols and NFT marketplaces"
        },
        {
            "title": "Blockchain Foundation Models for Transaction Analysis",
            "expert": "Liyi Zhou",
            "tags": [
                "Artificial Intelligence (AI)",
                "Blockchain",
                "Security"
            ],
            "description": "Developing foundation models for analyzing blockchain transactions across multiple chains, creating embeddings that capture complex transaction behaviors for security and analysis.",
            "achievements": "Enhanced blockchain security tools with deep learning capabilities"
        },
        {
            "title": "Formal Methods for Distributed Algorithms",
            "expert": "Sasha Rubin",
            "tags": [
                "Formal Methods",
                "Consensus",
                "Security"
            ],
            "description": "Applying automatic and semi-automatic formal methods to verify distributed algorithms, focusing on Asynchronous Byzantine Fault Tolerant protocols.",
            "achievements": "Development of verified distributed algorithms"
        },
        {
            "title": "Proxy-based Knowledge-Payment Exchange",
            "expert": "Aravind Thyagarajan",
            "tags": [
                "Privacy",
                "Decentralised Finance (DeFi)",
                "Security"
            ],
            "description": "Developing secure protocols for knowledge-payment exchanges through proxies, addressing challenges of buyer privacy, payment security, and data transfer integrity.",
            "achievements": "Novel solutions for secure proxy-based exchanges"
        }
    ]
}; 